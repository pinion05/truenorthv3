# Mobile Header Drawer Design

**Date:** 2026-03-11

**Goal:** Add a mobile hamburger navigation that opens a right-side drawer for global navigation while keeping the desktop header unchanged.

## Context

The current mobile header keeps a fixed top bar but hides the main navigation and leaves only a single `Apply Now` button. On small screens this reduces discoverability, wastes vertical space, and makes the rest of the site feel harder to navigate.

The user requested a hamburger button and a right-side mobile GNB. The previously identified `/programs` and `/instructors` information-density work is explicitly out of scope for this round.

## Chosen Approach

Use a custom right-side drawer in the shared header component.

- Mobile header shows the `TRUE NORTH` wordmark on the left and a hamburger button on the right.
- Tapping the hamburger opens a fixed drawer from the right edge.
- The drawer includes the global navigation links and a prominent `Apply Now` CTA.
- Tapping the backdrop, the close button, any nav item, or pressing `Escape` closes the drawer.
- While open, body scrolling is locked.
- Desktop navigation remains as-is.

## Alternatives Considered

### 1. Header dropdown below the bar

This would be faster, but it would push content downward awkwardly and feel less premium than the current visual system.

### 2. Dialog/Sheet library abstraction

This would provide accessibility primitives out of the box, but for this small codebase a custom drawer is lighter and easier to tailor to the existing cinematic aesthetic.

## UX Details

- Drawer width should feel substantial but not full-screen, roughly `min(88vw, 360px)`.
- The backdrop should dim the page clearly enough to signal modal focus.
- Active route should be visually distinguished from inactive items.
- The close affordance should be obvious and reachable with one thumb.
- Menu order:
  - `About`
  - `Programs`
  - `How We Teach`
  - `Instructors`
  - `Insights`
  - `FAQ`
  - `Apply Now`

## Technical Notes

- Modify only the shared header for the drawer behavior.
- Use React state for open/closed drawer control.
- Use `usePathname()` to highlight the current route.
- Add `useEffect` hooks for `Escape` handling and body scroll lock.
- Keep the implementation ASCII-only.

## Out of Scope

- Reducing content density on `/programs`
- Reducing content density on `/instructors`
- Reworking page-specific mobile spacing outside of header-related side effects
