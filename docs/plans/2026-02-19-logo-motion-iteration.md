# Gapped M Motion Iteration — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 4 motion-treated variations of the Gapped M logo to the preview page for visual comparison.

**Architecture:** All variations are inline SVGs added to the existing `logo-preview.astro` page in a new section above the current concepts. Variations A uses thick rounded strokes; Variations B–D use thick strokes clipped with `clipPath` for flat tops (Image 1 aesthetic), plus `<rect>` elements for the displaced segment.

**Tech Stack:** Astro 5, inline SVG, Tailwind CSS 4

---

### Task 1: Start the dev server

**Files:** None

**Step 1: Start Astro dev server in background**

Run: `cd /Users/admin/code/movetodigital-v2 && npm run dev`

Expected: Server starts on `localhost:4321` (or similar). Leave running in background.

---

### Task 2: Add the Motion Iterations section scaffold to the preview page

**Files:**
- Modify: `src/pages/logo-preview.astro:5-7` (insert new section before existing concepts)

**Step 1: Add the section scaffold**

Insert after the `<h1>` on line 6 and before Concept A (line 8). The new section goes at the top of the page content:

```html
    <!-- GAPPED M — MOTION ITERATIONS -->
    <div class="mb-20 border-b-2 border-primary/20 pb-16">
      <h2 class="font-[family-name:var(--font-family-heading)] text-xl font-semibold text-primary mb-2 uppercase tracking-widest text-sm">Gapped M — Motion Iterations</h2>
      <p class="text-text-muted mb-10 max-w-xl">Four variations exploring motion treatment for the displaced segment. Addressing the sharp/pointed top geometry from the original.</p>

      <!-- Variation A: Thick Rounded Strokes -->
      <div class="mb-14">
        <h3 class="font-[family-name:var(--font-family-heading)] text-sm font-semibold text-secondary mb-1">Variation A — Thick Rounded Strokes + Subtle Tilt</h3>
        <p class="text-text-muted text-sm mb-6">22px strokes with round joins and caps. Soft dome tops, rounded valley. Displaced segment tilted 3°.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION A: ICON — to be filled in Task 3 -->
          </div>
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION A: WORDMARK — to be filled in Task 3 -->
          </div>
        </div>
      </div>

      <!-- Variation B: Flat-Topped + Wider Offset -->
      <div class="mb-14">
        <h3 class="font-[family-name:var(--font-family-heading)] text-sm font-semibold text-secondary mb-1">Variation B — Flat-Topped + Wider Offset + Tilt (Recommended)</h3>
        <p class="text-text-muted text-sm mb-6">24px strokes clipped flat at the top. Bold, chunky Image 1 feel. Displaced segment +8px right, tilted 4°.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION B: ICON — to be filled in Task 4 -->
          </div>
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION B: WORDMARK — to be filled in Task 4 -->
          </div>
        </div>
      </div>

      <!-- Variation C: Partial Overlap -->
      <div class="mb-14">
        <h3 class="font-[family-name:var(--font-family-heading)] text-sm font-semibold text-secondary mb-1">Variation C — Flat-Topped + Partial Overlap</h3>
        <p class="text-text-muted text-sm mb-6">Same bold geometry as B. Displaced segment overlaps the bottom of the main right leg — caught mid-separation.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION C: ICON — to be filled in Task 5 -->
          </div>
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION C: WORDMARK — to be filled in Task 5 -->
          </div>
        </div>
      </div>

      <!-- Variation D: Motion Trail -->
      <div class="mb-14">
        <h3 class="font-[family-name:var(--font-family-heading)] text-sm font-semibold text-secondary mb-1">Variation D — Flat-Topped + Motion Trail</h3>
        <p class="text-text-muted text-sm mb-6">Same as B plus a faded ghost trail (20% opacity honey) behind the displaced segment.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION D: ICON — to be filled in Task 6 -->
          </div>
          <div class="bg-white rounded-2xl border border-border p-12 flex items-center justify-center">
            <!-- VARIATION D: WORDMARK — to be filled in Task 6 -->
          </div>
        </div>
      </div>
    </div>
```

**Step 2: Verify scaffold renders**

Open `http://localhost:4321/logo-preview` in browser. Confirm the new "Gapped M — Motion Iterations" section appears at the top with empty placeholder cards for each variation.

**Step 3: Commit scaffold**

```bash
git add src/pages/logo-preview.astro
git commit -m "feat: add scaffold for logo motion iteration variations"
```

---

### Task 3: Build Variation A — Thick Rounded Strokes + Subtle Tilt

**Files:**
- Modify: `src/pages/logo-preview.astro` (Variation A placeholder slots)

**Step 1: Add the icon SVG**

Replace the `<!-- VARIATION A: ICON -->` comment with:

```svg
<svg viewBox="0 0 130 120" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
  <!-- Main M body — thick rounded strokes soften the tops and valley -->
  <path d="M 15 110 L 15 12 L 65 62 L 115 12 L 115 48"
        stroke="#C2714F" stroke-width="22" fill="none"
        stroke-linecap="round" stroke-linejoin="round" />
  <!-- Displaced segment — tilted 3° around its centre -->
  <line x1="121" y1="66" x2="121" y2="110"
        stroke="#D4A574" stroke-width="22" stroke-linecap="round"
        transform="rotate(3, 121, 88)" />
</svg>
```

**Step 2: Add the wordmark SVG**

Replace the `<!-- VARIATION A: WORDMARK -->` comment with:

```svg
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[360px]">
  <path d="M 15 110 L 15 12 L 65 62 L 115 12 L 115 48"
        stroke="#C2714F" stroke-width="22" fill="none"
        stroke-linecap="round" stroke-linejoin="round" />
  <line x1="121" y1="66" x2="121" y2="110"
        stroke="#D4A574" stroke-width="22" stroke-linecap="round"
        transform="rotate(3, 121, 88)" />
  <text x="160" y="72" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">MOVE TO</text>
  <text x="160" y="106" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">DIGITAL</text>
</svg>
```

**Step 3: Visual check in browser**

Open `http://localhost:4321/logo-preview`. Confirm Variation A renders with:
- Soft, domed tops on both legs (no sharp points)
- Smooth rounded V valley
- Displaced honey segment with slight tilt
- Thick, bold strokes giving the M visual weight

**Note:** If the geometry looks off (legs too thick, valley too soft, tilt amount wrong), adjust the stroke-width, path coordinates, and rotation angle. The exact numbers may need 2-3 iterations to feel right.

**Step 4: Commit**

```bash
git add src/pages/logo-preview.astro
git commit -m "feat: add Variation A — thick rounded strokes with subtle tilt"
```

---

### Task 4: Build Variation B — Flat-Topped + Wider Offset + Tilt

**Files:**
- Modify: `src/pages/logo-preview.astro` (Variation B placeholder slots)

**Step 1: Add the icon SVG**

Replace the `<!-- VARIATION B: ICON -->` comment with:

```svg
<svg viewBox="0 0 145 120" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
  <defs>
    <clipPath id="m-clip-b">
      <!-- Clips the miter points flat at y=5 -->
      <rect x="0" y="5" width="145" height="115" />
    </clipPath>
  </defs>
  <!-- Main M body — paths extended above clip boundary so miter points get cut flat -->
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-b)" />
  <!-- Displaced segment — pushed +8px right, tilted 4° -->
  <rect x="115" y="62" width="24" height="53" fill="#D4A574"
        transform="rotate(4, 127, 88)" />
</svg>
```

**Step 2: Add the wordmark SVG**

Replace the `<!-- VARIATION B: WORDMARK -->` comment with:

```svg
<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[380px]">
  <defs>
    <clipPath id="m-clip-b-wm">
      <rect x="0" y="5" width="145" height="115" />
    </clipPath>
  </defs>
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-b-wm)" />
  <rect x="115" y="62" width="24" height="53" fill="#D4A574"
        transform="rotate(4, 127, 88)" />
  <text x="165" y="72" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">MOVE TO</text>
  <text x="165" y="106" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">DIGITAL</text>
</svg>
```

**Step 3: Visual check in browser**

Confirm Variation B renders with:
- Flat, square tops on both legs (like Image 1)
- Sharp V valley (NOT rounded — the clip only affects the tops)
- Bold, heavy strokes (24px)
- Displaced honey rectangle clearly offset to the right with visible tilt
- The gap between main M and displaced piece should feel decisive, not timid

**Tuning notes:**
- If the flat tops don't clip cleanly, adjust the `y` value in the clipPath rect and the path top coordinates (`-15` → more negative to push the miter further above the clip)
- If the displaced piece looks too far or too close, adjust the rect x position
- If the tilt looks too strong/weak, adjust the rotation degrees

**Step 4: Commit**

```bash
git add src/pages/logo-preview.astro
git commit -m "feat: add Variation B — flat-topped with wider offset and tilt"
```

---

### Task 5: Build Variation C — Flat-Topped + Partial Overlap

**Files:**
- Modify: `src/pages/logo-preview.astro` (Variation C placeholder slots)

**Step 1: Add the icon SVG**

Replace the `<!-- VARIATION C: ICON -->` comment with:

```svg
<svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
  <defs>
    <clipPath id="m-clip-c">
      <rect x="0" y="5" width="140" height="115" />
    </clipPath>
  </defs>
  <!-- Main M body — right leg extends lower to show overlap zone -->
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 56"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-c)" />
  <!-- Displaced segment — starts HIGHER, overlapping the main right leg bottom -->
  <rect x="111" y="40" width="24" height="75" fill="#D4A574"
        transform="rotate(3, 123, 78)" />
</svg>
```

**Step 2: Add the wordmark SVG**

Replace the `<!-- VARIATION C: WORDMARK -->` comment with:

```svg
<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[380px]">
  <defs>
    <clipPath id="m-clip-c-wm">
      <rect x="0" y="5" width="140" height="115" />
    </clipPath>
  </defs>
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 56"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-c-wm)" />
  <rect x="111" y="40" width="24" height="75" fill="#D4A574"
        transform="rotate(3, 123, 78)" />
  <text x="160" y="72" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">MOVE TO</text>
  <text x="160" y="106" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">DIGITAL</text>
</svg>
```

**Step 3: Visual check in browser**

Confirm Variation C renders with:
- Same flat-topped, bold geometry as B
- The honey displaced piece visibly overlaps the bottom of the terracotta right leg
- The overlap zone should read as "mid-separation" — the piece is sliding out
- If it looks like a rendering error rather than intentional motion, adjust the overlap amount (change rect y) or tilt

**Step 4: Commit**

```bash
git add src/pages/logo-preview.astro
git commit -m "feat: add Variation C — flat-topped with partial overlap"
```

---

### Task 6: Build Variation D — Flat-Topped + Motion Trail

**Files:**
- Modify: `src/pages/logo-preview.astro` (Variation D placeholder slots)

**Step 1: Add the icon SVG**

Replace the `<!-- VARIATION D: ICON -->` comment with:

```svg
<svg viewBox="0 0 145 120" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
  <defs>
    <clipPath id="m-clip-d">
      <rect x="0" y="5" width="145" height="115" />
    </clipPath>
  </defs>
  <!-- Main M body -->
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-d)" />
  <!-- Ghost trail — connects displaced piece back to origin position -->
  <rect x="103" y="44" width="24" height="71" fill="#D4A574" opacity="0.2"
        transform="rotate(2, 115, 80)" />
  <!-- Displaced segment — same position as Variation B -->
  <rect x="115" y="62" width="24" height="53" fill="#D4A574"
        transform="rotate(4, 127, 88)" />
</svg>
```

**Step 2: Add the wordmark SVG**

Replace the `<!-- VARIATION D: WORDMARK -->` comment with:

```svg
<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-[380px]">
  <defs>
    <clipPath id="m-clip-d-wm">
      <rect x="0" y="5" width="145" height="115" />
    </clipPath>
  </defs>
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-d-wm)" />
  <rect x="103" y="44" width="24" height="71" fill="#D4A574" opacity="0.2"
        transform="rotate(2, 115, 80)" />
  <rect x="115" y="62" width="24" height="53" fill="#D4A574"
        transform="rotate(4, 127, 88)" />
  <text x="165" y="72" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">MOVE TO</text>
  <text x="165" y="106" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">DIGITAL</text>
</svg>
```

**Step 3: Visual check in browser**

Confirm Variation D renders with:
- Same bold geometry as B
- A faded honey ghost rectangle sitting between the gap start and the displaced piece
- The ghost trail should feel like an afterimage/motion blur — subtle, not distracting
- If the trail opacity is too strong/weak, adjust the `opacity` value (try 0.15–0.25)
- If the trail shape doesn't convincingly connect origin to destination, adjust its position/angle

**Step 4: Commit**

```bash
git add src/pages/logo-preview.astro
git commit -m "feat: add Variation D — flat-topped with motion trail"
```

---

### Task 7: Visual refinement pass

**Files:**
- Modify: `src/pages/logo-preview.astro`

**Step 1: Compare all four variations side by side**

Open `http://localhost:4321/logo-preview` and scroll through all four variations. Check:
- Do the proportions feel consistent across all variations?
- Do the flat-topped versions (B/C/D) look clean at the clip boundary?
- Is the displaced segment visible enough to read as intentional at a glance?
- Does the V valley feel right (not too sharp, not too rounded)?
- Do the wordmark versions feel balanced (icon not too heavy relative to text)?

**Step 2: Adjust any coordinates that look off**

Likely tweaks:
- Stroke width (try 20, 22, 24, 26 to find the sweet spot)
- Gap distance (vertical space between main M bottom and displaced segment top)
- Horizontal offset of displaced segment
- Tilt angle (2° vs 3° vs 4° vs 5°)
- ClipPath y-position for flat-top cutoff height
- ViewBox width for variations with wider offset

**Step 3: Commit final adjustments**

```bash
git add src/pages/logo-preview.astro
git commit -m "refine: adjust logo variation geometry after visual review"
```

---

### Task 8: Add the original Concept B as reference

**Files:**
- Modify: `src/pages/logo-preview.astro`

**Step 1: Ensure the original Concept B section (line 62–123) is still present below the new iterations section**

The new section was inserted ABOVE the existing concepts. Verify the original Concept B ("The Gapped M") still renders below for comparison. No changes needed if the scaffold was inserted correctly in Task 2.

**Step 2: Final full-page visual check**

Scroll through the entire page. The order should be:
1. "Gapped M — Motion Iterations" (new, 4 variations)
2. "Concept A — The Circuit M" (existing)
3. "Concept B — The Gapped M" (existing — the original for comparison)
4. "Concept C — The Arrow Wordmark" (existing)
5. Side-by-side dark background comparison (existing)

**Step 3: Final commit if anything changed**

```bash
git add src/pages/logo-preview.astro
git commit -m "chore: verify logo preview page layout with new iterations"
```
