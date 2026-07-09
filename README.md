# Portfolio Site

A plain HTML/CSS/JS portfolio, styled like a code editor — tabs for navigation, a typed-out terminal hero, and colorful syntax-inspired accents. No build step, no frameworks.

## Structure
```
index.html          → all page content/sections
css/style.css        → design tokens + all styling
js/main.js           → theme toggle, mobile nav, scroll reveal, typed hero effect
assets/               → put resume.pdf and any images here
```

## Running locally
No build tools needed — just open `index.html` in a browser, or serve it locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploying to GitHub Pages
1. Create a new GitHub repo (e.g. `yourusername.github.io` for a root domain, or any name for a project page).
2. Push these files to the repo's default branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source** → choose the `main` branch and `/ (root)` folder → Save.
4. Your site will be live at `https://yourusername.github.io/your-repo/` (or `https://yourusername.github.io/` if you used the special repo name) within a minute or two.

## Notes on the build
- **Reduced motion**: if a visitor's OS has "reduce motion" turned on, the typing animation and scroll-reveal are skipped automatically in favor of static content — no extra work needed if you keep editing within the existing markup.
- **Fonts** are loaded from Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono). Swap the `<link>` tags in `index.html` if you'd rather self-host them.
