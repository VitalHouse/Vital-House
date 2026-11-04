/* Vital House: standalone research catalog + nonbinding inquiry cart, no external dependencies. */
(()=>{'use strict';
const products=[
{id:'retatrutide',name:'Retatrutide',dose:'30 mg',price:150,desc:'Investigational peptide studied in laboratory models of metabolic signaling.'},
{id:'tirzepatide',name:'Tirzepatide',dose:'30 mg',price:130,desc:'Dual-agonist peptide researched in metabolic signaling models.'},
{id:'wolverine',name:'Wolverine',dose:'5/5 mg',price:80,desc:'Experimental BPC-157 / TB-500 combination referenced in research.'},
{id:'nad',name:'NAD+',dose:'1,000 mg',price:85,desc:'Coenzyme studied in laboratory work on cellular energy reactions.'},
{id:'ghk',name:'GHK-Cu',dose:'100 mg',price:50,desc:'Copper-binding peptide examined in cell-signaling research.'},
{id:'mt2',name:'MT2',dose:'10 mg',price:50,desc:'Investigational melanocortin receptor research compound.'},
{id:'klow',name:'KLOW',dose:'80 mg',price:150,desc:'Experimental research blend; verify specific composition and documentation.'},
{id:'glutathione',name:'Glutathione',dose:'1,500 mg',price:65,desc:'Tripeptide used in biochemical redox and antioxidant research.'},
{id:'motsc',name:'MOTS-C',dose:'10 mg',price:50,desc:'Mitochondria-derived peptide referenced in cell signaling studies.'},
{id:'ss31',name:'SS-31',dose:'10 mg',price:65,desc:'Investigational peptide studied in mitochondrial laboratory models.'},
{id:'tesamorelin',name:'Tesamorelin',dose:'10 mg',price:100,desc:'Peptide analog researched for growth-hormone signaling.'},
{id:'selank',name:'Selank',dose:'10 mg',price:40,desc:'Investigational peptide studied in neurobiological models.'},
{id:'semax',name:'Semax',dose:'10 mg',price:40,desc:'Experimental peptide researched in neural signaling.'},
{id:'pinealon',name:'Pinealon',dose:'10 mg',price:50,desc:'Short-chain peptide examined in preclinical cellular research.'},
{id:'igf1',name:'IGF-1',dose:'1 mg',price:100,desc:'Growth factor relevant to laboratory research on cell signaling.'}
];
// Estimates only. Taxability and combined county rates need verification before commercial use.
const rates={Clark:.08375,Washoe:.08265,'Carson City':.076,Churchill:.076,Douglas:.071,Elko:.071,Esmeralda:.0685,Eureka:.0685,Humboldt:.0685,Lander:.071,Lincoln:.071,Lyon:.071,Mineral:.0685,Nye:.076,Pershing:.071,Storey:.076,'White Pine':.07725};
const $=id=>document.getElementById(id), fmt=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n), escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storageKey='vital_house_inquiry_cart_design_v1';
function read(){try{const data=JSON.parse(localStorage.getItem(storageKey)||'{}');const v={};if(data && typeof data==='object'){for(const p of products){const n=Number(data[p.id]);if(Number.isSafeInteger(n)&&n>0)v[p.id]=Math.min(n,99)}}return v}catch{return {}}}
let cart=read();function save(){try{localStorage.setItem(storageKey,JSON.stringify(cart))}catch{} counts()}
function count(){return Object.values(cart).reduce((s,v)=>s+v,0)}
function counts(){for(const el of document.querySelectorAll('.cart-count'))el.textContent=String(count());const nav=$('nav-count');if(nav)nav.textContent=String(count())}
function entries(){return products.filter(p=>cart[p.id]).map(p=>({...p,qty:cart[p.id]}))}
function add(id,num=1){if(!products.find(p=>p.id===id))return;const n=Math.max(1,Math.min(99,Math.trunc(Number(num)||1)));cart[id]=Math.min(99,(cart[id]||0)+n);save()}
function set(id,num){if(!products.find(p=>p.id===id))return;const n=Math.min(99,Math.max(0,Math.trunc(Number(num)||0)));if(n)cart[id]=n;else delete cart[id];save();renderCart()}
function cents(n){return Math.round(n*100)}
function totalFor(rate){const original=entries().reduce((sum,p)=>sum+cents(p.price)*p.qty,0);const after=Math.round(original*.75);const savings=original-after;const tax=Math.round(after*rate);return {original:original/100,savings:savings/100,after:after/100,tax:tax/100,total:(after+tax)/100}}
function renderCatalog(){const mount=$('catalog-list');if(!mount)return;mount.innerHTML=products.map(p=>`<article class="catalog-row"><h2 class="compound">${escape(p.name)}</h2><span class="bar" aria-hidden="true"></span><p class="description">${escape(p.desc)}</p></article>`).join('')}
function renderShop(){const mount=$('shop-grid');if(!mount)return;mount.innerHTML=products.map(p=>`<article class="product-card"><h2 class="product-name">${escape(p.name)}</h2><div class="product-dose">${escape(p.dose)}</div><div class="price-list"><span class="was">${fmt(p.price)}</span><strong class="now">${fmt(p.price*.75)}</strong></div><button type="button" class="add-button" data-add="${p.id}" aria-label="Add ${escape(p.name)} to inquiry cart">ADD TO CART</button></article>`).join('');mount.addEventListener('click',e=>{const button=e.target.closest('[data-add]');if(!button)return;add(button.dataset.add);button.textContent='ADDED ✓';setTimeout(()=>{if(button.isConnected)button.textContent='ADD TO CART'},900)})}
function vialSmall(){return `<div class="vial" aria-hidden="true"><img class="vial-shell" src="vial-shell.svg" alt=""><img class="vial-logo" src="brand-logo-display.png" alt=""></div>`}
function renderCart(){const mount=$('cart-items');if(!mount)return;const items=entries();const empty=$('empty-cart');if(!items.length){mount.innerHTML='';mount.hidden=true;empty.hidden=false}else{mount.hidden=false;empty.hidden=true;mount.innerHTML=items.map(p=>`<div class="cart-line">${vialSmall()}<div><div class="line-name">${escape(p.name)}</div><div class="line-dose">${escape(p.dose)}</div></div><div class="quantity" aria-label="Quantity of ${escape(p.name)}"><button type="button" data-id="${p.id}" data-action="minus" aria-label="Decrease ${escape(p.name)}">−</button><output>${p.qty}</output><button type="button" data-id="${p.id}" data-action="plus" aria-label="Increase ${escape(p.name)}">+</button></div><div class="line-price">${fmt(p.price*.75*p.qty)}</div><button type="button" class="remove" data-id="${p.id}" data-action="remove" aria-label="Remove ${escape(p.name)}">×</button></div>`).join('')};calcTotals();const send=$('send-inquiry');if(send)send.disabled=!items.length}
function county(){return $('tax-county')?.value||'Clark'}
function calcTotals(){const rate=rates[county()]??rates.Clark;const t=totalFor(rate);const put=(id,val)=>{if($(id))$(id).textContent=val};put('item-count',count());put('subtotal',fmt(t.original));put('savings','−'+fmt(t.savings));put('discounted',fmt(t.after));put('tax',fmt(t.tax));put('total',fmt(t.total));put('tax-percent',(rate*100).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')+'%')}
function inquiryText(){const f=$('inquiry-form');const t=totalFor(rates[county()]||rates.Clark);return [
'VITAL HOUSE | NONBINDING RESEARCH AVAILABILITY INQUIRY',
'This is a request for information, not an order or agreement to buy. No payment has been submitted.',
'','CONTACT',
'Full name: '+f.elements.fullName.value.trim(),
'Email: '+f.elements.email.value.trim(),
'Phone: '+f.elements.phone.value.trim(),
'Nevada destination county: '+county(),
'','PRODUCTS',
...entries().map(p=>`${p.name} (${p.dose}) × ${p.qty} | Original ${fmt(p.price*p.qty)} | 25%-off estimate ${fmt(p.price*.75*p.qty)}`),
'','ESTIMATED TOTALS','Original subtotal: '+fmt(t.original),'Grand opening savings (25%): −'+fmt(t.savings),'Discounted subtotal: '+fmt(t.after),
'Estimated '+county()+' County NV tax: '+fmt(t.tax),'Estimated total: '+fmt(t.total),
'','Prices, destination tax, shipping, eligibility and lawful availability are subject to independent review.',
'','ADDITIONAL QUESTIONS', f.elements.message.value.trim()||'(None)',
'','I understand this message is a nonbinding inquiry and does not commit either party to a transaction.',
'Phone and email are provided for inquiry response only, not sale or unsolicited marketing.'
].join('\n')}
function initCart(){const mount=$('cart-items');if(!mount)return;const sel=$('tax-county');sel.innerHTML=Object.keys(rates).sort((a,b)=>a.localeCompare(b)).map(c=>`<option value="${escape(c)}" ${c==='Clark'?'selected':''}>${escape(c+(c==='Carson City'?'':' County'))} (${(rates[c]*100).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')}%)</option>`).join('');sel.addEventListener('change',calcTotals);mount.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const qty=cart[b.dataset.id]||0;set(b.dataset.id,b.dataset.action==='plus'?qty+1:b.dataset.action==='minus'?qty-1:0)});const f=$('inquiry-form');f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity()||!entries().length)return;const body=inquiryText();const url='mailto:vitalhouseresearch@gmail.com?subject='+encodeURIComponent('Vital House - Nonbinding Research Availability Inquiry')+'&body='+encodeURIComponent(body);$('email-status').textContent='Your email program should open with the inquiry prepared. Please press Send in that program. Nothing has been sent automatically.';window.location.href=url});$('copy-inquiry').addEventListener('click',async()=>{if(!f.reportValidity()||!entries().length)return;try{await navigator.clipboard.writeText('To: vitalhouseresearch@gmail.com\nSubject: Vital House - Nonbinding Research Availability Inquiry\n\n'+inquiryText());$('email-status').textContent='Inquiry copied. Paste it into an email to vitalhouseresearch@gmail.com, then send.'}catch{$('email-status').textContent='Copying is not available in this browser; use Send Inquiry to open your email program.'}});renderCart()}
document.addEventListener('DOMContentLoaded',()=>{counts();renderCatalog();renderShop();initCart()});
})();
