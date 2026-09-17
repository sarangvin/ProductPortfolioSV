# Product Portfolio — Sarang Vineesh

A single-page product portfolio / personal dashboard, built from the Sept 2026 resume.
No build step — plain HTML, CSS and JS, plus GSAP + ScrollTrigger from a CDN for the
side-rail parallax. That's optional: the site is fully functional if it fails to load,
it only adds polish on top.

## Files

| File | What it is |
|---|---|
| `index.html` | Page skeleton, section order, CDN script tags |
| `data.js` | **All content.** Edit only this to update the site |
| `main.js` | Renders `data.js` into the page, icon set, plus interactions |
| `styles.css` | Design system (colour tokens, type, motion) and layout |
| `assets/SarangVineesh_Resume.pdf` | The CV served by the Resume / Download buttons |
| `demo/rabbithole/` | The Rabbithole demo — its own little app, see below |

## Design system

- **Palette**: warm ink and terracotta — a single confident accent (`--accent`,
  `#cc785c` dark / `#b4593c` light), plus a muted sage (`--accent2`) and gold (`--gold`)
  for the two status pills that need a second semantic colour. No gradients, no neon
  glow — change the look by editing the tokens at the top of `styles.css`, not by
  hunting for hardcoded colours.
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
  hero parallax and side-rail float all settle instantly.
- `index.html`'s `<script>` tags for GSAP/ScrollTrigger and `data.js`/`main.js` are all
  `defer`, and in that order — this is load-bearing. `main.js` checks `window.gsap`
  before using it, but the *order* is what guarantees it exists by the time it runs;
  don't reorder without keeping that in mind.
- A smooth-scroll library (Lenis) used to sit in front of all this and was removed: it
  put a ~700ms dead zone in front of every scroll gesture. Native scroll responds in a
  frame. Don't add it back.

## The Rabbithole demo (`demo/rabbithole/`)

A self-contained Obsidian-style reader linked from the Rabbithole project card — a
vault tree, a markdown reader and a prerequisite graph over a real slice of the
Economics notes, centred on Game Theory & Oligopoly.

| File | What it is |
|---|---|
| `index.html` | Three-pane shell |
| `notes.js` | **The content.** 14 notes: 5 with full bodies, 9 as stubs, plus the edge list |
| `app.js` | Markdown renderer, tree, graph, hash router, icon set |
| `rabbithole.css` | The dark-burrow theme |

- **No dependencies at all**, not even a CDN. The portfolio can survive GSAP failing to
  load; a demo whose whole job is rendering markdown can't survive its renderer failing,
  so the markdown parser (~170 lines in `app.js`) and the graph (hand-authored SVG
  positions, no physics lib) are both written out longhand.
- `notes.js` is generated from the real vault rather than hand-copied. The bodies are
  verbatim markdown with frontmatter pre-parsed into `fm`.
- Graph node positions in `app.js`'s `LAYOUT` are **authored, not simulated** — a force
  layout re-rolls the arrangement on every load, which would throw away the one thing
  the graph exists to show: the spine running top-to-bottom from first principles down
  to the frontier.
- Navigation is entirely `location.hash`, so deep links and the back button work.
- **importance / interest / confidence are editable** — native `<input type=range>`
  sliders, so keyboard and touch work for free. There's no backend, so edits persist
  in `localStorage` under `rabbithole-edits`, keyed by note path; a `reset` button
  appears on a note only once its values differ from the vault's. Clear the key to
  wipe all edits.
