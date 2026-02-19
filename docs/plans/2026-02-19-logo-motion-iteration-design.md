# Logo Motion Iteration — Design Document

**Date:** 2026-02-19
**Status:** Approved
**Scope:** Static motion treatment for the Gapped M mark

## Context

Concept B (Gapped M) was selected as the logo direction. The M has a deliberate break in the right leg with the lower segment offset and coloured in honey accent (#D4A574).

**Problem:** The current SVG uses thin strokes (14–16px) with miter joins, creating sharp, pointed peaks at the top of each leg and at the V-valley. The mark feels lightweight and angular — it needs more weight and softer geometry.

**Reference:** Three Gemini-generated images were reviewed (not approved, used as inspiration). Key takeaway: the M needs bold, filled shapes with blunt/flat tops rather than thin pointed strokes.

## Approach

Produce 4 variations on the logo preview page for side-by-side comparison. Three use filled polygon shapes (no strokes), one uses thick rounded strokes.

## Variations

### Variation A — Thick Rounded Strokes + Subtle Tilt
- Same M path geometry as current but with `stroke-width="22"`, `stroke-linejoin="round"`, `stroke-linecap="round"`
- Displaced segment tilted ~3° clockwise
- Same horizontal offset as current
- Purpose: Test whether heavier strokes + rounding solves the sharpness, or whether filled shapes are needed

### Variation B — Filled Shapes + Wider Offset + Tilt (Recommended)
- M constructed from filled polygons — flat, square tops on each leg
- Displaced segment as a separate filled rectangle, tilted ~4°, pushed +6px further right
- Inspired by Gemini Image 1 (bold, chunky, substantial)
- Purpose: The expected winner — clearly intentional gap, clearly in transit

### Variation C — Filled Shapes + Partial Overlap
- Same filled-shape construction as B
- Displaced segment overlaps the bottom of the main right leg (caught mid-separation)
- Purpose: Test whether the overlap reads as "dynamic" or "rendering error"

### Variation D — Filled Shapes + Motion Trail
- Same geometry as B
- Adds a faded ghost trail (honey #D4A574 at 20% opacity) behind the displaced segment, connecting it visually to where it came from
- Purpose: Test whether explicit motion cue adds or clutters

## Rendering

Each variation shown at two sizes:
1. **Icon only** (~130x120 viewBox)
2. **With wordmark** (~400x120 viewBox, "MOVE TO DIGITAL" in Plus Jakarta Sans 700, Deep Slate #2D3748)

## Preview Page Layout

New section on `/logo-preview` page:
- Header: "Gapped M — Motion Iterations"
- 2-column grid, 4 rows (A–D): icon left, wordmark right
- Each row labelled with variation name + one-line description
- Shown on warm stone background (#FAFAF7)
- Original Concept B kept below for comparison

## Out of Scope (This Session)

- CSS/SVG animation (comes after winning static mark is chosen)
- Dark background, monochrome, and favicon variants (after mark finalised)
- Wiring logo into Nav or Hero components (after final selection)

## Colour Reference

| Colour | Hex | Usage |
|--------|-----|-------|
| Terracotta | #C2714F | Main M strokes/fill |
| Honey | #D4A574 | Displaced segment |
| Deep Slate | #2D3748 | Wordmark text |
| Warm Stone | #FAFAF7 | Background |
