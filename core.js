/* Pure cart functions shared by the browser and Node tests. */
(function(root) {
  'use strict';
  function sanitizeCart(value, products) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    const result = {};
    for (const p of products) {
      const quantity = value[p.id];
      if (Number.isInteger(quantity) && quantity > 0) result[p.id] = Math.min(99,quantity);
    }
    return result;
  }
  function totals(cart, products) {
    return products.reduce((sum,p) => {
      const quantity = cart[p.id] || 0;
      sum.count += quantity; sum.subtotal += quantity*p.price;
      return sum;
    },{count:0,subtotal:0});
  }
  const api = {sanitizeCart,totals};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.VitalCore = Object.freeze(api);
})(globalThis);
