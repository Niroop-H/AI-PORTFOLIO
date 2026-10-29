# Portfolio deployment notes

The React/Next.js portfolio in this repository is the live source of truth. Import this repository into Vercel with the Next.js preset.

## Local verification and deployment

The ChatGPT GitHub connector can update text files but cannot upload binary JPEG assets. The full ready-to-run project bundle is available in the associated ChatGPT response. It includes the supplied portrait at `public/niroop-h.jpeg`.

If you need to use the repository without the bundle, upload your portrait to `public/niroop-h.jpeg` and ensure the hero image points to that path.

## Domain

The current metadata, robots and sitemap use a placeholder Vercel URL. After Vercel assigns your production domain (or you add a custom domain), replace the URL in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
