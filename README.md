# Janke LLP Website

Source for the Janke LLP marketing website. Plain HTML/CSS/JS, deployed to Netlify.

## Structure

```
.
├── index.html
├── about.html
├── practice-areas.html
├── attorneys.html
├── contact.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   └── fonts/
├── docs/
├── netlify.toml
└── .gitignore
```

## Local development

No build step required. Open `index.html` directly in a browser, or serve the
folder locally, e.g.:

```bash
npx serve .
```

## Deployment

Connected to Netlify. `netlify.toml` sets the publish directory to the repo
root and points unmatched routes at `404.html`. Pushes to the main branch
deploy automatically once the Netlify site is linked.

## Adding a page

Copy an existing page (e.g. `about.html`) as a starting point to keep the
shared header/nav/footer markup consistent, then update the `<title>`,
`<meta name="description">`, and main content.
