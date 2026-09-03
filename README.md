# Product Portfolio — Sarang Vineesh

A single-page product portfolio / personal dashboard, built from the Sept 2026 resume.
No build step — plain HTML, CSS and JS, plus two small CDN libraries for motion
(GSAP + ScrollTrigger, Lenis smooth-scroll). Both are optional: the site is fully
functional if either fails to load, they only add polish on top.

## Files

| File | What it is |
|---|---|
| `index.html` | Page skeleton, section order, CDN script tags |
| `data.js` | **All content.** Edit only this to update the site |
| `main.js` | Renders `data.js` into the page, icon set, plus interactions |
| `styles.css` | Design system (colour tokens, type, motion) and layout |
| `assets/SarangVineesh_Resume.pdf` | The CV served by the Resume / Download buttons |

## Design system

- **Palette**: Apple's own design tokens — true black/white with Apple's system blue
  as the one accent (`--accent`, `#2997ff` dark / `#0071e3` light), plus Apple's system
  green (`--accent2`) and system orange (`--gold`) for the two status pills that need a
  second semantic colour. No gradients, no neon glow — change the look by editing the
  tokens at the top of `styles.css`, not by hunting for hardcoded colours.
- **Type**: the `-apple-system`/`BlinkMacSystemFont` stack, so Mac/iOS visitors see real
  San Francisco; Inter is the loaded web-font fallback for everyone else (SF itself isn't
  legally distributable via a font CDN). One family throughout — hierarchy comes from
  weight/size, the way Apple does it, not from mixing typefaces. JetBrains Mono (with
  `ui-monospace`/SF Mono preferred first) for numbers/tags.
- **Icons**: a hand-drawn SVG line-icon set lives in `main.js` as the `ICONS` object;
  content in `data.js` references icons by name (e.g. `icon: "rocket"`), never by emoji.
  Add a new icon by adding a key to `ICONS` and pointing a data field at its name.
- **Side rails**: the decorative floating icons in the left/right gutters (visible
  ≥1480px) are defined in `main.js` under `RAIL_DEFS` — position, size and timing per
  icon. They idle-float via plain CSS always; if GSAP loads, ScrollTrigger additionally
  drives a scroll-linked parallax on top.

## Editing content

Everything you'd normally want to change lives in `data.js`:

- `profile` — name, role, contact details, hero taglines, chips
- `heroStats` / `kpis` — the numbers on the hero and the Impact dashboard
- `about` / `expertise` — bio paragraphs and the six expertise cards
- `experience` — the timeline (also drives the career rail widths, via `start` / `end`)
- `skillGroups` — the filterable skill chips; the counts update themselves
- `projects` — set `featured: false` to park one behind "View more projects"
- `certifications`, `education`, `beyond`

Add a new role and the timeline, the career rail and the month totals all recompute.

To swap the CV, drop a new PDF into `assets/` and point `profile.resume` at it.

## Running it locally

```bash
python3 -m http.server 4173 --directory "Product Portfolio"
```

Then open http://localhost:4173. (Open `index.html` via `file://` works too.)

## Deploying

It's a static site, so anything works. Vercel, from this folder:

```bash
npx vercel --prod
```

Netlify Drop (drag the folder onto https://app.netlify.com/drop) and GitHub Pages
both work with zero configuration as well.

## Notes

- Dark theme by default, with a light theme on the toggle in the nav; the choice
  is remembered in `localStorage`.
- Responsive down to 375px. The nav collapses to a drawer below 900px.
- Respects `prefers-reduced-motion` — the starfield, counters, tilt/glow cards,
  hero parallax, side-rail float and Lenis smooth-scroll all settle instantly.
- `index.html`'s `<script>` tags for Lenis/GSAP/ScrollTrigger and `data.js`/`main.js`
  are all `defer`, and in that order — this is load-bearing. `main.js` checks
  `window.gsap`/`window.Lenis` before using them, but the *order* is what guarantees
  they exist by the time it runs; don't reorder without keeping that in mind.
