# Projects page

The `/projects` archive shares the homepage header and footer. Ongoing projects use image-and-text features; past projects use compact archive entries. Details expand inline, with only one project open across both groups. Entries without details or resources have no expansion button.

## Content

Edit `src/data/projects.ts`. All current entries are explicitly labeled development placeholders; none represent verified initiatives or achievements. No real images, dates, outcomes, teams, or external destinations have been supplied. Replace placeholder content only with approved information and clear `isPlaceholder` when an entry is verified.

Each entry has a title, summary and status (`ongoing` or `completed`). Optional fields include ID, image (source and meaningful alt text), problem, goals, approach, progress, outcome, team, collaborators, date, updates and resources (label and URL). Use stable unique IDs when available. Empty detail fields and resources are omitted. Missing or failed images have a neutral text fallback; past projects need no image. Empty categories have a short empty state.

## Navigation and hosting

`usePageRoute` handles same-origin homepage and Projects links, browser history, document titles and focus on the destination main content or section. Modified clicks retain browser behavior. About and Get Involved target homepage anchors from either page.

Direct `/projects` requests and refresh work in Vite development and production preview. The root `vercel.json` supplies Vercel's Vite SPA rewrite to `/index.html` for direct application-route requests. Hosting setup and deployment remain a separate step.

## Verification

Lint and production build pass. Playwright checks cover 1440px, 375px and 320px reflow; inline opening and closing with mouse, Enter and Space; one-open behavior; omitted toggles for entries without details; homepage navigation; and production-preview direct loading and refresh. Screenshots are local ignored Playwright artifacts. No new external resource links are fabricated. This is a development preview, not a complete WCAG certification or production launch.
