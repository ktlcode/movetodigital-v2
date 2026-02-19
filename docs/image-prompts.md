# LLM-Optimised Image Generation Prompts

Take these prompts to Google Gemini Imagen. Each prompt shares a unified style guide to ensure visual consistency across all generated assets.

---

## Shared Style Guide (referenced by all prompts below)

Every image must follow this specification exactly:

**Colour Palette (use ONLY these colours):**
- Primary Terracotta: #C2714F (warm rust-brown)
- Primary Dark: #A85A3A (deeper terracotta for contrast)
- Deep Slate: #2D3748 (dark blue-grey)
- Honey Accent: #D4A574 (warm golden-brown)
- Primary Light: #D4956F (soft peach-terracotta)
- Warm Stone Background: #FAFAF7 (near-white with warm undertone)
- Alternate Background: #F3F0EB (light warm grey-beige)
- Border/Muted: #E5E0DA (warm light grey)

**Visual Style:**
- Flat geometric forms — no 3D, no gradients, no gloss, no drop shadows
- Matte finish throughout, as if printed on uncoated stock paper
- Fine-grain paper texture overlay at 5-8% opacity across the entire image
- Clean vector-like edges — not painterly, not photographic
- Line weight: thin (1-2px equivalent at output resolution)
- Shapes: circles (nodes), straight lines (connections), rounded rectangles (containers)
- The visual language should suggest "system architecture diagram abstracted into minimalist art"

**What to NEVER include:**
- No text, no logos, no watermarks
- No people, faces, hands, or human forms
- No photographic elements or stock imagery
- No lens flare, bokeh, glow, neon, or light effects
- No 3D perspective or isometric views
- No colours outside the palette above

---

## 1. Hero Background Texture

**Dimensions:** 2400 x 800 px, landscape, PNG with transparency

**Description:**
A seamless tileable abstract pattern of interconnected nodes and paths, designed to sit behind website heading text at very low visual prominence.

**Composition:**
- 15-20 small circles (diameter 4-8px equivalent) scattered across the canvas in an organic but balanced distribution — not a rigid grid, not random clutter
- Circles connected by thin straight lines forming a loose network/constellation pattern
- Some circles are connected to 2-3 others, some are isolated — suggesting a partially-connected integration network
- All circles use Primary Terracotta (#C2714F) at 12% opacity
- All connecting lines use Deep Slate (#2D3748) at 6% opacity
- Background: completely transparent (alpha channel)
- Subtle paper grain texture at 5% opacity across the entire image

**Critical requirements:**
- This image sits BEHIND large heading text — it must be extremely subtle
- The overall impression at normal viewing distance should be "warm textured surface" not "network diagram"
- Must tile seamlessly on all edges
- Test: if you squint, you should barely see the pattern

---

## 2. About Page Backdrop

**Dimensions:** 1600 x 900 px, landscape, PNG

**Description:**
An abstract geometric composition suggesting data flow and system integration, suitable as a subtle background behind a biography text block.

**Composition:**
- Left third: 3-4 rounded rectangles (representing source systems) arranged vertically, using Deep Slate (#2D3748) as 8% opacity fills with Border (#E5E0DA) strokes
- Centre: thin horizontal and diagonal connecting lines (Deep Slate at 6% opacity) flowing from left containers toward a central node
- Centre focal point: one slightly larger circle in Primary Terracotta (#C2714F) at 15% opacity — the "bridge" or "integration point"
- Right third: 2-3 rounded rectangles (representing target systems) with connecting lines from the central node
- Sparse — 60%+ of the canvas should be empty Warm Stone Background (#FAFAF7)
- Small Honey Accent (#D4A574) dots at 10% opacity scattered along the connection paths, suggesting data in transit
- Paper grain texture at 5% opacity across entire image

**Critical requirements:**
- This sits behind readable body text — must remain very low contrast
- The eye should first read the text overlay; the background should register as "warm, subtly technical atmosphere"
- No element should have opacity above 15%
- Overall mood: quiet, precise, warm

---

## 3. OpenGraph Share Image

**Dimensions:** Exactly 1200 x 630 px, landscape, PNG

**Description:**
A branded social sharing card for the "Move to Digital" professional practice. This is the ONE image that includes text — it will appear when the URL is shared on LinkedIn, Slack, Twitter, etc.

**Composition — precise layout:**
- Background: solid Deep Slate (#2D3748), full bleed
- Paper grain texture at 8% opacity over the entire background
- Top-left corner: a small abstract node cluster (5-6 circles connected by lines) using Primary Terracotta (#C2714F) at 20% opacity, contained within the top-left 200x200px area — a subtle brand motif
- Vertically centred, horizontally centred:
  - Line 1: "Move to Digital" in a bold geometric sans-serif font (similar to Plus Jakarta Sans or Montserrat Bold), colour Primary Terracotta (#C2714F), size approximately 64px equivalent
  - 24px vertical gap
  - Line 2: A thin horizontal rule, 120px wide, centred, colour Honey Accent (#D4A574) at 60% opacity
  - 16px vertical gap
  - Line 3: "Automation & Integration Architecture" in a regular-weight geometric sans-serif, colour Honey Accent (#D4A574), size approximately 24px equivalent, letter-spacing +1px
- Bottom-right corner: "movetodigital.au" in small text (14px equivalent), colour Border (#E5E0DA) at 50% opacity, 32px from edges

**Critical requirements:**
- Text must be sharp and fully legible at the typical OG preview size (roughly 600x315px display)
- The node cluster in the top-left should NOT compete with the text — it's a subtle atmospheric element
- Overall impression: "serious professional practice" not "tech startup" not "marketing agency"
- Must look good on both light and dark social media backgrounds

---

## 4. Favicon / App Icon

**Dimensions:** 512 x 512 px, square, PNG (will be scaled down to 32x32, 64x64, 180x180)

**Description:**
A minimal square icon representing the "M" of Move to Digital.

**Composition — precise layout:**
- Background: solid Deep Slate (#2D3748), with rounded corners at 20% of width (102px radius)
- Paper grain texture at 6% opacity over the background
- Centred in the square: the uppercase letter "M" in a bold geometric sans-serif font (similar to Plus Jakarta Sans ExtraBold or Montserrat Bold)
- Letter colour: Primary Terracotta (#C2714F)
- Letter should occupy approximately 55-60% of the square's height
- The letter should be optically centred (slightly above mathematical centre, as is standard for icon design)
- No additional decorative elements

**Critical requirements:**
- Must remain legible and recognisable when scaled to 32x32px (browser tab)
- Must also look good at 180x180px (Apple touch icon)
- The "M" must have clean, geometric strokes — no serifs, no decorative features
- Test at small sizes: the letterform should be immediately identifiable

---

## Usage Notes

After generating images, place them in the project:

| Image | File path | Integration |
|-------|-----------|-------------|
| Hero texture | `public/images/hero-texture.png` | Add as CSS `background-image` on Hero component with `opacity: 0.4` and `background-repeat: repeat` |
| About backdrop | `public/images/about-backdrop.png` | Add as CSS `background-image` on the About page bio section with `background-size: cover` and `opacity: 0.3` |
| OG image | `public/images/og-image.png` | Add `<meta property="og:image" content="https://movetodigital.au/images/og-image.png">` to BaseLayout.astro |
| Favicon | `public/favicon.png` | Add `<link rel="apple-touch-icon" href="/favicon.png">` to BaseLayout.astro |
