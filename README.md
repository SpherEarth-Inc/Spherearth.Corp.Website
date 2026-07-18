# SpherEarth Inc. | SphèreTerre Inc.

Corporate website for [SpherEarth Inc. | SphèreTerre Inc.](https://www.spherearth.ca) — a Canadian company offering holistic solutions across environmental services, logistics, project finance, media & publishing, food & agriculture, recruitment, consultancy, and SpherEarth Football Academy.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export to out/
npm run lint
npm run images:webp   # convert public images to WebP
```

## Site areas

- Home, About Us, Why Choose Us
- Our Services (including SpherEarth Football Academy)
- Corporate Responsibility
- Careers, News & Events, Contact, Translate

Content lives under `src/lib/content/`. Shared layout and section components are in `src/components/`.

## Deploy

The site is built as a static export and deployed to DreamHost on pushes to `main` via GitHub Actions (`.github/workflows/deploy-dreamhost.yml`).

Required Actions secrets:

- `DREAMHOST_SFTP_SERVER`
- `DREAMHOST_SFTP_USERNAME`
- `DREAMHOST_SFTP_PASSWORD`
- `DREAMHOST_SFTP_REMOTE_PATH` — web root for `www.spherearth.ca`
