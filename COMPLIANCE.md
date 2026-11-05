# Sales launch review notes — U.S. context

Updated November 5, 2026. This file explains the implementation choices and remaining work; it is not a legal opinion or certification of compliance. State, local, destination-country, product-specific, hosting, and payment rules may also apply.

## The key issue is actual intended use

FDA evaluates the full circumstances surrounding a product and its promotion. Simply adding “research use only,” “not for human consumption,” an age checkbox, or a research-purpose declaration does not legalize the marketing or distribution of an unapproved drug for human use. An inquiry-only flow also does not itself establish that an offering is lawful.

FDA specifically warns about consumer sales of unapproved GLP-1 products falsely labeled as research products. Its current guidance states that retatrutide is not a component of an FDA-approved drug and cannot be used in compounding under federal law. The fact that an active ingredient appears in an approved medicine does not mean the reference vial in this design is approved or lawfully marketable as that medicine.

The current build accepts no sales or payments. Original prices and listed contents were supplied by the owner in a price photo. Product identity, stock and batch documentation remain unverified. No product-specific legal status is asserted.

## Changes made to the supplied concept

| Concept element | Implemented treatment |
|---|---|
| Exact supplied logo | Original bytes retained; natural aspect ratio; no visual processing. |
| Cream / fluorescent yellow / turquoise / black, brushes, dots, stripes | Retained in responsive HTML/CSS. |
| 15 named products and nominal contents | Reference listings only; no availability, identity, or composition assurance. |
| Wolverine and KLOW blends | No invented constituent list; composition explicitly unverified. |
| Weight, metabolic, cognition, recovery, tanning, skin, longevity, and similar descriptions | Omitted; no human body-function or treatment benefits promoted. |
| Original “warm wellness at home” branding | Retained in the original supplied artwork, per the requested design. Its consumer-wellness implications require assessment as part of the overall intended-use review; an inquiry-only flow does not resolve that issue. New body-function claims and lifestyle imagery were not added. |
| Purity, quality assurance, COA or testing badges | No unsupported certifications, values, batch claims, or documents. |
| 25% grand-opening pricing | Original prices supplied in the owner’s photo; inquiry prices reduced by 25% once. Historical regular-price substantiation and promotion terms remain the owner’s responsibility. No end date or countdown is invented. |
| Inquiry estimates | Original unit prices, 25% discounted unit prices, quantities, original subtotal, savings and discounted total shown separately. No payment is collected. |
| Estimated Nevada tax | Omitted; a live system needs destination/product-specific tax treatment. |
| Consumer checkout | Replaced with nonbinding inquiry preparation; no sales or payment processing. |
| “All sales final” | Omitted; no sales occur and actual policy has not been established. |

## Before any sales launch

1. Have qualified U.S. counsel determine which exact products, compositions, presentations, uses, buyers, and destinations may lawfully be supplied under the intended business model. If operating a legitimate prescription medicine business, that requires a different licensed prescribing/dispensing model; do not use this research frontend as a substitute.
2. Establish actual manufacturer/supplier details, identity, nominal contents, blend composition, batch traceability, lawful sourcing, relevant testing, and accurate supporting documents. Publish only substantiated claims. A COA does not by itself establish regulatory approval or safety for human use.
3. Verify that all descriptions, photos, packaging, promotional channels, testimonials, SEO metadata, and communications fit the lawful intended use. Claims remain claims even when prefaced with “studied for.”
4. Establish proportionate independent customer/institution verification and an auditable review process where applicable. The form’s self-declaration is not verification.
5. Obtain hosting and payment-provider acceptance for the actual product catalog and business model. Do not conceal product identities or misclassify the business. GitHub may host source code; GitHub Pages must not be used as the ecommerce host.
6. Set verified business identity, contact details, applicable sale terms, privacy practices, shipping destinations/restrictions, tax treatment, returns/refunds, and an accurate product-specific pricing policy. Remove preview/noindex wording only when the replacement statements are accurate.
7. Implement real sales infrastructure separately: trusted server-side product/price lookup, approved hosted payment checkout, signed verified webhooks, idempotent order records, inventory reconciliation, applicable taxes/shipping, secure operational access, and retention/deletion practices. Never collect card details in this static site or trust browser totals as charged amounts.
8. Reassess current federal and applicable state/destination requirements immediately before launch. This package intentionally has no hidden switch to activate sales.

## Primary sources consulted

- FDA, “FDA’s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss”: https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss
- FDA, Gram Peptides warning letter, March 31, 2026 (specific example of intended-use findings despite research disclaimers): https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026
- FDA, Summit Research Peptides warning letter, December 10, 2024: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/summit-research-peptides-695607-12102024
- FTC, Health Products Compliance Guidance (truthfulness, nonmisleading claims, and substantiation for express and implied health claims): https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- GitHub, GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
