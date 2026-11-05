/* Public settings only. Never add payment secrets, API keys, or private data here. */
window.VITAL_CONFIG = Object.freeze({
  businessName: 'Vital House',
  // Set only to your verified business inbox. Blank = download-only inquiries.
  inquiryEmail: 'vitalhouseresearch@gmail.com',
  // Set only to your verified business phone, e.g. '+17025550123'.
  phone: '+17027394502',
  // Owner-supplied list prices and grand-opening inquiry pricing; no online payments.
  currency: 'USD',
  cartStorageKey: 'vital-house-inquiry-cart-v1'
});
