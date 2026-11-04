# Vital House | Faithful Four-Panel Website

This is a working static website built from the four-panel mockup. The screenshot is a visual reference, **not** a flattened webpage background. Every page uses real responsive HTML/CSS, functioning navigation, separate reusable assets, and local JavaScript for the catalog and inquiry cart.

## Deploy to GitHub Pages

1. Extract the ZIP.
2. Open https://github.com/VitalHouse/Vital-House.
3. Choose Add file > Upload files.
4. Upload the actual files from inside this folder to the **repository root**. Do not upload the ZIP or wrap files inside a second folder.
5. Commit. Keep the included `CNAME` containing `www.vitalhouse.org`.
6. Check the live domain using a fresh private/incognito tab after GitHub Pages has deployed.

## Website pages

- `index.html` — Home / Grand Opening
- `catalog.html` — Research Catalog
- `shop.html` — Shop listing and 25% displayed discounts
- `cart.html` — Editable inquiry cart, quantity steppers, estimated county sales tax, and email inquiry
- `policies.html` — Research notices and privacy statements

## Modular assets: do not remake the logo

- `brand-logo-original.jpg` — **unaltered, exact original user-supplied logo**; do not edit or replace with a generated logo.
- `brand-logo-display.png` — display transparency derived from the original's white background, without changing shape or typography; it is used for every logo on pages and the illustrated vial labels.
- `vial-shell.svg` — standalone clear-glass vial drawing, with no logo embedded. The actual brand logo overlays it in HTML, making logo updates independent of the vial artwork.
- `grand-opening-lettering.png` — standalone Grand Opening lettering (black script, transparent background).
- `paper-texture.jpg` and `community-photo.jpg` — background texture and lifestyle photo assets.
- `style.css` — site-wide visual design.
- `site.js` — products, 25% discount, dynamic cart, Nevada county rate estimates, and nonbinding email inquiry.

## Important limitations

This GitHub Pages site cannot send email automatically: the Send Inquiry button opens the customer's email program and the customer must press Send. The Copy Inquiry fallback is also provided. The website collects no payments and no card data.

Rates, shipping, product eligibility, research-use notices and legally permissible distribution must be independently reviewed before launch. In particular, research-use disclaimers alone do not authorize the distribution or sale of unapproved drugs. Do not rely on the estimated county tax rate for tax filing.

The source mockup is a 4-column image of four narrow poster-style pages. Each functional page is therefore deliberately centered and poster-proportioned on wide desktop screens, and fills mobile screens. This maximizes its resemblance to the original mockup.
