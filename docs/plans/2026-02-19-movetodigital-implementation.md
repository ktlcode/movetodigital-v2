# Move to Digital — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 6-page Astro static site for movetodigital.au — a professional credibility site for an enterprise automation/integration architect, with warm terracotta/slate palette, animated icons, and interactive elements.

**Status:** All tasks complete. Site deployed to Cloudflare Pages. Subsequent refinements applied (see design doc changelog for 2026-02-22 positioning updates).

**Architecture:** Astro 5 static site with Tailwind CSS 4, Lordicon animated icons via CDN, vanilla JS for scroll animations, deployed to Cloudflare Pages. Content is hardcoded in Astro components (no CMS). Shared layout with responsive nav and footer. Pages: Home, Case Studies (index + 3 individual pages), Support, About, Privacy, Security.

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, Lordicon (CDN), vanilla JS (IntersectionObserver), Cloudflare Pages

---

## File Tree (Final)

```
movetodigital-v2/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/
│       └── (Inter + JetBrains Mono via fontsource or CDN)
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro          # HTML shell, nav, footer, meta, scripts
│   ├── components/
│   │   ├── Nav.astro                  # Responsive nav with mobile menu
│   │   ├── Footer.astro              # Site footer
│   │   ├── Hero.astro                # Home hero section
│   │   ├── ProofPillars.astro        # 3 animated proof pillar cards
│   │   ├── SelectedWork.astro        # Links to case studies
│   │   ├── AppsSupport.astro         # Links to support hub
│   │   ├── ContactCTA.astro          # Contact call-to-action strip
│   │   ├── CaseStudyCard.astro       # Reusable case study layout
│   │   ├── AppCard.astro             # Support hub app card
│   │   ├── ArchitectureDiagram.astro # SVG architecture diagram (Gallagher)
│   │   ├── CrossPlatformDiagram.astro # SVG architecture diagram (Cross-platform)
│   │   ├── ProcessSteps.astro        # How I Work steps (about page)
│   │   └── ScrollReveal.astro        # Scroll-triggered animation wrapper
│   ├── styles/
│   │   └── global.css                # Design tokens, Tailwind directives, animations
│   ├── scripts/
│   │   └── scroll-reveal.js          # IntersectionObserver for scroll animations
│   └── pages/
│       ├── index.astro               # Home
│       ├── case-studies/
│       │   ├── index.astro           # Case Studies listing
│       │   ├── gallagher-command-centre-sms-integration.astro
│       │   ├── structured-intake-automation.astro
│       │   └── real-time-cross-platform-application.astro
│       ├── support.astro             # Support Hub
│       ├── about.astro               # About
│       ├── privacy.astro             # Privacy
│       └── security.astro            # Security
├── README.md
└── docs/
    └── plans/
        ├── 2026-02-19-movetodigital-site-design.md
        └── 2026-02-19-movetodigital-implementation.md
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `tailwind.config.mjs`
- Create: `.gitignore`

**Step 1: Scaffold the Astro project**

```bash
cd /Users/admin/code/movetodigital-v2
npm create astro@latest . -- --template minimal --no-install --typescript strict
```

If the interactive prompt blocks, create files manually:

`package.json`:
```json
{
  "name": "movetodigital-v2",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

`astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://movetodigital.au',
  integrations: [tailwindcss()],
  output: 'static',
});
```

`tsconfig.json`:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Step 2: Install dependencies**

```bash
cd /Users/admin/code/movetodigital-v2
npm install
```

Expected: Successful install, node_modules created.

**Step 3: Verify dev server starts**

```bash
cd /Users/admin/code/movetodigital-v2
npm run dev
```

Expected: Astro dev server starts on localhost:4321.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: scaffold Astro 5 project with Tailwind CSS 4"
```

---

### Task 2: Design Tokens & Global Styles

**Files:**
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`

**Step 1: Create global CSS with design tokens and Tailwind directives**

`src/styles/global.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: #C2714F;
  --color-primary-dark: #A85A3A;
  --color-primary-light: #D4956F;
  --color-secondary: #2D3748;
  --color-secondary-light: #4A5568;
  --color-accent: #D4A574;
  --color-bg: #FAFAF7;
  --color-bg-alt: #F3F0EB;
  --color-surface: #FFFFFF;
  --color-text: #2D2A26;
  --color-text-muted: #6B6560;
  --color-border: #E5E0DA;

  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-mono: 'JetBrains Mono', ui-monospace, monospace;
}

/* Base styles */
html {
  scroll-behavior: smooth;
  background-color: var(--color-bg);
  color: var(--color-text);
}

body {
  font-family: var(--font-family-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Skip to content */
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background: var(--color-secondary);
  color: white;
  border-radius: 0 0 0.5rem 0.5rem;
  z-index: 100;
  font-weight: 600;
  transition: top 0.2s;
}

.skip-to-content:focus {
  top: 0;
}

/* Focus styles */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Scroll reveal animations */
@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
}

.reveal.revealed {
  animation: reveal-up 0.6s ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
  }
  .reveal.revealed {
    animation: none;
    opacity: 1;
  }
  html {
    scroll-behavior: auto;
  }
}

/* Lordicon hover animation trigger */
lord-icon {
  width: 48px;
  height: 48px;
}

/* Selection colour */
::selection {
  background-color: var(--color-primary-light);
  color: var(--color-secondary);
}
```

**Step 2: Create favicon SVG**

`public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#2D3748"/>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-weight="700" font-size="18" fill="#C2714F">M</text>
</svg>
```

**Step 3: Verify build succeeds**

```bash
npm run build
```

Expected: Build completes without errors.

**Step 4: Commit**

```bash
git add src/styles/global.css public/favicon.svg
git commit -m "feat: add design tokens, global styles, and favicon"
```

---

### Task 3: Base Layout & Navigation

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Nav.astro`
- Create: `src/components/Footer.astro`

**Step 1: Create Nav component**

`src/components/Nav.astro`:
Responsive nav with logo text, page links, mobile hamburger menu.
- Desktop: horizontal links
- Mobile: hamburger → slide-out panel with backdrop blur
- Active page highlighted via `Astro.url.pathname`
- Links: Home, Case Studies, About, Support, Contact (mailto)

Key details:
- Nav container: `bg-surface/90 backdrop-blur-md` sticky top
- Mobile menu: full-screen overlay, slide from right
- Hamburger: CSS-only animated icon (3 bars → X)
- Active link: `text-primary font-semibold` + bottom border

**Step 2: Create Footer component**

`src/components/Footer.astro`:
- 3-column layout: Brand + tagline | Quick links | Legal links
- Bottom bar: copyright + "ABN Registered" placeholder
- Links to Privacy, Security pages
- All warm border/muted text colours

**Step 3: Create BaseLayout**

`src/layouts/BaseLayout.astro`:
- Props: `title`, `description`, `canonicalPath`
- `<head>`: charset, viewport, title, meta description, canonical, OG tags, Twitter cards, favicon, Google Fonts (Inter + JetBrains Mono), Lordicon CDN script, global.css import
- `<body>`: skip-to-content link, Nav, `<main id="main-content">`, Footer, scroll-reveal script
- Lordicon script: `<script src="https://cdn.lordicon.com/lordicon.js"></script>`

**Step 4: Create a minimal index page to verify layout**

`src/pages/index.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Move to Digital — Automation & Integration Architecture" description="Secure automation and integration architecture for regulated environments. Independent practice based in Brisbane, Australia.">
  <section class="py-20 text-center">
    <h1 class="text-4xl font-bold text-secondary">Layout Test</h1>
  </section>
</BaseLayout>
```

**Step 5: Verify dev server renders layout**

```bash
npm run dev
```

Expected: Page loads with nav, footer, correct fonts, correct colours.

**Step 6: Commit**

```bash
git add src/layouts/ src/components/Nav.astro src/components/Footer.astro src/pages/index.astro
git commit -m "feat: add base layout with responsive nav and footer"
```

---

### Task 4: Scroll Reveal System

**Files:**
- Create: `src/scripts/scroll-reveal.js`
- Create: `src/components/ScrollReveal.astro`

**Step 1: Create IntersectionObserver script**

`src/scripts/scroll-reveal.js`:
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
```

**Step 2: Create ScrollReveal wrapper component**

`src/components/ScrollReveal.astro`:
```astro
---
interface Props {
  delay?: number;
  class?: string;
}
const { delay = 0, class: className = '' } = Astro.props;
---
<div class={`reveal ${className}`} style={delay ? `animation-delay: ${delay}ms` : ''}>
  <slot />
</div>
```

**Step 3: Verify animations work in dev**

Add a few test sections to index.astro with ScrollReveal wrappers, verify they animate on scroll.

**Step 4: Commit**

```bash
git add src/scripts/scroll-reveal.js src/components/ScrollReveal.astro
git commit -m "feat: add scroll-triggered reveal animation system"
```

---

### Task 5: Home Page — Hero Section

**Files:**
- Create: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create Hero component**

`src/components/Hero.astro`:
- Large heading: "Move to Digital"
- Subheading: "Secure automation & integration architecture for regulated environments."
- Brief supporting text (2 sentences max)
- Primary CTA button: "Get in Touch" → mailto:contact@movetodigital.au
- Secondary CTA: "View Case Studies" → /case-studies
- Subtle background: warm gradient or geometric pattern via CSS
- Layout: centered text, generous vertical padding (py-24 md:py-32)

Copy:
```
Move to Digital

Secure automation & integration architecture for regulated environments.

Independent architecture and delivery practice specialising in event-driven integration, security-first design, and AI-enabled delivery for government and enterprise.
```

**Step 2: Wire Hero into index.astro**

**Step 3: Verify in dev**

Expected: Hero renders with correct typography, colours, CTAs.

**Step 4: Commit**

```bash
git add src/components/Hero.astro src/pages/index.astro
git commit -m "feat: add home page hero section"
```

---

### Task 6: Home Page — Proof Pillar Cards

**Files:**
- Create: `src/components/ProofPillars.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create ProofPillars component**

3 cards in a responsive grid (1 col mobile, 3 col desktop):

**Card 1 — Integration Architecture**
- Lordicon: system-regular-synchronize (or similar integration icon)
- Title: "Integration Architecture"
- Body: "Event-driven APIs, secure middleware, and system integration for platforms that need to talk to each other reliably. REST, webhooks, message queues — built for auditability and scale."

**Card 2 — Security-by-Design**
- Lordicon: system-regular-lock (or shield icon)
- Title: "Security-by-Design"
- Body: "OAuth2 flows, mutual TLS, bearer token management, and least-privilege access patterns. Security is the architecture, not an afterthought."

**Card 3 — Regulated Environments**
- Lordicon: system-regular-document (or government/building icon)
- Title: "Delivery in Regulated Environments"
- Body: "Proven delivery in government, utilities, and enterprise environments. NV1 security clearance. Compliance-aware architecture that meets the bar without over-engineering."

Each card:
- `bg-surface` with `border border-border` and `rounded-xl`
- Lordicon icon that animates on hover (use `trigger="hover"` attribute)
- Warm shadow on hover: `shadow-lg shadow-primary/5`
- ScrollReveal wrapper with staggered delays (0, 100ms, 200ms)

**Step 2: Wire into index.astro**

**Step 3: Verify cards render with animations**

**Step 4: Commit**

```bash
git add src/components/ProofPillars.astro src/pages/index.astro
git commit -m "feat: add proof pillar cards with animated icons"
```

---

### Task 7: Home Page — Selected Work & Apps Sections

**Files:**
- Create: `src/components/SelectedWork.astro`
- Create: `src/components/AppsSupport.astro`
- Create: `src/components/ContactCTA.astro`
- Modify: `src/pages/index.astro`

**Step 1: Create SelectedWork component**

- Section heading: "Selected Work"
- Brief intro: "Architecture and delivery engagements across integration, security, and automation."
- 2 preview cards linking to /case-studies:
  1. "Security Events → SMS Notifications" — Gallagher ↔ Telstra integration
  2. "Structured Intake Automation" — PDF-to-digital-workflow
- Each card: title, one-line description, "Read more →" link
- Arrow icon on hover slides right (CSS transition)

**Step 2: Create AppsSupport component**

- Section heading: "Apps & Support"
- Brief intro: "Tools I've built. If you're using one and need help, start here."
- 2 app cards (preview only, links to /support):
  1. ClientForms.app — "Clinician-facing assessment workflow tool"
  2. WaitingForAMate.com — "Community referral app"
- "Visit Support Hub →" link

**Step 3: Create ContactCTA component**

- Full-width strip with `bg-secondary` (dark slate)
- White text: "Have a project? Let's talk."
- CTA button: "contact@movetodigital.au" (mailto link)
- Warm accent border-top

**Step 4: Wire all into index.astro**

**Step 5: Verify complete home page**

**Step 6: Commit**

```bash
git add src/components/SelectedWork.astro src/components/AppsSupport.astro src/components/ContactCTA.astro src/pages/index.astro
git commit -m "feat: add selected work, apps, and contact sections to home"
```

---

### Task 8: Case Studies Page + Architecture Diagram

**Files:**
- Create: `src/pages/case-studies.astro`
- Create: `src/components/CaseStudyCard.astro`
- Create: `src/components/ArchitectureDiagram.astro`

**Step 1: Create ArchitectureDiagram component**

Inline SVG showing the Gallagher ↔ Telstra bridge architecture:

```
┌─────────────────┐     HTTPS/mTLS      ┌──────────────────┐     OAuth2/REST     ┌─────────────────┐
│   Gallagher CC  │ ──────────────────→  │   Bridge (API)   │ ──────────────────→ │  Telstra Msg    │
│  (Command Ctr)  │    Event Polling     │  Event Processor │    SMS Delivery     │    API v3       │
│                 │  ←─────────────────  │  Deduplication   │                     │                 │
└─────────────────┘    Security Events   │  Filtering Rules │                     └─────────────────┘
                                         │  Audit Logging   │
                                         └──────┬───────────┘
                                                │
                                         ┌──────▼───────────┐
                                         │  Operator        │
                                         │  Dashboard       │
                                         │  (Next.js)       │
                                         └──────────────────┘
```

Implement as clean SVG with:
- Boxes with rounded corners, warm border colours
- Arrow connectors with labels
- Hover highlight: box fills with `primary-light` tint
- Responsive: scales down on mobile (viewBox-based)

**Step 2: Create CaseStudyCard component**

Reusable wrapper with:
- Props: title, engagement type, sections (problem, approach, architecture, security, outcomes, extensibility)
- Each section has heading + content
- Clean typography with `font-mono` for technical terms

**Step 3: Create case-studies page**

`src/pages/case-studies.astro`:

**Case Study A: "Security Events → SMS Notifications"**
Subheading: Gallagher Command Centre ↔ Telstra Messaging API

- **Problem**: "The client's physical security platform (Gallagher Command Centre) generates critical events — door forced, access denied, alarm triggered — but has no native SMS notification capability. Operators needed real-time alerts on mobile, with filtering to prevent alert fatigue."

- **Approach**: "Designed and built an event-driven middleware bridge. The system polls Gallagher's REST API over mutual TLS, processes and deduplicates events through a rules engine, composes human-readable messages, and delivers via Telstra's Messaging API v3."

- **Architecture**: [ArchitectureDiagram component]

- **Security**: "All communication uses TLS 1.2+. Gallagher API access is authenticated via mTLS client certificates. Telstra API uses OAuth2 bearer tokens with automatic refresh. API keys are hashed (PBKDF2) and stored encrypted (AES-256). The system handles minimal personal data — event metadata only, no PII in transit."

- **Outcomes**: "Delivered working middleware with operator dashboard, certificate management, and comprehensive audit logging. Zero-touch deployment capability for non-technical operators. Deployment pending customer rollout."

- **Extensibility**: "Architecture supports additional notification channels (email, Teams webhooks), configurable filtering rules, and multi-tenant deployment. Rate limiting and message queuing are built in."

- **Engagement model**: "Delivered as an independent architecture + build engagement."

**Case Study B (smaller): "Automating Structured Intake"**

- **Problem**: "Clinicians were spending significant time manually transcribing standardised assessment forms from paper/PDF into digital records. The process was error-prone and created workflow bottlenecks."

- **Approach**: "Built a pipeline that parses structured PDF assessment instruments, transforms them into a canonical schema, and generates interactive digital forms with real-time scoring and validation. The platform supports multiple assessment types across different clinical disciplines."

- **Architecture**: "Three-stage pipeline: PDF analysis → canonical data model → rendered form. Each stage is independently testable. The canonical model decouples the source format from the rendering engine, enabling rapid onboarding of new assessment instruments."

- **Outcomes**: "Platform supports multiple assessment types with automated scoring. Clinician-facing interface designed with neurodivergent-first UX principles. Active development."

- **Engagement model**: "Product development — own IP."

**Step 4: Verify page renders with diagram**

**Step 5: Commit**

```bash
git add src/pages/case-studies.astro src/components/CaseStudyCard.astro src/components/ArchitectureDiagram.astro
git commit -m "feat: add case studies page with architecture diagram"
```

---

### Task 9: Support Hub Page

**Files:**
- Create: `src/pages/support.astro`
- Create: `src/components/AppCard.astro`

**Step 1: Create AppCard component**

Reusable card with:
- Props: name, description, status, supportLink, url
- Status badge: "Active Development" (amber) or "Testing" (blue)
- Lordicon icon (different per app)
- Support contact link
- Clean card styling matching proof pillars

**Step 2: Create support page**

`src/pages/support.astro`:

Intro: "If you're using one of my apps and need help, you're in the right place."

**App Cards:**
1. **ClientForms.app**
   - "Clinician-facing assessment workflow tool. Structured digital forms with real-time scoring for clinical practice."
   - Status: "In active development"
   - Support: contact@movetodigital.au

2. **WaitingForAMate.com**
   - "Community referral app. Share and discover services through trusted connections."
   - Status: "Testing"
   - Support: contact@movetodigital.au

**Support Policy section:**
- Response expectations: "Best-effort response within 2 business days. Critical security issues are prioritised."
- Security reporting: "If you've found a security vulnerability, please report it to security@movetodigital.au. See our Security page for full details."
- General enquiries: contact@movetodigital.au

**System Status section:**
- Heading: "System Status"
- Body: "All systems operational." (with a green dot indicator)
- Note: "This status is updated manually. For real-time issues, contact support."

**Step 3: Verify page**

**Step 4: Commit**

```bash
git add src/pages/support.astro src/components/AppCard.astro
git commit -m "feat: add support hub page with app cards"
```

---

### Task 10: About Page

**Files:**
- Create: `src/pages/about.astro`
- Create: `src/components/ProcessSteps.astro`

**Step 1: Create ProcessSteps component**

Visual 4-step process: discovery → architecture → build → handover
- Horizontal on desktop, vertical on mobile
- Connected by a line/arrow
- Each step: number, title, short description
- Subtle animation (steps reveal sequentially)

Steps:
1. **Discovery** — "Understanding the problem, the constraints, and the people involved."
2. **Architecture** — "Designing the solution with security, maintainability, and handover in mind."
3. **Build** — "Iterative delivery with regular checkpoints. No surprises."
4. **Handover** — "Documentation, runbooks, and knowledge transfer. You own it completely."

**Step 2: Create about page**

`src/pages/about.astro`:

**Professional Bio:**
"I'm an automation and integration architect based in Brisbane, Australia, with over 20 years of experience across government, utilities, and enterprise environments.

My work focuses on the space between systems — building secure, event-driven integrations that connect platforms reliably and pass security review. I've delivered across M365 ecosystem, API development, information governance, and cloud infrastructure.

I hold an NV1 security clearance and have worked extensively in environments where compliance and auditability are non-negotiable.

I now operate as an independent practice — Move to Digital — taking on architecture and delivery engagements, and building my own software products."

**How I Work section:** [ProcessSteps component]

**Working Principles:**
- "Every engagement includes documentation and runbooks."
- "Security review is part of the architecture, not a gate at the end."
- "AI-assisted development where it adds genuine value, not as a talking point."

**Links:**
- LinkedIn: [placeholder URL]
- Email: contact@movetodigital.au

**Step 3: Verify page**

**Step 4: Commit**

```bash
git add src/pages/about.astro src/components/ProcessSteps.astro
git commit -m "feat: add about page with process steps"
```

---

### Task 11: Privacy Page

**Files:**
- Create: `src/pages/privacy.astro`

**Step 1: Create privacy page**

`src/pages/privacy.astro`:

Copy:

**Privacy — Move to Digital**

*Last updated: February 2026*

**This Website**

This is a static portfolio and support website. It does not use cookies, tracking scripts, or analytics. No personal data is collected through browsing this site.

If you contact me via email, I'll handle your information with the care you'd expect — used only to respond to your enquiry, not shared with third parties, and deleted when no longer needed.

**Apps**

My applications (ClientForms.app, WaitingForAMate.com) have their own privacy policies, which are available within each application. The privacy practices of those apps are separate from this website.

**Contact**

If you have questions about privacy practices, contact: contact@movetodigital.au

**Step 2: Verify page**

**Step 3: Commit**

```bash
git add src/pages/privacy.astro
git commit -m "feat: add privacy page"
```

---

### Task 12: Security Page

**Files:**
- Create: `src/pages/security.astro`

**Step 1: Create security page**

`src/pages/security.astro`:

Copy:

**Security — Responsible Disclosure**

I take security seriously. If you've found a vulnerability in any of my applications or services, I want to hear about it.

**Reporting a Vulnerability**

Email: security@movetodigital.au

Please include:
- Description of the vulnerability
- Steps to reproduce
- Affected application or service
- Your assessment of severity (if known)
- Any supporting evidence (screenshots, logs)

**What to Expect**

- Acknowledgement within 2 business days
- I'll keep you updated on progress
- I won't take legal action against good-faith security research

**Scope**

- ClientForms.app
- WaitingForAMate.com
- movetodigital.au
- Associated APIs and infrastructure

**Out of Scope**

- Social engineering or phishing attempts
- Denial of service attacks
- Issues in third-party services I don't control

**No Bug Bounty**

I don't currently operate a bug bounty programme. I do appreciate responsible disclosure and will credit reporters where appropriate (with your consent).

**Step 2: Verify page**

**Step 3: Commit**

```bash
git add src/pages/security.astro
git commit -m "feat: add security responsible disclosure page"
```

---

### Task 13: SEO — robots.txt, sitemap, OpenGraph

**Files:**
- Create: `public/robots.txt`
- Modify: `src/layouts/BaseLayout.astro` (if OG tags not yet added)

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://movetodigital.au/sitemap.xml
```

**Step 2: Add Astro sitemap integration**

```bash
npm install @astrojs/sitemap
```

Update `astro.config.mjs` to include sitemap integration.

**Step 3: Verify all pages have correct meta tags**

Check each page's `<head>` for:
- `<title>` (unique per page)
- `<meta name="description">` (unique per page)
- `<link rel="canonical">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:url">`
- `<meta property="og:type">`
- `<meta name="twitter:card">`

**Step 4: Build and verify sitemap generated**

```bash
npm run build
ls dist/sitemap-index.xml
```

**Step 5: Commit**

```bash
git add public/robots.txt astro.config.mjs package.json src/layouts/BaseLayout.astro
git commit -m "feat: add SEO — robots.txt, sitemap, OpenGraph meta"
```

---

### Task 14: README with Deploy Instructions

**Files:**
- Create: `README.md`

**Step 1: Write README**

Include:
- Project description (1 paragraph)
- Local development: `npm install && npm run dev`
- Build: `npm run build` (output in `dist/`)
- Cloudflare Pages deployment steps:
  1. Push to GitHub
  2. Connect repo to Cloudflare Pages
  3. Build command: `npm run build`
  4. Build output directory: `dist`
  5. Custom domain setup: add movetodigital.au
  6. DNS: point nameservers to Cloudflare
- Content update instructions
- Placeholder checklist (email, LinkedIn, ABN)

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with Cloudflare Pages deploy instructions"
```

---

### Task 15: LLM Image Prompts

**Files:**
- Create: `docs/image-prompts.md`

**Step 1: Write optimised prompts for Gemini image generation**

**Hero Background Texture:**
```
Create a subtle, abstract geometric texture suitable for a website hero background. Warm terracotta and slate tones (#C2714F, #2D3748, #D4A574). Low contrast, muted, minimal. Think architectural blueprint meets topographic map. No text, no logos, no people. Seamless tileable pattern. Warm stone paper texture feel. Professional, not decorative. 2400x800px, landscape orientation.
```

**About Page — Professional Backdrop:**
```
Create a clean, minimal professional backdrop image for a technology architect's about page. Abstract representation of connected systems — subtle nodes and lines suggesting integration architecture. Warm palette: terracotta (#C2714F), deep slate (#2D3748), honey accent (#D4A574) on warm off-white (#FAFAF7). No text, no faces, no logos. Low contrast, suitable as a background image with text overlay. Modern, sophisticated, not corporate-stock-photo. 1600x900px.
```

**OG Share Image:**
```
Create a minimal Open Graph share image for "Move to Digital" — an automation and integration architecture practice. Dark slate background (#2D3748) with warm terracotta accent (#C2714F). Bold text "Move to Digital" centred. Below in smaller text: "Automation & Integration Architecture". Clean, professional, no gradients, no stock imagery. Geometric accent line or subtle pattern. 1200x630px exactly.
```

**Step 2: Commit**

```bash
git add docs/image-prompts.md
git commit -m "docs: add LLM-optimised image generation prompts"
```

---

### Task 16: Final Polish & Verification

**Files:**
- Modify: various (any fixes from verification)

**Step 1: Build and check for errors**

```bash
npm run build
```

Expected: Clean build, no warnings.

**Step 2: Check all internal links work**

Manually verify in dev server:
- Nav links: /, /case-studies, /about, /support
- Footer links: /privacy, /security
- Home page CTAs: mailto links, page links
- Case studies: back links
- Support: mailto links

**Step 3: Check mobile layout**

Open dev tools, test at 375px, 768px, 1024px, 1440px widths.

**Step 4: Verify accessibility**

- Tab through all pages — focus states visible
- Heading hierarchy correct (h1 > h2 > h3)
- Skip-to-content link works
- Images have alt text (SVG diagram has aria-label)
- Colour contrast passes (all tokens designed for WCAG AA)

**Step 5: Final commit**

```bash
git add -A
git commit -m "polish: final verification and fixes"
```

---

## Gemini Image Prompts Summary

After building, take these to Google Gemini to generate:
1. Hero background texture (warm geometric)
2. About page backdrop (abstract network)
3. OG share image (branded)

See `docs/image-prompts.md` for full prompts.

## Lordicon Icons to Source

Visit https://lordicon.com/icons and search for:
1. **Proof Pillar 1** (Integration): "synchronize" or "connection" or "network"
2. **Proof Pillar 2** (Security): "lock" or "shield" or "security"
3. **Proof Pillar 3** (Regulated): "document" or "building" or "government"
4. **ClientForms app**: "form" or "clipboard" or "medical"
5. **WaitingForAMate app**: "group" or "people" or "community"
6. **Contact**: "mail" or "envelope"

Use the Lordicon CDN element: `<lord-icon src="https://cdn.lordicon.com/XXXXX.json" trigger="hover" colors="primary:#C2714F,secondary:#2D3748"></lord-icon>`

Free tier includes many icons. Select specific icon IDs during implementation.
