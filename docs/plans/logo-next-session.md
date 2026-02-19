# Logo — Next Session: Refine "M to D" Concept

## Status
7 variations built on `/logo-preview`. Decision narrowed to **F or G** — both use flat-topped M (clipPath) with a honey D letterform as the displaced piece. The M is literally "moving to D(igital)".

**Leaning towards F** (thinner bow, larger counter) over G (heavier bow, smaller counter).

## What Was Done This Session

### Motion treatment (completed)
- Explored thick rounded strokes (A), flat-topped clipPath (B), overlap (C), motion trail (D)
- Ghost trail (faint 15-20% opacity honey shape behind displaced piece) was the winning motion cue
- Subtle tilt (1.5°) on displaced segment, reduced from initial 3-4° which felt too aggressive
- Flat-topped geometry (clipPath clipping miter points) preferred over rounded strokes

### "M to D" concept (completed)
- Displaced piece evolved from a rectangle into a D letterform
- D spine matches M stroke width (24px) so it reads as a piece that broke away
- Bow curves outward from the spine — two bezier curves per side for proper typographic belly
- F has thinner bow (~12px), G has heavier bow (~27px)
- Ghost trail remains rectangular (showing the M leg origin), D is the destination

### D curve refinement (completed)
- Fixed pinched single-bezier bow → split into two curves meeting at vertical midpoint
- D is now widest at centre, tapers naturally at top/bottom returns to spine

## What Needs Work Next

### 1. Choose between F and G
- Review both at multiple sizes (nav, hero, favicon)
- Test on dark background — terracotta M + honey D on slate
- The bow thickness is the deciding factor: F is elegant, G is bolder

### 2. Refinements from design review (not yet done)
- **Dark background previews** for the finalist(s)
- **Finalists comparison strip** — D, F, G side-by-side at icon size (light + dark)
- **Normalise wordmark text spacing** — text x-position varies (160-198) across variants
- **Ghost trail alignment** — consider centring trail on M leg vs inner-edge alignment

### 3. Static variations to produce (after finalist chosen)
- Dark background version
- Monochrome version (single colour, no accent)
- Favicon version (D detail needs exaggeration at 32px)

### 4. Animated logo variant (after static finalised)
- Initial state: complete M (D piece aligned as right leg)
- Animation: piece slides out and morphs into D shape
- Wordmark fades/slides in as D settles
- Homepage hero page-load animation
- Must respect `prefers-reduced-motion`

### 5. Wire into the site
- Replace text logo in Nav with SVG mark
- Add to Hero section
- Update favicon.svg
- Remove `/logo-preview` page before deploy

## Current Finalist SVG Code

### Variation F (thinner bow)
```svg
<!-- Icon -->
<svg viewBox="0 0 175 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="m-clip-f">
      <rect x="0" y="5" width="175" height="115" />
    </clipPath>
  </defs>
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-f)" />
  <rect x="103" y="44" width="24" height="71" fill="#D4A574" opacity="0.15"
        transform="rotate(0.5, 115, 80)" />
  <path d="M 109,53 L 133,53
           C 156,53 170,65 170,84
           C 170,103 156,115 133,115
           L 109,115 Z
           M 133,63
           C 149,63 158,71 158,84
           C 158,97 149,105 133,105 Z"
        fill="#D4A574" fill-rule="evenodd" />
</svg>
```

### Variation G (heavier bow)
```svg
<!-- Icon -->
<svg viewBox="0 0 182 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="m-clip-g">
      <rect x="0" y="5" width="182" height="115" />
    </clipPath>
  </defs>
  <path d="M 15 115 L 15 -15 L 65 58 L 115 -15 L 115 44"
        stroke="#C2714F" stroke-width="24" fill="none"
        stroke-linejoin="miter" stroke-linecap="butt"
        clip-path="url(#m-clip-g)" />
  <rect x="103" y="44" width="24" height="71" fill="#D4A574" opacity="0.15"
        transform="rotate(0.5, 115, 80)" />
  <path d="M 109,53 L 133,53
           C 160,53 178,68 178,84
           C 178,100 160,115 133,115
           L 109,115 Z
           M 133,69
           C 144,69 151,75 151,84
           C 151,93 144,99 133,99 Z"
        fill="#D4A574" fill-rule="evenodd" />
</svg>
```

## Colour Reference
- Primary Terracotta: #C2714F (main M strokes)
- Honey Accent: #D4A574 (displaced D + ghost trail)
- Deep Slate: #2D3748 (wordmark text, dark backgrounds)
- Warm Stone: #FAFAF7 (light backgrounds)
