# Move to Digital — Enterprise Credibility Site Design

**Date**: 2026-02-19
**Status**: Approved (implemented, with subsequent refinements — see changelog below)

## Purpose

Rebuild movetodigital.au as a minimal credibility site for an Australian enterprise-focused automation/integration architect. Not an agency site. Not a startup landing page. A professional portfolio and support hub.

## Audience

- Australian enterprise, government, utilities, consultancies evaluating the architect
- Users of ClientForms.app and WaitingForAMate.com needing support

## Tech Stack

| Choice | Rationale |
|--------|-----------|
| Astro 5 (static output) | Simplest framework for content site, zero JS by default, Cloudflare Pages native support |
| Tailwind CSS 4 | Utility-first, consistent with other projects |
| Lordicon animated icons | Professional Lottie-based animated icons via CDN |
| Vanilla JS (~20 lines) | Scroll-triggered reveals via IntersectionObserver |
| Cloudflare Pages (free tier) | Static file hosting, unlimited bandwidth |

## Colour Palette — "Warm Terracotta/Slate"

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#C2714F` | Terracotta — CTAs, links, accent borders |
| `--primary-dark` | `#A85A3A` | Hover states, active elements |
| `--primary-light` | `#D4956F` | Subtle highlights, icon tints |
| `--secondary` | `#2D3748` | Deep slate — headings, nav |
| `--secondary-light` | `#4A5568` | Subheadings, secondary text |
| `--accent` | `#D4A574` | Warm honey — badges, tags |
| `--bg` | `#FAFAF7` | Warm stone white — main background |
| `--bg-alt` | `#F3F0EB` | Alternating sections |
| `--surface` | `#FFFFFF` | Cards, elevated surfaces |
| `--text` | `#2D2A26` | Rich dark brown — body text |
| `--text-muted` | `#6B6560` | Secondary/caption text |
| `--border` | `#E5E0DA` | Warm subtle borders |

## Typography

- Headings: Inter (bold, tracking-tight)
- Body: Inter (regular, 1.6 line-height)
- Mono accents: JetBrains Mono (architecture diagrams, code mentions)

## Pages

### 1. Home (/)
- Hero: "Move to Digital" + "Secure automation & integration architecture for regulated environments."
- 3 proof pillar cards (animated Lordicon icons):
  1. Integration Architecture (APIs, event-driven)
  2. Security-by-Design (OAuth2, TLS, least privilege)
  3. Delivery in Regulated Environments (gov/utilities, NV1)
- Selected Work section → Case Studies
- Apps & Support section → Support Hub
- Contact CTA strip

### 2. Case Studies (/case-studies)
- Case Study A: Gallagher ↔ Telstra SMS Bridge
  - Problem, Approach, Architecture (inline SVG diagram), Security, Outcomes, Extensibility
  - Engagement model note
- Case Study B (smaller): PDF-to-digital-workflow automation pattern

### 3. Support Hub (/support)
- App cards: ClientForms.app, WaitingForAMate.com
- Support policy (best-effort, security reporting)
- System status placeholder

### 4. About (/about)
- Professional bio (20+ years, gov/utilities, Brisbane, NV1)
- "How I Work": discovery → architecture → build → handover
- Links: LinkedIn, email

### 5. Privacy (/privacy)
- General portfolio privacy statement
- Per-app privacy policy placeholders

### 6. Security (/security)
- Responsible disclosure instructions
- Reporting email, what info to include

## Interactive Elements
- Scroll-triggered section reveals (CSS animations + IntersectionObserver)
- Lordicon animated icons (hover-triggered on desktop, scroll-triggered on mobile)
- Interactive SVG architecture diagram (hover highlights)
- Astro View Transitions (built-in page transitions)
- Mobile slide-out nav with backdrop blur

## Accessibility
- WCAG AA contrast minimum on all text
- Focus-visible rings on interactive elements
- prefers-reduced-motion respected
- Semantic HTML with proper heading hierarchy
- Skip-to-content link
- Semantic landmarks (nav, main, footer)

## SEO
- Per-page title, meta description, canonical URL
- OpenGraph + Twitter card meta
- robots.txt + sitemap.xml
- Semantic HTML throughout

## Copy Rules
- Australian English
- Senior architect tone: clear, direct, grounded
- Avoid: "revolutionary", "disrupt", "AI-first"
- Allowed: "AI-enabled delivery", "AI-assisted development", "applied automation"
- No tool dumps, no pricing, no "startup founder" positioning

## Image Prompts (for Gemini)
Will be provided as LLM-optimised prompts for generating:
1. Hero background texture
2. About page professional backdrop

## Placeholders
- Email: contact@movetodigital.au
- LinkedIn: placeholder URL
- ABN: placeholder
- Client names: "Client (confidential)" where needed

---

## Changelog

### 2026-02-22 — Enterprise positioning refinement
- **Hero**: Added third CTA ("View Professional Profile"), added availability line for permanent roles and embedded engagements.
- **Proof Pillars**: Renamed "Security-by-Design" to "AI-Enabled Delivery". Added workflow orchestration, structured data transformation, and edge-case analysis detail.
- **Case studies**: Split from single page (`case-studies.astro`) to directory structure with individual pages per case study. Added third case study (Real-Time Cross-Platform Application). Added `CrossPlatformDiagram.astro` component.
- **Engagement labels**: Changed "Product architecture + build (own IP)" to "Product architecture and build capability" across all case studies.
- **About page**: Rewritten bio paragraph to position for permanent roles and long-term embedded positions.
- **Em-dash removal**: All em-dashes (—) removed from body content site-wide, replaced with full stops, commas, or parentheses. Em-dashes retained in `<title>` tags only (SEO convention).
- **Copy rules updated**: Added "avoid em-dashes" and "avoid startup/hobbyist language" to style guidelines.
- **Tone**: Strengthened enterprise positioning throughout. Removed any language that could read as startup founder pitch, freelance solicitation, or AI evangelism.
