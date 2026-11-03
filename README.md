# Sport TA website

Static, responsive Sport TA landing page ready for GitHub Pages.

## Files
- `index.html` — platform landing page with FitTA and future app placeholder
- `fitta.html` — FitTA detail page (marked in development)
- `styles.css` — responsive dark-theme styling
- `script.js` — mobile menu and copyright year
- `assets/favicon.svg` — simple Sport TA favicon

## Publish to GitHub Pages
1. Create a public GitHub repository (e.g. `sport-ta`).
2. Upload all files and the `assets/` folder to its root.
3. Open **Settings → Pages** and choose **Deploy from a branch**, `main`, `/ (root)`.
4. Save. Your site will appear at `https://YOUR-USERNAME.github.io/sport-ta/`.

## Update the app links
`fitta.html` currently has a coming-soon message. Add real Google Play, Windows, or App Store links when the application is released. The site makes no claims that an app is already available.

## Add more Sport TA apps
Copy and adapt a card in `index.html` under `.app-grid`, and create a dedicated details page or link to the new app's landing page. Change the second placeholder card when ready.

## Notes
No build tools or hosting backend are needed. Google Fonts are loaded from the network; system font fallbacks are supplied.
