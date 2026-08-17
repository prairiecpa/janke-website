# Janke LLP Website

Source for the Janke LLP marketing website. Plain HTML/CSS/JS, deployed to
Netlify. Read [`CLAUDE.md`](CLAUDE.md) before making design, content, or
architecture decisions — it is the operating brief for this repository.

## Structure

```
.
├── index.html                  Homepage
├── 404.html                    Not-found page
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── tokens.css          Design tokens (colour, type, spacing, breakpoints, motion)
│   │   ├── base.css            Reset, base elements, a11y helpers, layout primitives
│   │   ├── components.css      Header, footer, buttons, links, cards, CTA band, etc.
│   │   └── home.css             Homepage-only composition
│   ├── js/
│   │   └── main.js             Mobile nav (progressive enhancement only)
│   ├── fonts/manrope/          Self-hosted Manrope variable webfont (see LICENSE.txt)
│   └── images/
│       ├── logo/               Vector logo files (outlined paths, no font dependency)
│       └── ...                 (photography goes here once supplied)
├── docs/
│   └── brand/                  Source brand package + Website Design & Build Context
├── netlify.toml
└── CLAUDE.md                   Project operating instructions (source of truth)
```

## Local development

No build step required. Serve the folder locally so absolute `/asset` paths
resolve correctly (opening `index.html` directly via `file://` will not load
CSS/JS/images):

```bash
npx serve .
```

## Deployment

Connected to Netlify. `netlify.toml` sets the publish directory to the repo
root and points unmatched routes at `404.html`. Pushes to the main branch
deploy automatically once the Netlify site is linked.

## Brand assets in this repo

- **Logos** (`assets/images/logo/`) are all vector (`.svg`), used directly
  via `<img>` on every page:
  - `janke-llp-logo-black.svg` / `janke-llp-logo-white.svg` — full lockup
    ("JANKE LLP" + "PROFESSIONAL ACCOUNTANTS"), used in the footer.
  - `janke-llp-wordmark-black.svg` / `janke-llp-wordmark-white.svg` —
    "JANKE LLP" only (no tagline line), used in the header where the full
    lockup's subline would render illegibly small.

  These are outlined-path exports (glyphs converted to vector shapes, no
  live text, no font dependency), supplied by the client to replace an
  earlier live-text SVG that only rendered correctly on machines with
  Gilroy installed. Because they're paths rather than text, they render
  identically for every visitor regardless of installed fonts, and are the
  true master artwork rather than an extraction. The white variants were
  produced by an exact, lossless fill-colour swap (`#000000` → `#ffffff`)
  of the black originals — geometry untouched — matching the black-on-light
  / white-on-dark treatment the brand guide specifies; the wordmark-only
  crop uses the exact bounding box of the "JANKE LLP" path (measured via
  `getBBox()`, not estimated) plus 1 unit of padding. No raster PNGs remain
  in the repo — the earlier Word-template-extracted PNGs were removed as
  superseded now that proper vector artwork exists.
- **Manrope** (`assets/fonts/manrope/`) is self-hosted. Gilroy is the
  approved primary heading face per the brand guide, but no licensed Gilroy
  webfont files exist in this repository, so the approved web fallback
  (Manrope) is used instead. Swap `--font-heading` in `tokens.css` once
  licensed Gilroy web files are supplied.
- **Photography**: none supplied. The homepage uses structurally-correct
  `.image-frame` placeholders with descriptive labels instead of stock
  imagery, per brand policy.

### Brand colour note (resolved)

Brand Guide v2 and the Brand Quick Reference disagreed on "near-black"
(`#111111` vs `#1B1B1B`). Confirmed by the client: **`#111111`** is correct
(`--color-black` in `tokens.css`).

## Content placeholders

Search the codebase for `TODO:` to find every piece of content that is
intentionally unsupplied (staff bios, headshots, insight articles, legal
links, production domain) rather than fabricated. Do not remove a `TODO`
without replacing it with approved content.
