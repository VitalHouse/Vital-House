# Vital House — Original Design / Grand Opening

This version brings the original Coming Soon artwork into the functional Vital House website. The main logo from the original artwork is displayed using the original source image. The separate uploaded logo file is also retained byte-for-byte. Grand Opening uses custom brush-painted lettering with an accessible heading and image alternative text. An edited copy of the background removes the Coming Soon lettering and the former human-health claim from the hero; original artwork is retained separately.

## Included

- Grand-opening home page in the original cream, neon yellow, turquoise and black style.
- 15-item research reference catalog with brief compound descriptions, a research-only statement on each listing, scientific references, search, filters and sorting.
- Original prices from the supplied photo, a 25% reduction applied once, product detail dialogs and a persistent inquiry cart. Quantity selectors support 1–99 per product before adding.
- Validated, downloadable research inquiries and email drafts to vitalhouseresearch@gmail.com; contact, FAQ and policy views.
- Click-to-call business number: 702-739-4502.
- Local fonts and responsive layouts. No build step or external scripts required.

## Open and upload

Extract this ZIP. index.html is at the top level, without an extra enclosing website folder. Open it to preview the site, or serve this folder locally with `python3 -m http.server 8080`.

Upload the extracted contents to your GitHub repository, preserving the assets folder. GitHub supports folders. Use GitHub for source code and connect the repository to a commercial host that permits your business and products. GitHub Pages is not intended or permitted for running an online business or ecommerce site: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features#pages

For a static host, choose no build command and publish the repository root. Only index.html, styles.css, config.js, products.js, core.js, app.js and assets/ need to be public.

## Sales launch status

This delivery is a functioning catalog and inquiry frontend. It does not accept orders, take payments, verify stock, or transmit inquiries automatically. Original prices and listed vial contents are from the owner-supplied price photo. A 25% grand-opening reduction is displayed on every shop listing and applied once in cart totals. These are nonbinding inquiry estimates, not accepted orders.

To open paid online sales, confirm product eligibility, inventory, pricing practices, shipping and return terms, and a payment provider that supports the business. Backend checkout and provider verification must be implemented separately; do not place private keys in these public files.

The business inbox vitalhouseresearch@gmail.com is configured in config.js. The visitor must review and send the draft from their own mail application. Downloads stay on the visitor's device. The original phone number is already configured.

## Verify

Run `node --check app.js` and `node --test tests/cart.test.cjs`. The tests cover catalog integrity, corrupted cart restore, quantity limits, every original price from the photo, the 25% reduction, integer-cent totals and exact uploaded logo bytes. Desktop browser checks exercised the brush-lettered homepage, shop pricing, quantity selection, adding multiple units, discount totals, required-form validation and inquiry download. An inquiry with two Retatrutide and three NAD+ units showed $555.00 original subtotal, $138.75 savings and $416.25 discounted subtotal. The email-app handoff could not be tested because the review browser blocks mailto navigation. Customers must have an email app configured, review the prepared draft and send it themselves; no message is sent by the website. Live payments are not connected.

The private hosted review copy is separate from any public business domain. Uploading these files to a GitHub repository does not itself publish a sales site.

## Assets

Keep the included font license notices. Vial artwork is illustrative packaging, not proof of actual stock or labeling. The altered background was made with image generation from the original supplied artwork; the original-source logo layer remains unaltered. A separate generated transparent asset provides the brush-painted Grand Opening lettering. It is separate from the unchanged logo.
