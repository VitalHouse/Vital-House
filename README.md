# Vital House website

A portable, dependency-free website coded to closely follow the supplied cream, neon yellow, turquoise, and black mockup. The **original supplied logo is included byte-for-byte**, displayed at its natural aspect ratio with no crop, redraw, filter, recoloring, or transparency conversion.

## What works

- Responsive home, research catalog, shop, inquiry cart, contact, FAQ, and policy views.
- All 15 reference listings and nominal vial contents from the supplied design.
- Search, listing-type filters, price/name sorting, product detail dialogs.
- Add/remove items, quantity controls (1–99), integer-cent calculations, and a persistent browser-local cart.
- Validated nonbinding inquiry form and a downloadable text inquiry.
- Optional email draft after a verified business inbox is set in `config.js`.
- Keyboard navigation, focus handling, semantic labels, modal details, reduced-motion support.
- Local fonts and assets; no CDN, build step, package installation, tracking scripts, or API keys.

## Important scope

This is a **functional catalog and inquiry website, not an operational sales checkout**. Prices and nominal contents are unverified examples transcribed from the mockup. It accepts no orders, payments, taxes, or shipping requests. No real inventory, customer account, email delivery service, or fulfillment system is connected.

The 25% promotional strikethroughs, consumer wellness tagline/photo, benefit descriptions, quality-assurance claims, automatic Nevada tax estimate, and “all sales final” language were not carried over. No evidence was supplied to support those claims or policies. A research disclaimer is not a legal authorization to sell. See `COMPLIANCE.md` before a sales launch.

## Preview on your computer

1. Extract this ZIP.
2. Open `index.html` in a modern browser. This site uses regular deferred scripts and relative asset paths, so it can be opened directly.
3. For the most reliable local-storage and download behavior, use a local server from this folder:

   ```sh
   python3 -m http.server 8080
   ```

4. Open `http://localhost:8080`.

Cart selections persist in that browser when storage is permitted. Inquiry form entries are not persisted. Test data is not included in the package.

## Add the source to GitHub

1. Create a repository in your GitHub account.
2. Upload **the files inside this extracted folder** to the repository root. Keep `index.html` at the root.
3. Include `.github/workflows/check.yml` if you want automatic syntax and cart checks. GitHub’s web uploader may hide dotfolders; use Git or your editor’s source-control tools if needed.
4. Commit your files. No external dependencies or secrets are needed.

A GitHub repository can hold this code. **Do not use GitHub Pages to run this ecommerce business.** GitHub’s Pages usage limits prohibit using Pages to run an online business, ecommerce site, or site primarily facilitating commercial transactions. No Pages deployment workflow is included. Use a commercial web host whose current terms expressly permit your specific business and products, with the repository as your source.

Primary policy: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

No repository was created and no site was deployed to your GitHub account by this delivery.

## Publish the static frontend elsewhere

After selecting an eligible host, upload these public files to its web root, or connect the GitHub repository with no build command:

- `index.html`
- `styles.css`
- `config.js`
- `products.js`
- `core.js`
- `app.js`
- `assets/` (including the font license notices)

All links and assets use relative paths; hash routes support subdirectory hosting without server rewrites. Source docs, tests, and GitHub workflow files need not be served publicly. The `robots` meta tag currently requests no indexing because this is an unverified preview; robots directives are not access control.

## Customize

| File | What to edit |
|---|---|
| `config.js` | Verified business email and phone. Leave blank until confirmed. These settings are public. |
| `products.js` | Reference names, nominal contents, type, note, and illustrative price in integer USD cents. |
| `styles.css` | Colors, spacing, responsive breakpoints, typography. |
| `app.js` | View templates and cart/inquiry interactions. |
| `assets/vital-house-logo-original.png` | Original uploaded logo. Preserve it unchanged. |

To enable the optional **Open email draft** button, set `inquiryEmail` to your real, verified business inbox in `config.js`. The website never sends an email itself. The customer reviews and sends the draft in their own mail app. Long inquiries must be downloaded and attached manually because email links have practical length limits.

Do not put provider secrets or payment keys in client-side files. Do not turn this preview into a sales checkout merely by changing its labels. A legitimate sales launch requires separate legal, operational, server-side, and payment-provider work described in `COMPLIANCE.md`.

## Checks

With Node.js 22 or newer:

```sh
node --check app.js
node --test tests/cart.test.cjs
```

Tests check catalog integrity, corrupted storage handling, quantity limits, exact cart arithmetic, and the original logo’s SHA-256 hash. A supplied-mockup cart example (one Tirzepatide, two NAD+, one Selank) sums to **$255.00**, before any actual applicable tax/shipping. The old mockup’s further 25% subtraction is not repeated: its displayed item prices already reflected its design’s promotional prices.

Verified manually in a browser: desktop home/shop, name search, product details, add to inquiry, quantity changes without losing entered form text, inquiry download, cart restore on refresh, and 390-pixel mobile home/shop/cart layouts. Email sending and live payments were not tested or implemented.

## Assets and rights

The original logo came from the user and is not recreated. Decorative vial illustrations are built in HTML/CSS and are explicitly labeled as illustrations. They are not actual inventory photos or product packaging claims. The home text replaces the mockup’s human-wellness framing.

Bundled Nimbus fonts are from URW Base 35; the arrow-symbol subset derives from DejaVu Sans. Their copyright, license, and embedding notices are included under `assets/FONT-LICENSE-*.txt`. Keep those notices with redistributed assets. No generated artwork or external stock-photo dependency is required.
