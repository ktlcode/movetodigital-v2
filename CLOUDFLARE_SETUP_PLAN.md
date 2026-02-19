# Cloudflare Setup — movetodigital.au & movetodigital.com.au

> Last updated: 2026-02-19

## Domains
- **movetodigital.au** — ~500 days remaining (registered at VentraIP)
- **movetodigital.com.au** — ~1500 days remaining (registered at VentraIP)
- **Primary inbox:** movetodigital@outlook.com
- **Cloudflare account:** ksee23@hotmail.com
- **Cloudflare Account ID:** 3fc3128b4a01021f29903dc81d5f3cf8

---

## Phase 1: DNS on Cloudflare — DONE

- Both zones active on Cloudflare (free plan)
- Nameservers pointed from VentraIP → Cloudflare
- Zone IDs:
  - `movetodigital.au` → `1dc8b51da76699dd9e5d86b8319fbda2`
  - `movetodigital.com.au` → `24c5115263b2bc8a818671f7ad43583c`

---

## Phase 2: Site Hosting (Cloudflare Pages) — DONE

- **Project:** `movetodigital` on Cloudflare Pages
- **Pages URL:** https://movetodigital.pages.dev
- **GitHub repo:** https://github.com/ktlcode/movetodigital-v2 (branch: `master`)
- **Framework:** Astro (static output)
- **Build:** `npm run build` → output in `./dist`
- **Deploy:** `wrangler pages deploy ./dist --project-name=movetodigital`

Custom domains — all active with SSL:
- https://movetodigital.au
- https://www.movetodigital.au
- https://movetodigital.com.au
- https://www.movetodigital.com.au

---

## Phase 3: DNS Records — DONE

**movetodigital.au:**
| Type  | Name                             | Content                                                      |
|-------|----------------------------------|--------------------------------------------------------------|
| CNAME | movetodigital.au                 | movetodigital.pages.dev (proxied)                            |
| CNAME | www.movetodigital.au             | movetodigital.pages.dev (proxied)                            |
| MX    | movetodigital.au                 | route1.mx.cloudflare.net (pri 28)                            |
| MX    | movetodigital.au                 | route2.mx.cloudflare.net (pri 12)                            |
| MX    | movetodigital.au                 | route3.mx.cloudflare.net (pri 93)                            |
| TXT   | movetodigital.au                 | v=spf1 include:_spf.mx.cloudflare.net ~all                   |
| TXT   | _dmarc.movetodigital.au          | v=DMARC1; p=quarantine; rua=mailto:movetodigital@outlook.com  |
| TXT   | cf2024-1._domainkey.movetodigital.au | (DKIM key — added by Cloudflare Email Routing)            |

**movetodigital.com.au:**
| Type  | Name                                     | Content                                                      |
|-------|------------------------------------------|--------------------------------------------------------------|
| CNAME | movetodigital.com.au                     | movetodigital.pages.dev (proxied)                            |
| CNAME | www.movetodigital.com.au                 | movetodigital.pages.dev (proxied)                            |
| MX    | movetodigital.com.au                     | route1.mx.cloudflare.net (pri 28)                            |
| MX    | movetodigital.com.au                     | route2.mx.cloudflare.net (pri 12)                            |
| MX    | movetodigital.com.au                     | route3.mx.cloudflare.net (pri 93)                            |
| TXT   | movetodigital.com.au                     | v=spf1 include:_spf.mx.cloudflare.net ~all                   |
| TXT   | _dmarc.movetodigital.com.au              | v=DMARC1; p=quarantine; rua=mailto:movetodigital@outlook.com  |
| TXT   | cf2024-1._domainkey.movetodigital.com.au | (DKIM key — added by Cloudflare Email Routing)               |

---

## Phase 4: Email Routing — CONFIGURED, DELIVERY ISSUE

Email routing is **enabled** on both domains. All rules are active. All destination addresses verified.

**Destination addresses:**
| Outlook Address                   | Verified |
|-----------------------------------|----------|
| movetodigital@outlook.com         | Yes      |
| mtd-sales@outlook.com             | Yes      |
| mtd-developer@outlook.com         | Yes      |
| mtd-signup@outlook.com            | Yes      |
| movetodigital-invoice@outlook.com | Yes      |
| movetodigital@outlook.com.au      | Yes      |

**Email routing rules** (identical on both .au and .com.au):
| From Address | Forwards To                       |
|--------------|-----------------------------------|
| kevin@       | movetodigital@outlook.com         |
| sales@       | mtd-sales@outlook.com             |
| developer@   | mtd-developer@outlook.com         |
| signup@      | mtd-signup@outlook.com            |
| invoice@     | movetodigital-invoice@outlook.com |
| info@        | movetodigital@outlook.com.au      |
| contact@     | movetodigital@outlook.com.au      |
| * (catch-all)| Disabled (drop)                   |

### KNOWN ISSUE: Outlook rejecting Cloudflare forwarded emails

**Problem:** Microsoft Outlook is rate-limiting Cloudflare's shared email routing IPs due to IP reputation.

**Error from Cloudflare Activity Log:**
```
451 4.7.650 The mail server [104.30.0.94] has been temporarily rate limited
due to IP reputation.
```

**Diagnostics confirmed:**
- MX records resolve correctly
- Cloudflare SMTP accepts RCPT TO for kevin@movetodigital.com.au (250 OK)
- SPF, DKIM, DMARC all pass on the sending side
- Cloudflare receives the email and attempts forwarding
- Outlook rejects at the forwarding stage (transient 451 error)

**Options if it doesn't resolve:**
1. **Forward to Gmail instead** — Gmail reliably accepts Cloudflare forwarding. Set Gmail to also forward to Outlook if needed.
2. **Cloudflare Email Worker** — Write a Worker that relays via a third-party SMTP service (Resend/Mailgun free tier) to bypass the IP reputation issue.
3. **Microsoft 365** (~$9 AUD/month) — Full custom domain email with no forwarding needed.

---

## Send-As (Outbound) — NOT SET UP

Currently receive-only. When replying, emails go from movetodigital@outlook.com, not @movetodigital.com.au.

Consumer Outlook.com doesn't support custom domain send-as. Options when ready:
- **Gmail** — Has built-in "Send mail as" with custom SMTP (pair with Resend free tier)
- **Microsoft 365** — Full custom domain support
- **Desktop client** (Apple Mail/Thunderbird) — Configure SMTP via Resend/Brevo

---

## Quick Reference

| Service              | Provider                 | Cost             |
|----------------------|--------------------------|------------------|
| Domain registration  | VentraIP                 | Already paid     |
| DNS + CDN            | Cloudflare               | Free             |
| Email routing        | Cloudflare Email Routing | Free             |
| Email inbox          | Outlook.com              | Free             |
| Site hosting         | Cloudflare Pages         | Free (unlimited) |
| GitHub repo          | github.com/ktlcode       | Free             |

## Deploy Commands
```bash
npm run build && wrangler pages deploy ./dist --project-name=movetodigital
```

## CLI Auth
- **Wrangler:** `wrangler login` (OAuth as ksee23@hotmail.com)
- **GitHub:** `gh auth login` (as ktlcode)

---

## Checklist
- [x] Nameservers updated at VentraIP → Cloudflare
- [x] Cloudflare shows both domains as Active
- [x] DNS records configured (CNAME, MX, SPF, DKIM, DMARC)
- [x] Cloudflare Pages project created and deployed
- [x] Custom domains active with SSL on Pages
- [x] Sites load: movetodigital.au, movetodigital.com.au, www variants
- [x] Email routing enabled on both domains
- [x] All 7 routing rules active on both domains
- [x] All 6 destination addresses verified
- [ ] **Email delivery to Outlook** — blocked by Microsoft IP reputation rate-limiting (transient)
- [ ] Send-as from custom domain (not yet set up)
- [ ] Catch-all rule (currently disabled)
- [ ] CI/CD auto-deploy from GitHub (optional)
