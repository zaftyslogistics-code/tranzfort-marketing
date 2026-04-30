---
slug: 1b-parameter-logistics-model
title: How we shipped a 1B-parameter logistics model that runs offline
date: 2026-04-12
tag: AI
author: TranZfort Engineering
authorRole: Engineering Team
featured: true
excerpt: Inside the engineering journey of getting a tuned SLM to run on entry-level Android phones — without a single cloud round-trip.
readingTime: 8
---

# How we shipped a 1B-parameter logistics model that runs offline

Inside the engineering journey of getting a tuned SLM to run on entry-level Android phones — without a single cloud round-trip.

## The challenge

When we started TranZfort, we had a clear constraint: our users are truck drivers and suppliers across India, often with limited data plans and spotty connectivity. An AI assistant that requires cloud round-trips simply wouldn't work.

## The solution

We trained a specialized Small Language Model (SLM) tuned for logistics domain knowledge, compressed it to under 100MB, and optimized it to run on devices with 2GB RAM.

## What we learned

- Model quantization is your friend
- Domain-specific tuning beats general-purpose models
- On-device AI is faster, more private, and works offline

The result: sub-100ms response times, zero cloud costs, and an AI that works even on the most remote highways.
