---
slug: hindi-voice-goes-ga
title: "Hindi voice goes GA: lessons from 3 months of beta"
date: 2026-03-28
tag: Product
author:
  name: Neha Iyer
  role: Product Manager, Voice
  initials: NI
excerpt: "What we learned shipping native Hindi TTS and STT to thousands of drivers — the wins, the bugs, and the surprises."
readTime: 6 min read
featured: false
subtitle: "What we learned shipping native Hindi TTS and STT to thousands of drivers — the wins, the bugs, and the surprises."
coverEmoji: 🎙️
---

Three months ago we opened the Hindi voice beta to 2,000 drivers. Today we're rolling it out to everyone. Here's what we learned.

## Accents are not a bug

Our first STT model was trained mostly on Delhi Hindi. It worked great in Delhi. It failed politely in Bhopal and embarrassingly in Patna. We expanded our training set with 40 hours of regional speech and accuracy on Bihari Hindi jumped from 71% to 94%.

> **Warning: Watch out for code-switching**
> Drivers don't speak pure Hindi. They say 'tu mera load confirm kar de bhai'. Pure Hindi models choke on this. Bilingual training is non-negotiable.

## TTS that doesn't sound like a robot

We ship a 60MB on-device TTS voice — 'Asha' for Hindi, 'Arjun' for English. They're not the most expressive voices in the world, but they sound like a calm dispatcher, not a 1990s GPS.

## What broke (and what we fixed)

- Numbers in Hindi: '21,500' was being read as 'do-ek-paanch-zero-zero'. Now spoken as 'ikkees hazaar paanch sau'.
- Background noise: trucks are loud. We added a small denoiser running pre-STT.
- Wake word false positives: 'TranZfort' triggered on Bollywood songs. We added a 200ms confidence threshold.

If you're building voice for India, build for the highway, not the studio.
