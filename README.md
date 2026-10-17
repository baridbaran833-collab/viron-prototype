# Viron concept prototype

Viron is an early concept for helping small service businesses establish a calmer, clearer process for enquiries, quotations, and follow-ups. This prototype demonstrates the proposed story, an optional first-visit guide, and an interactive illustrative workspace using fictional data only.

## Stack

- React 19 with Vite
- Original CSS, inline SVG, and no UI framework or external component dependency

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The app is static and its production output is `dist/`.

For a repository site such as `https://account.github.io/viron/`, add `base: '/viron/'` to a `vite.config.js` file before building. For a user or organisation root site, Vite's default base path is suitable. Publish `dist/` through a GitHub Actions Pages workflow or the repository's selected static-hosting workflow.

## Limitations

This is intentionally a frontend-only concept. The workspace data is fictional and hard-coded; buttons demonstrate possible actions but do not create enquiries, contact customers, or persist a customer database. The only browser persistence is the guide's first-visit preference.
