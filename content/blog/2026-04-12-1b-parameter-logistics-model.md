---
slug: 1b-parameter-logistics-model-offline
title: "How we shipped a 1B-parameter logistics model that runs offline"
date: 2026-04-12
tag: AI
author: Aarav Mehta
authorRole: ML Engineering Lead
excerpt: "Inside the engineering journey of getting a tuned SLM to run on entry-level Android phones — without a single cloud round-trip."
readingTime: 8
featured: true
subtitle: "Inside the engineering journey of getting a tuned SLM to run on entry-level Android phones — without a single cloud round-trip."
authorInitials: AM
coverEmoji: 🤖
---

When we set out to build TranZfort's on-device AI assistant, we had one non-negotiable rule: it must work offline, on the kind of phone a real driver carries — a ₹8,000 Android with 3GB of RAM, a cracked screen protector, and patchy 2G coverage somewhere on NH-44 between Nagpur and Hyderabad. That single constraint shaped every architectural decision we made over the following ten months, and it remains the most defensible thing about the product today.

Cloud LLMs were never an option. The drivers we serve spend four to seven hours a day in genuine network dead zones — tunnels, ghats, forest reserves, low-density highways where even voice calls drop. A round-trip to a GPU in a Mumbai data centre is a luxury they cannot afford, financially or in latency. The economics are simple: a ₹0.40 cloud inference, paid 200 times a day, multiplied by half a million drivers, is a business that does not work. The physics is even simpler: there is no signal, so there is no answer.

So we built the whole thing locally. This is the story of how — the model choices, the painful trade-offs, and the runtime engineering that made a 1-billion-parameter language model feel instant on a phone that costs less than a tank of diesel.

## The constraint that shaped everything

Before we wrote a line of model code, we wrote down our hardware floor. The bottom 30% of our user base runs phones in the ₹6,000–₹10,000 range: a Snapdragon 439 or Helio G35 SoC, 2–3GB of RAM, 32GB of slow eMMC storage, and Android Go. Anything we shipped had to behave reasonably on that device — not just survive a benchmark, but live happily alongside WhatsApp, Maps, the camera, and our own background sync workers.

That hardware floor translated into three hard limits: the model could occupy no more than 800MB on disk, no more than 1.2GB of resident RAM during inference, and had to produce its first token within 800 milliseconds of the user finishing a sentence. Anything slower and drivers would simply use the phone they already trusted: another driver.

We picked a 1-billion-parameter base model and fine-tuned it on 200,000 logistics conversations in Hindi and English, plus a smaller corpus of Marathi, Punjabi, and Tamil. Then the real work began: making it run on the phone.

> **Note: Why 1B parameters?**
> Smaller models (350M) lacked nuance for multi-turn freight negotiations — they would forget the load weight by turn three. Larger models (3B+) couldn't fit in memory alongside the OS, our app, the keyboard, and a TTS engine running concurrently. 1B was the only honest answer to the constraints; everything else was wishful thinking.

## Quantization without losing intent

Quantization is the art of throwing away precision you don't need. In FP16, our model was 2.0GB on disk and used 2.4GB of RAM at runtime — comfortably over our budget. We moved to 4-bit GGUF quantization with a custom mixed-precision recipe, dropping the model to 650MB on disk and 980MB resident. The trick wasn't just compressing weights — it was preserving instruction-following on Hindi prompts, where a single corrupted token can flip a load acceptance into a rejection.

We tried straight INT4 first. Quality fell off a cliff: the model started hallucinating fuel prices and confusing pickup with drop-off cities. The fix was a calibration set drawn from real driver conversations — 5,000 carefully chosen samples that biased the quantization scales toward the vocabulary and intent patterns our users actually produce.

- INT4 weights with FP16 activations on attention layers — best size/quality trade-off we measured
- Custom calibration set: 5,000 driver-language samples mined from anonymised beta logs
- Per-channel quantization for the embedding layer recovered roughly 3% accuracy on Hindi intent classification
- Kept the language-model head in 8-bit; the cost in memory was 12MB and the win in fluency was night and day

### The tokenizer matters more than the model

If we could give one piece of advice to teams building Indic-language LLMs, it would be this: don't inherit your tokenizer. Most open tokenizers fragment Devanagari into single characters, which means a sentence like 'mujhe Delhi se Jaipur ka load chahiye' takes 47 tokens instead of 11. Inference cost scales linearly with sequence length; a bad tokenizer is a 4× tax you pay on every single response, forever.

We trained a 32K SentencePiece tokenizer on a Hindi-English code-mix corpus assembled from driver chats, freight invoices, and our own beta transcripts. Average sequence length dropped by 38%. That alone gave us a 1.7× inference speed-up before we touched any other part of the stack — the cheapest performance win we will ever ship.

> "If your tokenizer doesn't speak your user's language, your model can't either."
> — An ML truism we relearned the hard way

## Picking the runtime

There is no single best inference runtime for mobile. There are trade-offs, and you make them per device class. We benchmarked llama.cpp, MLC-LLM, and ONNX Runtime Mobile across six representative devices ranging from a Redmi 9A to a Pixel 7. llama.cpp with ARM NEON kernels won decisively on low-end CPU-only phones, hitting 7 tokens per second where MLC managed only 4. But MLC's Vulkan backend was nearly 2× faster than llama.cpp on anything mid-tier and up — phones with a real GPU and a recent Mali or Adreno driver.

Rather than pick one, we ship both. At install time, the app probes the device's chipset, GPU driver version, and available RAM, then downloads the runtime that performs best on that exact hardware. The decision adds 4MB to the install size and roughly two seconds to first launch. It also doubles our median throughput across the user base. Worth it.

> **Tip: cold start matters more than steady-state**
> On a Redmi 9A, model load takes 3.2 seconds — long enough that a driver will close the app and re-open it, thinking it's frozen. We mmap the GGUF file at app start, warm the first transformer layer during the splash screen, and pre-allocate the KV cache before the user taps the mic. By the time the recording light comes on, the model is ready to generate.

## Living within the memory budget

Memory is the silent killer on low-end Android. The OS will not warn you that you're close to the limit; it will simply oom-kill your process mid-response. We learned this the hard way during beta, when 7% of inference attempts on 2GB phones ended with the app silently disappearing.

The fix was a memory-aware scheduler that watches available RAM in real time and degrades gracefully. Below 600MB free, we cap the KV cache at 512 tokens. Below 400MB, we shed the secondary tokenizer for autocomplete. Below 300MB, we politely refuse to start a new generation and surface a 'phone is busy' message instead of crashing. Drivers prefer a clear no over a mysterious yes-then-disappear.

## What it looks like in production

Median end-to-end latency from end-of-speech to first spoken response is 1.4 seconds on a ₹8,000 phone, and 0.7 seconds on a mid-range device. Battery cost for a 30-second conversation is roughly equivalent to playing a YouTube video for the same duration. The model handles 94% of in-domain queries without falling back to scripted templates, and it does so with zero network packets crossing the device boundary.

More importantly, drivers don't think of it as 'AI'. In our user interviews, the word that came back most often was 'app'. Just the app. The one that works in the tunnel between Lonavala and Khandala. The one their cousin uses. The one that doesn't ask them to recharge data before it answers a simple question. That, more than any benchmark, is the result we are proudest of.

## What's next

We are now training a 500-million-parameter successor on the same data, with the goal of matching the 1B model's quality at half the footprint. If we succeed, we will be able to ship the assistant on phones with 1.5GB of RAM — opening the door to roughly 80 million more drivers across South Asia, Southeast Asia, and East Africa.

We are also working on a tiny task-specific model for fuel-price extraction that runs in 80MB and lives entirely in the keyboard process, so price queries don't even need the main app to be open. Different problems, same philosophy: meet the user on the hardware they actually own, in the language they actually speak, in the connectivity they actually have.

If you're building edge AI for emerging markets, we'd love to compare notes. The road from research paper to a phone in a driver's pocket is longer and stranger than most papers suggest, and there's room for a lot more of us walking it.
