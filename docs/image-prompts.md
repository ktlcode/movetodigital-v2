# LLM-Optimised Image Generation Prompts

Take these prompts to Google Gemini (or similar) to generate images for the site.

## 1. Hero Background Texture

```
Create a subtle, abstract geometric texture suitable for a website hero section background.
Use warm terracotta and slate tones (#C2714F, #2D3748, #D4A574) on a warm off-white base (#FAFAF7).
Low contrast, muted, minimal. Think architectural blueprint meets topographic contour map.
Fine lines suggesting connection paths between abstract nodes.
No text, no logos, no people, no recognisable objects.
Seamless tileable pattern. Warm stone paper texture feel.
Professional, not decorative. Extremely subtle — must work behind text.
2400x800px, landscape orientation. PNG format with transparency where possible.
```

## 2. About Page — Professional Backdrop

```
Create a clean, minimal professional backdrop image for a technology architect's portfolio page.
Abstract representation of connected systems — subtle nodes and lines suggesting integration
architecture and data flow between platforms.
Warm palette: terracotta (#C2714F), deep slate (#2D3748), honey accent (#D4A574) on warm
off-white (#FAFAF7). No text, no faces, no logos, no stock-photo elements.
Low contrast, suitable as a background image behind text overlay.
Modern, sophisticated, geometric. Think technical diagram abstracted into art.
Subtle grain or paper texture overlay.
1600x900px, landscape orientation.
```

## 3. OpenGraph Share Image

```
Create a minimal Open Graph social media share image for "Move to Digital" — an automation
and integration architecture practice based in Australia.
Dark slate background (#2D3748).
Centred bold text: "Move to Digital" in a warm serif font, colour #C2714F (terracotta).
Below in smaller sans-serif text: "Automation & Integration Architecture" in #D4A574 (warm honey).
Clean, professional, no gradients, no stock imagery, no illustrations.
A single thin horizontal accent line in #C2714F separating the two text lines.
Generous whitespace. Premium feel.
Exactly 1200x630px (required OG image dimensions).
```

## 4. Favicon (Alternative — if SVG doesn't render well)

```
Create a minimal square favicon/app icon.
Dark slate background (#2D3748) with rounded corners (20% radius).
A single bold serif letter "M" centred, in warm terracotta (#C2714F).
Clean, no effects, no gradients, no shadows.
Must be legible at 32x32px and 180x180px.
Output as 512x512px PNG.
```

## Usage Notes

- Hero texture: Place in `public/images/hero-texture.png` and use as a subtle background-image on the Hero component
- About backdrop: Place in `public/images/about-backdrop.png` and use as a subtle background on the About page bio section
- OG image: Place in `public/images/og-image.png` and add `<meta property="og:image" content="https://movetodigital.au/images/og-image.png">` to BaseLayout.astro
- Favicon: Place in `public/favicon.png` and add `<link rel="apple-touch-icon" href="/favicon.png">` to BaseLayout.astro
