# Statasphere

Marketing site for Statasphere — Beyond Channel Intelligence.

React, TypeScript, Vite, and Tailwind CSS. Client-side routes cover the homepage and legal pages.

## Local development

Requires Node 20.19 or later.

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## GitHub

This folder is ready to become a Git repository. Nothing has been committed or pushed.

1. Create a new empty repository on GitHub (no README, .gitignore, or license).
2. In this project folder:

```bash
git add .
git status
git commit -m "Initial commit: Statasphere marketing site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

A local Git repository is already initialized. Nothing has been committed or pushed.

`git status` should **not** list `assets/Statasphere v7.mp4` (about 116MB). That master file is gitignored because GitHub rejects files over 100MB.

The site uses the web-optimized copy at `public/video/statasphere-v7.mp4` (about 15MB).

## Vercel

1. Open [Vercel](https://vercel.com) and import the GitHub repository.
2. Leave the defaults:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node: 22 (from `.nvmrc`)
3. Deploy.

`vercel.json` rewrites unknown paths to `index.html`, so these URLs work on refresh and direct visit:

- `/`
- `/privacy-policy`
- `/terms-of-service`
- `/data-processing`

After the first deploy, add the production domain `statasphere.co.uk` in Vercel → Project → Settings → Domains.

Open Graph tags already point at `https://statasphere.co.uk`. They will be correct once that domain is attached.

## Assets

| File | Location | In Git |
| --- | --- | --- |
| Product screenshots | `src/assets/*.jpg` | Yes |
| Favicon / OG image | `public/favicon.svg`, `public/og-image.jpg` | Yes |
| Web marketing film | `public/video/statasphere-v7.mp4` | Yes |
| Master film | `assets/Statasphere v7.mp4` | No (too large) |
