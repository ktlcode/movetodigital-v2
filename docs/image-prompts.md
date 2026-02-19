# LLM-Optimised Image Generation Prompts

Take these prompts to Google Gemini Imagen. Each prompt is fully self-contained — copy and paste one at a time.

---

## 1. Hero Background Texture

```
Create a seamless tileable abstract pattern of interconnected nodes and paths, designed to sit behind website heading text at very low visual prominence. Dimensions: 2400 x 800 px, landscape orientation, PNG with transparency.

COLOUR PALETTE — use ONLY these colours, no others:
- Primary Terracotta: #C2714F (warm rust-brown)
- Primary Dark: #A85A3A (deeper terracotta for contrast)
- Deep Slate: #2D3748 (dark blue-grey)
- Honey Accent: #D4A574 (warm golden-brown)
- Primary Light: #D4956F (soft peach-terracotta)
- Warm Stone Background: #FAFAF7 (near-white with warm undertone)
- Alternate Background: #F3F0EB (light warm grey-beige)
- Border/Muted: #E5E0DA (warm light grey)

VISUAL STYLE — apply to the entire image:
- Flat geometric forms — no 3D, no gradients, no gloss, no drop shadows
- Matte finish throughout, as if printed on uncoated stock paper
- Fine-grain paper texture overlay at 5% opacity across the entire image
- Clean vector-like edges — not painterly, not photographic
- Line weight: thin (1-2px equivalent at output resolution)
- Shapes: circles (nodes) and straight lines (connections)
- The visual language should suggest "system architecture diagram abstracted into minimalist art"

COMPOSITION:
- 15-20 small circles (diameter 4-8px equivalent) scattered across the canvas in an organic but balanced distribution — not a rigid grid, not random clutter
- Circles connected by thin straight lines forming a loose network/constellation pattern
- Some circles are connected to 2-3 others, some are isolated — suggesting a partially-connected integration network
- All circles use Primary Terracotta (#C2714F) at 12% opacity
- All connecting lines use Deep Slate (#2D3748) at 6% opacity
- Background: completely transparent (alpha channel)

CRITICAL REQUIREMENTS:
- This image sits BEHIND large heading text — it must be extremely subtle
- The overall impression at normal viewing distance should be "warm textured surface" not "network diagram"
- Must tile seamlessly on all four edges
- Test: if you squint, you should barely see the pattern

NEVER INCLUDE: text, logos, watermarks, people, faces, hands, human forms, photographic elements, stock imagery, lens flare, bokeh, glow, neon, light effects, 3D perspective, isometric views, or any colours outside the palette above.
```

---

## 2. About Page Backdrop

```
Create an abstract geometric composition suggesting data flow and system integration, suitable as a subtle background behind a biography text block on a professional portfolio website. Dimensions: 1600 x 900 px, landscape orientation, PNG.

COLOUR PALETTE — use ONLY these colours, no others:
- Primary Terracotta: #C2714F (warm rust-brown)
- Primary Dark: #A85A3A (deeper terracotta for contrast)
- Deep Slate: #2D3748 (dark blue-grey)
- Honey Accent: #D4A574 (warm golden-brown)
- Primary Light: #D4956F (soft peach-terracotta)
- Warm Stone Background: #FAFAF7 (near-white with warm undertone)
- Alternate Background: #F3F0EB (light warm grey-beige)
- Border/Muted: #E5E0DA (warm light grey)

VISUAL STYLE — apply to the entire image:
- Flat geometric forms — no 3D, no gradients, no gloss, no drop shadows
- Matte finish throughout, as if printed on uncoated stock paper
- Fine-grain paper texture overlay at 5% opacity across the entire image
- Clean vector-like edges — not painterly, not photographic
- Line weight: thin (1-2px equivalent at output resolution)
- Shapes: circles (nodes), straight lines (connections), rounded rectangles (containers)
- The visual language should suggest "system architecture diagram abstracted into minimalist art"

COMPOSITION:
- Left third: 3-4 rounded rectangles (representing source systems) arranged vertically, using Deep Slate (#2D3748) as 8% opacity fills with Border (#E5E0DA) strokes
- Centre: thin horizontal and diagonal connecting lines (Deep Slate at 6% opacity) flowing from left containers toward a central node
- Centre focal point: one slightly larger circle in Primary Terracotta (#C2714F) at 15% opacity — the "bridge" or "integration point"
- Right third: 2-3 rounded rectangles (representing target systems) with connecting lines from the central node
- Sparse — 60%+ of the canvas should be empty Warm Stone Background (#FAFAF7)
- Small Honey Accent (#D4A574) dots at 10% opacity scattered along the connection paths, suggesting data in transit

CRITICAL REQUIREMENTS:
- This sits behind readable body text — must remain very low contrast
- The eye should first read the text overlay; the background should register as "warm, subtly technical atmosphere"
- No element should have opacity above 15%
- Overall mood: quiet, precise, warm

NEVER INCLUDE: text, logos, watermarks, people, faces, hands, human forms, photographic elements, stock imagery, lens flare, bokeh, glow, neon, light effects, 3D perspective, isometric views, or any colours outside the palette above.
```

---

## 3. OpenGraph Share Image

```
Create a branded social sharing card for "Move to Digital" — a professional automation and integration architecture practice based in Australia. This image will appear when the URL is shared on LinkedIn, Slack, and Twitter. Dimensions: exactly 1200 x 630 px, landscape orientation, PNG.

COLOUR PALETTE — use ONLY these colours, no others:
- Primary Terracotta: #C2714F (warm rust-brown)
- Primary Dark: #A85A3A (deeper terracotta for contrast)
- Deep Slate: #2D3748 (dark blue-grey)
- Honey Accent: #D4A574 (warm golden-brown)
- Primary Light: #D4956F (soft peach-terracotta)
- Warm Stone Background: #FAFAF7 (near-white with warm undertone)
- Alternate Background: #F3F0EB (light warm grey-beige)
- Border/Muted: #E5E0DA (warm light grey)

VISUAL STYLE — apply to the entire image:
- Flat geometric forms — no 3D, no gradients, no gloss, no drop shadows
- Matte finish throughout, as if printed on uncoated stock paper
- Fine-grain paper texture overlay at 8% opacity across the entire background
- Clean vector-like edges — not painterly, not photographic
- The visual language should suggest "system architecture diagram abstracted into minimalist art"

COMPOSITION — precise layout:
- Background: solid Deep Slate (#2D3748), full bleed
- Top-left corner: a small abstract node cluster (5-6 small circles connected by thin lines) using Primary Terracotta (#C2714F) at 20% opacity, contained within the top-left 200x200px area — a subtle brand motif
- Vertically centred, horizontally centred:
  - Line 1: "Move to Digital" in a bold geometric sans-serif font (similar to Plus Jakarta Sans Bold or Montserrat Bold), colour Primary Terracotta (#C2714F), size approximately 64px equivalent
  - 24px vertical gap
  - Line 2: A thin horizontal rule, 120px wide, centred, colour Honey Accent (#D4A574) at 60% opacity
  - 16px vertical gap
  - Line 3: "Automation & Integration Architecture" in a regular-weight geometric sans-serif font, colour Honey Accent (#D4A574), size approximately 24px equivalent, letter-spacing +1px
- Bottom-right corner: "movetodigital.au" in small text (14px equivalent), colour Border (#E5E0DA) at 50% opacity, 32px from edges

CRITICAL REQUIREMENTS:
- Text must be sharp and fully legible at the typical OG preview size (roughly 600x315px display)
- The node cluster in the top-left should NOT compete with the text — it is a subtle atmospheric element
- Overall impression: "serious professional practice" — not "tech startup", not "marketing agency"
- Must look good on both light and dark social media backgrounds

NEVER INCLUDE: stock imagery, photographic elements, lens flare, bokeh, glow, neon, light effects, 3D perspective, isometric views, illustrations of people or objects, or any colours outside the palette above.
```

---

## 4. Favicon / App Icon

```
Create a minimal square app icon representing the letter "M" for the brand "Move to Digital". This will be used as a browser favicon and mobile app icon. Dimensions: 512 x 512 px, square, PNG. It will be scaled down to 32x32, 64x64, and 180x180 for various uses.

COLOUR PALETTE — use ONLY these colours, no others:
- Primary Terracotta: #C2714F (warm rust-brown)
- Primary Dark: #A85A3A (deeper terracotta for contrast)
- Deep Slate: #2D3748 (dark blue-grey)
- Honey Accent: #D4A574 (warm golden-brown)
- Primary Light: #D4956F (soft peach-terracotta)
- Warm Stone Background: #FAFAF7 (near-white with warm undertone)
- Alternate Background: #F3F0EB (light warm grey-beige)
- Border/Muted: #E5E0DA (warm light grey)

VISUAL STYLE — apply to the entire image:
- Flat geometric forms — no 3D, no gradients, no gloss, no drop shadows
- Matte finish throughout, as if printed on uncoated stock paper
- Fine-grain paper texture overlay at 6% opacity across the background
- Clean vector-like edges — not painterly, not photographic

COMPOSITION — precise layout:
- Background: solid Deep Slate (#2D3748), with rounded corners at 20% of width (102px radius)
- Centred in the square: the uppercase letter "M" in a bold geometric sans-serif font (similar to Plus Jakarta Sans ExtraBold or Montserrat Bold)
- Letter colour: Primary Terracotta (#C2714F)
- Letter should occupy approximately 55-60% of the square's height
- The letter should be optically centred (slightly above mathematical centre, as is standard for icon design)
- No additional decorative elements whatsoever

CRITICAL REQUIREMENTS:
- Must remain legible and recognisable when scaled to 32x32px (browser tab size)
- Must also look good at 180x180px (Apple touch icon size)
- The "M" must have clean, geometric strokes — no serifs, no decorative features
- Test at small sizes: the letterform should be immediately identifiable as the letter M

NEVER INCLUDE: additional text, logos, watermarks, people, faces, hands, human forms, photographic elements, stock imagery, lens flare, bokeh, glow, neon, light effects, 3D perspective, isometric views, decorative borders, extra shapes, or any colours outside the palette above.
```

---

## Usage Notes

After generating images, place them in the project:

| Image | File path | Integration |
|-------|-----------|-------------|
| Hero texture | `public/images/hero-texture.png` | Add as CSS `background-image` on Hero component with `opacity: 0.4` and `background-repeat: repeat` |
| About backdrop | `public/images/about-backdrop.png` | Add as CSS `background-image` on the About page bio section with `background-size: cover` and `opacity: 0.3` |
| OG image | `public/images/og-image.png` | Add `<meta property="og:image" content="https://movetodigital.au/images/og-image.png">` to BaseLayout.astro |
| Favicon | `public/favicon.png` | Add `<link rel="apple-touch-icon" href="/favicon.png">` to BaseLayout.astro |
