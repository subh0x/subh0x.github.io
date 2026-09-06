---
title: 'What I learned migrating a legacy VSTO add-in to OfficeJS'
date: '2026-08-15'
excerpt: 'Notes from moving a Windows-only C# .NET add-in used by 80K+ people to a cross-platform OfficeJS web add-in — decoupling a blocking sync process, and surviving two rounds of UAT with 2,000+ users.'
tags: ['OfficeJS', 'VSTO', '.NET', 'React', 'Migration']
---

For most of my time at PwC, I've worked on a Microsoft Office add-in used across 100+ network firms. It started life as a C# .NET VSTO add-in — Windows-only, ClickOnce-deployed, tightly coupled to COM interop. Over the last year, a big part of my work has been migrating pieces of it to a cross-platform **OfficeJS web add-in**.

![Architecture diagram comparing the legacy VSTO add-in to the new OfficeJS web add-in](/blog/migrating-vsto-to-officejs/architecture.svg)

## The problem that forced the first real architecture change

Before touching the OfficeJS migration itself, we had a more urgent problem: the add-in synced templates from a SharePoint-backed CMS, and that sync ran **on the UI thread**. Every sync blocked Excel, Word, or PowerPoint for 15–20 minutes. Users would open the app and just... wait.

The fix wasn't OfficeJS-related at all — it was decoupling. We pulled the sync logic into a **separate executable**, driven by multi-threading, and had the main add-in talk to it asynchronously instead of doing the work inline. Downtime went from 15–20 minutes to effectively zero.

The lesson that stuck with me: **before you migrate a legacy system, find out which parts of it are actually blocking your users right now.** Those are almost never the parts you'd assume from reading the codebase — they're the parts you hear about from support tickets.

## Migrating without a rewrite

We didn't rewrite the add-in from scratch. We migrated feature-by-feature, starting with Excel, using:

- **React + TypeScript** for the task pane UI
- **Office.js** APIs instead of COM interop
- **Python (FastAPI)** as the backend for the newer GenAI-assisted features

Keeping the legacy VSTO add-in alive in parallel while the OfficeJS version matured meant every migrated feature had to be validated against real usage, not just unit tests. That's what the two rounds of UAT — with over 2,000 users across PwC network firms — were for. The first round caught the interaction differences between COM automation and Office.js's async, promise-based model that no amount of local testing surfaced. The second confirmed we'd actually fixed them.

## What I'd tell someone starting a similar migration

1. **Find the blocking operation first.** It's rarely the feature everyone wants to talk about.
2. **Migrate in slices your users can actually adopt**, not in one big-bang release — Excel first, then the rest.
3. **Budget for UAT rounds, not just QA.** Office.js's async model behaves differently enough from VSTO's COM interop that real usage will find gaps sooner than test suites will.

More on the GenAI side of this work — and the PPT deck generator I've been prototyping since — in a future post.
