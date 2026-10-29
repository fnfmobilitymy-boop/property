# AL Property — personal agent demo

## GitHub Pages deployment

In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
The **Deploy website to GitHub Pages** workflow builds and publishes `dist/` after
every push to `main`. It can also be started from **Actions → Deploy website to
GitHub Pages → Run workflow**. No personal access token or additional secret is
needed; deployment uses the workflow's built-in GitHub token.

The expected public address is https://fnfmobilitymy-boop.github.io/property/.

A bilingual English / Simplified Chinese property advisor landing page inspired by the supplied reference video: dark surfaces, oversized typography, violet lighting, a layered portrait, and a scroll-scrubbed opening sequence.

## Run

Node.js 20 or newer; no third-party runtime dependencies.

```sh
npm run dev
```

The development server listens on port 5173 (or `PORT`). `npm run build` creates a static `dist/` folder suitable for static hosting. Preview the working source with `npm run dev`.

## Content and interactions

- Language switch persists the visitor's preference locally.
- Three property concepts, category filters, accessible detail dialogs.
- Three sample client stories, career CTA, local demo enquiry form.
- WhatsApp is intentionally a demo until a real number is provided. No personal information is sent or stored by the form.
- Facebook, Instagram, and TikTok are logo-only demo controls.
- All names, agency, projects, achievements, and testimonials are illustrative.
- Each supplied photograph occupies one location. The hero uses an AI background-removal/extension edit of the supplied professional portrait. Remaining imagery includes original CSS architectural illustration and a locally generated SVG skyline.

## Main files

- `index.html`: page sections and content.
- `style.css`: responsive presentation, local font assets, reduced motion support.
- `app.js`: bilingual strings, scroll animation, filters, dialogs, and demo interactions.
- `public/`: local image and font assets. No external assets are required at runtime.

Respect `prefers-reduced-motion`: visitors who request reduced motion receive a static opening and immediate content visibility.

## Property collections

- `/new-launches.html`: four new-development concepts.
- `/resale-homes.html`: four distinct resale-home concepts.
- `listings.js` holds all bilingual descriptions, illustrative pricing, sizes, tenure, highlights, and availability.
- Each collection uses an expanding accordion with pointer hover, click, keyboard arrow navigation, and previous/next buttons. Mobile uses a vertical accordion.
- The two generated image sheets contain eight different architectural/interior illustrations; CSS displays each quadrant as its own distinct property photo. No property photo is repeated within a collection.
- Property viewing links preserve the selected project name when navigating to the home enquiry form.
