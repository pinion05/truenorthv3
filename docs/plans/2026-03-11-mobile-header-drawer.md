# Mobile Header Drawer Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a mobile hamburger button that opens a right-side global navigation drawer while preserving the current desktop header.

**Architecture:** Extend the shared header into a client component so it can manage drawer state and route-aware highlighting. The mobile header will swap the single top-right CTA for a hamburger control, render a fixed backdrop and sliding drawer, and close cleanly via backdrop click, close button, nav click, and `Escape`. Desktop navigation remains intact.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, `lucide-react`

---

### Task 1: Convert the shared header into a route-aware mobile drawer header

**Files:**
- Modify: `src/components/layout/header.tsx`

**Step 1: Add the required client-side hooks and icons**

Import React state/effect hooks, `usePathname`, and menu icons.

**Step 2: Define shared navigation data**

Create one navigation array so desktop and mobile use the same source of truth.

**Step 3: Add mobile drawer state and behaviors**

Implement:
- open/close state
- `Escape` key handling
- body scroll lock while open
- auto-close after nav click

### Task 2: Render the mobile-specific header controls and drawer

**Files:**
- Modify: `src/components/layout/header.tsx`

**Step 1: Replace the mobile top-right CTA**

Show a hamburger button on mobile instead of the standalone `Apply Now` button.

**Step 2: Keep desktop navigation unchanged**

Desktop still shows the current nav and CTA.

**Step 3: Add the sliding drawer**

Render a fixed backdrop and a right-side panel containing:
- close button
- route-aware nav links
- emphasized `Apply Now` CTA

### Task 3: Verify functionality and mobile rendering

**Files:**
- Verify: `src/components/layout/header.tsx`

**Step 1: Run a production build**

Run:
```bash
bun run build
```

**Step 2: Check mobile behavior in the local app**

Confirm on small screens that:
- the hamburger button appears
- the drawer slides in from the right
- the current page is highlighted
- backdrop click closes the drawer
- nav click closes the drawer
- `Escape` closes the drawer

**Step 3: Confirm desktop header regression-free**

Check that desktop still shows the existing inline navigation and CTA.
