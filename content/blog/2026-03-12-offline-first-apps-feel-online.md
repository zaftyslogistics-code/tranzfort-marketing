---
slug: offline-first-apps-feel-online
title: "Building offline-first apps that actually feel online"
date: 2026-03-12
tag: Engineering
author: Sanjay Pillai
authorRole: Staff Engineer
excerpt: "Our playbook for sync, conflict resolution, and UX patterns that make 'offline' feel invisible to users."
readingTime: 9
featured: false
subtitle: "Our playbook for sync, conflict resolution, and UX patterns that make 'offline' feel invisible to users."
authorInitials: SP
coverEmoji: 📡
---

'Offline-first' is one of those phrases that sounds simple in a pitch deck and bleeds you dry in production. Here's how we made it work for TranZfort.

## Principle 1: the UI never knows it's offline

Every action in TranZfort writes to a local SQLite queue first, then syncs. The user taps 'accept load' — they see 'accepted' instantly. Whether the server has heard about it is a background problem.

```typescript
async function acceptLoad(loadId: string) {
  await db.queue.insert({ op: "accept", loadId, ts: Date.now() });
  ui.markAccepted(loadId);
  syncQueue.kick(); // fire and forget
}
```

## Principle 2: conflicts are inevitable, design for them

Two drivers accept the same load while both are offline. One wins. The other needs a graceful 'this load was taken' moment, not a stack trace. We use server-authoritative conflict resolution with optimistic UI rollback animated as a soft fade.

> **Warning: Don't trust device clocks**
> We've seen phones with clocks 6 months in the past. All ordering uses server-assigned monotonic IDs, not timestamps.

## Sync that survives 2G

We compress every sync payload with brotli, batch operations into 4KB windows, and resume from the last acknowledged offset. A driver going through a tunnel doesn't reset — they pick up exactly where they left off.
