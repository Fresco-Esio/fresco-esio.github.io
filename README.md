## Live site

- URL: https://fresco-esio.github.io/
- The site is deployed via GitHub Pages using the workflow at `.github/workflows/pages.yml`.

## Repo view vs. live site

- The GitHub repository page shows your files (and renders this README). It won’t render `index.html` as a website there.
- The actual website is served by GitHub Pages at the URL above. Our workflow builds the React app in `frontend/` and publishes the compiled `frontend/build/` to Pages.
- The `build/` folder is generated during CI and uploaded as an artifact for Pages to serve—it’s not committed to the repo, so you won’t see it in the file list.

## Deploying

GitHub Pages is configured to deploy on every push to `main`.

Manual trigger:
1. Go to the Actions tab → “Deploy GitHub Pages”.
2. Click “Run workflow”.
3. When it finishes, open https://fresco-esio.github.io

Settings check:
1. Repo Settings → Pages
2. Build and deployment → Source: GitHub Actions

## Local build and preview (optional)

From the repo root on Windows PowerShell:

```powershell
cd frontend
npm ci
npm run build

# Preview the production build with a static server
npx serve -s build
```

Open the local server URL shown in the terminal. Avoid opening `build/index.html` directly from the filesystem, as client-side routing can break without a server.

## Notes

- Client-side routing: The workflow also publishes a `404.html` copy of `index.html` so unknown routes serve the app (React Router compatible on Pages).
- Styling and design system: See `.github/fiore-philosophy.md` and `.github/fiore-implementation.md` for Fiore Interface principles.
