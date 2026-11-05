/* Public settings only. Never add payment secrets, API keys, or private data here. */
window.VITAL_CONFIG = Object.freeze({
  businessName: 'Vital House',
  // Set only to your verified business inbox. Blank = download-only inquiries.
  inquiryEmail: '',
  // Set only to your verified business phone, e.g. '+17025550123'.
  phone: '',
  // Prices are illustrative, transcribed from the supplied design; not live offers.
  currency: 'USD',
  cartStorageKey: 'vital-house-inquiry-cart-v1'
});
