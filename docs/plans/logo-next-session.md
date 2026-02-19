# Logo — Next Session: Gapped M Iteration

## Chosen Direction
**Concept B — The Gapped M** was selected. The M has a deliberate break in the right leg with the lower segment shifted right and coloured in honey accent (#D4A574).

## What Needs Work

### 1. The gap looks static — needs motion
The displaced piece should feel like it's actively moving/in transit, not just sitting there. Options to explore:
- Angle the displaced segment slightly (not perfectly vertical — tilted 2-5 degrees as if mid-slide)
- Add a subtle motion trail or shadow offset suggesting direction of travel
- Vary the gap distance — explore wider and narrower gaps
- Try the displaced piece partially overlapping the main stroke (mid-transition)
- Consider a very slight horizontal offset increase (the piece has moved further right)

### 2. Animated logo variant
Create an animated SVG version where:
- Initial state: the displaced piece is stacked underneath / aligned with the right leg (complete M, no gap visible)
- Animation: the piece slides out to the right and down, revealing the gap
- As the piece settles into its final position, the wordmark "MOVE TO DIGITAL" fades in or slides in from the right
- This could serve as a page-load animation on the homepage hero
- Should respect prefers-reduced-motion (show final state immediately)

### 3. Static variations to produce
- 3-4 variations of the gap width, offset amount, and angle of the displaced piece
- Dark background version
- Monochrome version (single colour, no accent)
- Favicon version (needs to work at 32px — the gap detail may need to be exaggerated at small sizes)

## Current SVG Code (Concept B)
```svg
<!-- Icon -->
<svg viewBox="0 0 130 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M 15 105 L 15 15 L 60 60 L 105 15 L 105 50"
        stroke="#C2714F" stroke-width="14" fill="none" stroke-linecap="square" stroke-linejoin="miter" />
  <path d="M 111 68 L 111 105"
        stroke="#D4A574" stroke-width="14" fill="none" stroke-linecap="square" />
</svg>

<!-- With wordmark -->
<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
  <g stroke-linecap="square" stroke-linejoin="miter">
    <path d="M 20 100 L 20 20 L 70 65 L 120 20 L 120 48"
          stroke="#C2714F" stroke-width="16" fill="none" />
    <path d="M 126 66 L 126 100"
          stroke="#D4A574" stroke-width="16" fill="none" />
  </g>
  <text x="160" y="72" font-family="'Plus Jakarta Sans'" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">MOVE TO</text>
  <text x="160" y="106" font-family="'Plus Jakarta Sans'" font-weight="700" font-size="32" fill="#2D3748" letter-spacing="2">DIGITAL</text>
</svg>
```

## Colour Reference
- Primary Terracotta: #C2714F (main M strokes)
- Honey Accent: #D4A574 (displaced segment)
- Deep Slate: #2D3748 (wordmark text, dark backgrounds)
- Warm Stone: #FAFAF7 (light backgrounds)
