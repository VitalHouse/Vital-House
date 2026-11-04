# Vital House — Clean Slate Website

Five standalone pages: `index.html`, `catalog.html`, `shop.html`, `cart.html`, and `policies.html`. All site assets are alongside the HTML files in the repository root, and all pricing/cart logic is in `app.js`. `styles.css` controls the design.

## Upload to GitHub Pages

1. Extract the ZIP, all files.
2. In the repository root, replace old HTML/CSS/JS files with these. Upload every extracted file directly to the repository root. Do not upload the ZIP itself. Delete stale files/folders from earlier versions, but **keep the `CNAME` file**.
3. In repository Settings → Pages, keep deployment from the root of your chosen branch (often `main`).
4. Visit `https://www.vitalhouse.org/`, then check `/catalog.html`, `/shop.html`, `/cart.html`, and `/policies.html`; if necessary, hard-refresh to bypass old browser cache.

## How it works

- Product data and grand-opening pricing: `app.js`; all 15 products use 25% off.
- Cart: browser localStorage (no backend). Items persist on the same browser/device.
- Estimated tax: selected Nevada destination county; Clark County defaults to 8.375%. This is not a tax engine, and different taxability/exemption rules or shipping destinations may change the final amount.
- Inquiry: clicking **Prepare inquiry email** opens the visitor's email application with an editable draft; visitors must click Send. If mailto is not configured, use **Copy inquiry instead** and email it manually. Nothing is automatically sent to you. No payment processing is enabled.
- Logos: `logo-original-unaltered.jpg` is an **untouched copy of the user's original logo**. `logo-original-transparent.png` is a display variant with only the white image background made transparent; black letterforms are not redrawn. The same display asset is placed inside the custom SVG vial illustrations.
- Bottles: hand-crafted vector **illustrations**, not photos of the actual bottles.
- Community photo: original AI-generated lifestyle illustration, not a testimonial or representation of product results.

## Before public launch

Have a qualified attorney or regulatory professional review product eligibility, product-specific FDA/FTC statements, sales pathways, and distribution rules. Research-use disclaimers alone do not make marketing or sale of an unapproved drug lawful. Have a tax professional validate county-specific tax applicability and actual filing/collection duties. Verify the email/phone contact details and make a test inquiry. Do not treat the static email draft as proof an inquiry was received.
