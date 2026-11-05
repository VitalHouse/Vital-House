const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const {sanitizeCart,totals} = require('../core.js');
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../products.js'),'utf8'),sandbox);
const products=sandbox.window.VITAL_PRODUCTS;
test('reference catalog has unique valid IDs and cents prices',()=>{
 assert.equal(products.length,15);assert.equal(new Set(products.map(p=>p.id)).size,15);
 for(const p of products){assert.match(p.id,/^[a-z0-9-]+$/);assert.ok(Number.isInteger(p.price)&&p.price>0);}
});
test('cart restore rejects corrupted, unknown, negative and fractional input',()=>{
 for(const value of [null,[],false,'bad'])assert.deepEqual(sanitizeCart(value,products),{});
 assert.deepEqual(sanitizeCart({'unknown':1,'selank':2,'semax':-1,'mt2':1.5,'nad-plus':'2','retatrutide':999},products),{retatrutide:99,selank:2});
});
test('totals show original prices, 25% savings and one discounted total',()=>{
 const cart=sanitizeCart({'tirzepatide':1,'nad-plus':2,'selank':1},products);
 assert.deepEqual(totals(cart,products),{count:4,subtotal:25500,originalSubtotal:34000,savings:8500});
 assert.deepEqual(totals({},products),{count:0,subtotal:0,originalSubtotal:0,savings:0});
});
test('exact supplied logo bytes are retained',()=>{
 const crypto=require('node:crypto');const logo=fs.readFileSync(require('node:path').join(__dirname,'../assets/vital-house-logo-original.png'));
 assert.equal(crypto.createHash('sha256').update(logo).digest('hex'),'5c2a39d96c3e237661be3140ad3948a922ce50030ea6492f4a10f61735418a9d');
});

test('all original prices match the supplied price photo, with precisely 25% off',()=>{
 const originals=[15000,13000,8000,8500,5000,5000,15000,6500,5000,6500,10000,4000,4000,5000,10000];
 assert.deepEqual(Array.from(products,p=>p.originalPrice),originals);
 for(const p of products){assert.equal(p.price*4,p.originalPrice*3);assert.ok(p.description.length>30);}
 const t=totals({'retatrutide':2,'nad-plus':3},products);
 assert.deepEqual(t,{count:5,subtotal:41625,originalSubtotal:55500,savings:13875});
 assert.equal(t.subtotal+t.savings,t.originalSubtotal);
});
