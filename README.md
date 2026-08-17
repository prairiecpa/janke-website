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
│       ├── logo/               Logo files extracted from the brand template package
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

- **Logos** (`assets/images/logo/`):
  - `janke-llp-logo-svg.svg` is the **master vector source** (added directly
    by the client). It's built with live `<text>` elements set in the actual
    Gilroy family (JANKE = ExtraBold, LLP = Light, PROFESSIONAL ACCOUNTANTS =
    Regular) rather than outlined paths, and has no embedded font data.
    That makes it correct only on a machine that has Gilroy installed — a
    real website visitor's browser will substitute a fallback font and the
    wordmark will look wrong. **Do not reference this file directly via
    `<img>`/`background-image` on the live site.** It's kept as the
    authoritative reference for anyone doing future asset work in a tool
    (Illustrator/Inkscape/Figma) that has Gilroy licensed and installed —
    ideally to produce an outlined-path SVG plus fresh high-res PNG/WebP
    exports.
  - `janke-llp-logo-black.png`, `janke-llp-logo-white.png`,
    `janke-llp-mark-black.png` are what the site actually renders. They were
    extracted directly from the approved brand template documents
    (letterhead and dark-template media) — i.e. they **are** the approved
    artwork, just pulled out of the Word/PowerPoint files rather than
    supplied standalone. Adequate resolution for on-screen header/footer
    use; regenerate at higher resolution from the master SVG only via a
    proper design tool with a licensed Gilroy install, not by rasterizing
    live SVG text (which would effectively be recreating the logo from text
    rather than using approved artwork).
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
