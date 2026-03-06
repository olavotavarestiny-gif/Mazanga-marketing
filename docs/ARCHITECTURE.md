# Project Structure

This project uses Next.js App Router and is organized by domain responsibility.

## Top-level directories

- `app/`: routes, layouts and API handlers.
- `components/`: reusable UI and domain components.
- `content/`: static content objects (blog posts, long-form copy).
- `lib/`: shared utilities and external clients.
- `public/`: static assets served directly.
- `docs/`: internal project documentation.

## Conventions

- Route-level components remain under `app/<route>/`.
- Reusable business components go into `components/<domain>/`.
- Form components live in `components/forms/`.
- Content collections live in `content/` instead of `lib/`.
- Third-party SDK setup stays in `lib/` and must use environment variables.

## Current key paths

- Lead form UI: `components/forms/LeadForm.tsx`
- Contact page: `app/contacto/page.tsx`
- Lead API: `app/api/lead/route.ts`
- Supabase client: `lib/supabase.js`
- Blog content: `content/blog-posts.ts`
