# Move to Digital

Professional portfolio and support site for [movetodigital.au](https://movetodigital.au).

Automation & integration architecture for regulated environments.

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- [Lordicon](https://lordicon.com) — animated icons

## Development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output is generated in the `dist/` directory.

## Deploy to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
3. Create a new project → Connect to Git → Select this repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 20 (or latest LTS)
5. Deploy

Cloudflare will automatically deploy on every push to the main branch.

### Option B: Direct Upload

1. Run `npm run build`
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
3. Create a new project → Direct Upload
4. Upload the `dist/` directory

### Custom Domain

After deployment:
1. Go to your Cloudflare Pages project → Custom domains
2. Add `movetodigital.au` and `www.movetodigital.au`
3. Update your domain's nameservers to Cloudflare (if not already done)

## Content Updates

All page content is in the `src/pages/` directory as Astro components. Shared components are in `src/components/`.

## Placeholders

These placeholders need to be filled before going live:

- [ ] Email address (currently `contact@movetodigital.au`)
- [ ] LinkedIn URL (currently `#` placeholder in About page)
- [ ] ABN number (currently "ABN Registered" in Footer)
- [ ] App URLs (ClientForms.app, WaitingForAMate.com)

## Licence

All rights reserved.
