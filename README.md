# Terranxt website

Static site. No build step. Open `index.html` in a browser, or use the VS Code "Live Server" extension.

## Structure
- `index.html, products.html, solutions.html, how-it-works.html, demo.html, roadmap.html, company.html, contact.html`
- `css/styles.css` — theme (colours at the top, in `:root`)
- `js/data.js` — portals, solutions, flow, roadmap, nav. **Edit content here.**
- `js/main.js` — header, footer, rendering, contact form
- `assets/images` — screenshots (names are in `data.js`: studio.png, go.png, connect.png, scada.png, artha.png, hero-studio.png, proof.jpg)
- `assets/logos` — put terranxt / pvNXT logo SVGs here, then replace the text logo in `js/main.js`
- `assets/videos` — demo videos are large; host on YouTube (unlisted) and paste the embed URL into `video` in `js/data.js`

## To do before launch
- Replace the placeholder boxes (search `class="ph"` or "screenshot") with real images: `<img src="assets/images/..." alt="...">`
- Set app store links (footer-less: products.html, search for `href="#"`)
- Contact form: connect to an endpoint in `js/main.js`
- Confirm email (info@terranxt.com), Privacy / Terms pages
- Artha: legal review before public marketing
- Remove unverified numbers: none are used. Add only measured ones.
