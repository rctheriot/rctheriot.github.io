# Ryan Theriot — Portfolio

Personal portfolio site for [ryanctheriot.com](https://ryanctheriot.com), built with **Vite + React + TypeScript**.

## Development

```bash
nvm use 22        # or any Node 20+
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Structure

```
public/
  CNAME                     custom domain (ryanctheriot.com)
  files/                    résumé PDF
src/
  data/                     content — edit these to update the site
    profile.ts              name, title, contact, summary, social links
    projects.ts             project list (title, description, tech, links, videos)
    resume.ts               experience, education, publications, skills
  components/               Sidebar, ProjectCard, VideoModal, Resume
  useTheme.ts               dark/light theme (dark by default)
  App.tsx                   layout + section navigation
```

To update content, edit the files under `src/data/` — no component changes needed.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. Enable **Settings → Pages → Source: GitHub Actions**
in the repository once.
