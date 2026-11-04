/* Self-contained catalog and cart: no fetch calls, external services, or payment collection. */
'use strict';
const VH = (() => {
  const products = [
    {id:'retatrutide',name:'Retatrutide',dose:'30 mg',price:150,description:'Investigational multi-receptor peptide referenced in metabolic-signaling research.'},
    {id:'tirzepatide',name:'Tirzepatide',dose:'30 mg',price:130,description:'Dual-receptor peptide studied in laboratory research on metabolic signaling.'},
    {id:'wolverine',name:'Wolverine',dose:'5/5 mg',price:80,description:'Combination research blend containing BPC-157 and TB-500; component pathways remain under investigation.'},
    {id:'nad',name:'NAD+',dose:'1,000 mg',price:85,description:'Coenzyme used in laboratory work involving cellular energy and redox reactions.'},
    {id:'ghk',name:'GHK-Cu',dose:'100 mg',price:50,description:'Copper-binding peptide studied in laboratory models of extracellular-matrix signaling.'},
    {id:'mt2',name:'MT2',dose:'10 mg',price:50,description:'Investigational melanocortin-pathway research peptide.'},
    {id:'klow',name:'KLOW',dose:'80 mg',price:150,description:'Multi-component experimental research blend; composition and documentation should be reviewed before inquiry.'},
    {id:'glutathione',name:'Glutathione',dose:'1,500 mg',price:65,description:'Tripeptide used in biochemical research on oxidative and reduction reactions.'},
    {id:'motsc',name:'MOTS-C',dose:'10 mg',price:50,description:'Mitochondria-derived peptide studied in cellular-signaling research.'},
    {id:'ss31',name:'SS-31',dose:'10 mg',price:65,description:'Investigational peptide studied in models of mitochondrial function.'},
    {id:'tesamorelin',name:'Tesamorelin',dose:'10 mg',price:100,description:'Peptide analog used in research on growth-hormone-releasing hormone signaling.'},
    {id:'selank',name:'Selank',dose:'10 mg',price:40,description:'Investigational peptide studied in neurobiological laboratory models.'},
    {id:'semax',name:'Semax',dose:'10 mg',price:40,description:'Investigational peptide used in laboratory research on neural signaling.'},
    {id:'pinealon',name:'Pinealon',dose:'10 mg',price:50,description:'Short-chain peptide explored in preclinical cell-signaling research.'},
    {id:'igf1',name:'IGF-1',dose:'1 mg',price:100,description:'Growth-factor protein relevant to laboratory research on cell growth and signaling.'}
  ];
  const countyRates = {
    'Clark':.08375,'Washoe':.08265,'White Pine':.07725,'Carson City':.076,'Churchill':.076,'Storey':.076,
    'Nye':.076,'Douglas':.071,'Elko':.071,'Lander':.071,'Lincoln':.071,'Lyon':.071,
    'Pershing':.071,'Esmeralda':.0685,'Eureka':.0685,'Humboldt':.0685,'Mineral':.0685
  };
  const discount = .25;
  const storageKey = 'vital_house_cart_v4';
  const $ = (id) => document.getElementById(id);
  const money = amount => '$' + Number(amount).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const safe = s => String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function loadCart(){try{const data=JSON.parse(localStorage.getItem(storageKey)||'{}');if(!data||typeof data!=='object'||Array.isArray(data))return {};const out={};for(const p of products){const q=Number(data[p.id]);if(Number.isFinite(q)&&q>0)out[p.id]=Math.min(99,Math.floor(q));}return out;}catch{return {};}}
  let cart = loadCart();
  function saveCart(){try{localStorage.setItem(storageKey,JSON.stringify(cart));}catch{} updateCount();}
  function updateCount(){let count=Object.values(cart).reduce((a,b)=>a+b,0);for(const el of document.querySelectorAll('.cart-count')){el.textContent=String(count);el.setAttribute('aria-label',count+' products in inquiry cart');}}
  function add(id, qty){if(!products.some(x=>x.id===id))return;const q=Math.max(1,Math.min(99,Math.floor(Number(qty)||1)));cart[id]=Math.min(99,(cart[id]||0)+q);saveCart();}
  function setQty(id,qty){if(!products.some(x=>x.id===id))return;const q=Math.max(0,Math.min(99,Math.floor(Number(qty)||0)));if(q===0)delete cart[id];else cart[id]=q;saveCart();renderCart();}
  function entries(){return products.filter(p=>cart[p.id]>0).map(p=>({...p,qty:cart[p.id]}));}
  function totals(rate){const originalCents=entries().reduce((sum,p)=>sum+Math.round(p.price*100)*p.qty,0);const discountedCents=Math.round(originalCents*(1-discount));const savingsCents=originalCents-discountedCents;const taxCents=Math.round(discountedCents*rate);return {original:originalCents/100,savings:savingsCents/100,discounted:discountedCents/100,tax:taxCents/100,total:(discountedCents+taxCents)/100};}
  function renderCatalog(){const mount=$('catalog-list');if(!mount)return;mount.innerHTML=products.map((p,i)=>`<article class="catalog-row"><span class="number">${String(i+1).padStart(2,'0')}</span><h2 class="compound">${safe(p.name)}</h2><p class="description">${safe(p.description)}</p></article>`).join('');}
  function renderShop(){const mount=$('shop-grid');if(!mount)return;mount.innerHTML=products.map(p=>`<article class="product-card"><div class="product-name">${safe(p.name)}</div><div class="product-dose">${safe(p.dose)}</div><div class="price-line"><span class="price-was">${money(p.price)}</span><span class="price-now">${money(p.price*.75)}</span></div><div class="qty-line"><label for="qty-${p.id}">Qty</label><input type="number" min="1" max="99" value="1" id="qty-${p.id}" inputmode="numeric" aria-label="Quantity of ${safe(p.name)}" /></div><button class="btn btn-primary btn-small add-button" data-id="${p.id}" type="button">Add to cart +</button><div class="card-added" id="msg-${p.id}" role="status"></div></article>`).join('');mount.addEventListener('click',e=>{const btn=e.target.closest('.add-button');if(!btn)return;const id=btn.dataset.id;const q=$('qty-'+id).value;add(id,q);$('msg-'+id).textContent='Added to cart ✓';btn.textContent='Added ✓';setTimeout(()=>{btn.textContent='Add to cart +'},1300)});}
  function renderCart(){const mount=$('cart-lines');if(!mount)return;const lines=entries();const empty=$('empty-cart');const actions=$('cart-actions');if(lines.length===0){mount.innerHTML='';empty.hidden=false;actions.hidden=true;}else{empty.hidden=true;actions.hidden=false;mount.innerHTML=lines.map(p=>`<article class="cart-line"><div class="vial cart-vial" role="img" aria-label="Illustration of a clear glass Vital House vial, VITAL HOUSE, RESEARCH"><img class="vial-shell" src="vial-shell.svg" alt="" aria-hidden="true"/><img class="vial-mark" src="vital-house-logo-display.png" alt="" aria-hidden="true"/><span class="vial-product">VITAL HOUSE</span><span class="vial-dose">RESEARCH</span></div><div><div class="line-title">${safe(p.name)}</div><div class="line-dose">${safe(p.dose)}</div></div><div class="line-controls" aria-label="Quantity of ${safe(p.name)}"><button type="button" data-act="minus" data-id="${p.id}" aria-label="Decrease ${safe(p.name)}">−</button><output>${p.qty}</output><button type="button" data-act="plus" data-id="${p.id}" aria-label="Increase ${safe(p.name)}">+</button></div><div class="line-total">${money(p.price*.75*p.qty)}</div><button class="remove" type="button" data-act="remove" data-id="${p.id}" aria-label="Remove ${safe(p.name)}">×</button></article>`).join('');}
    updateTotals();
  }
  function updateTotals(){const selectedCounty=$('tax-county')?.value||'Clark';const rate=countyRates[selectedCounty]??.08375;const t=totals(rate);for(const [id,value] of Object.entries({'original-total':t.original,'savings-total':t.savings,'discounted-total':t.discounted,'tax-total':t.tax,'grand-total':t.total})){if($(id))$(id).textContent=(id==='savings-total'?'-':'')+money(value);}if($('tax-rate-label'))$('tax-rate-label').textContent=(rate*100).toFixed(rate===.08375?3:rate===.08265?3:rate===.07725?3:2)+'%';const submit=$('submit-inquiry');if(submit)submit.disabled=entries().length===0;}
  function initCart(){if(!$('cart-lines'))return;const sel=$('tax-county');if(sel){sel.innerHTML=Object.entries(countyRates).sort((a,b)=>a[0].localeCompare(b[0])).map(([name,rate])=>`<option value="${name}" ${name==='Clark'?'selected':''}>${name==='Carson City'?'Carson City':name+' County'} — ${(rate*100).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')}%</option>`).join('');sel.addEventListener('change',updateTotals);}
   $('cart-lines').addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b)return;const qty=cart[b.dataset.id]||0;setQty(b.dataset.id,b.dataset.act==='plus'?qty+1:b.dataset.act==='minus'?qty-1:0);});
   $('clear-cart').addEventListener('click',()=>{cart={};saveCart();renderCart();});
   const form=$('inquiry-form');form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity()||!entries().length)return;const body=makeEmail();const mailto='mailto:vitalhouseresearch@gmail.com?subject='+encodeURIComponent('Vital House - Research Availability Inquiry')+'&body='+encodeURIComponent(body);$('inquiry-status').classList.add('visible');$('inquiry-status').textContent='Your email app should open with the inquiry prepared. You must press Send in your email app; nothing has been submitted automatically.';window.location.href=mailto;});
   $('copy-inquiry').addEventListener('click',async()=>{if(!form.reportValidity()||!entries().length)return;const body=makeEmail();try{await navigator.clipboard.writeText('To: vitalhouseresearch@gmail.com\nSubject: Vital House - Research Availability Inquiry\n\n'+body);$('inquiry-status').classList.add('visible');$('inquiry-status').textContent='Copied. Paste the inquiry into an email addressed to vitalhouseresearch@gmail.com and send it.';}catch{const status=$('inquiry-status');status.classList.add('visible');status.textContent='Automatic copying was unavailable. Use the Send Inquiry button to open your email program.';}});
   renderCart();
  }
  function makeEmail(){const f=$('inquiry-form');const county=$('tax-county').value;const rate=countyRates[county];const t=totals(rate);const lines=entries();return [
    'VITAL HOUSE — NONBINDING RESEARCH PRODUCT INQUIRY',
    'This is a request for availability and information, NOT a purchase, order acceptance, payment agreement, or commitment.',
    '', 'CONTACT',
    'Name: '+f.elements.fullName.value.trim(),
    'Email: '+f.elements.email.value.trim(),
    'Phone: '+f.elements.phone.value.trim(),
    'Organization (optional): '+(f.elements.organization.value.trim()||'Not provided'),
    'Nevada destination county: '+county,
    '', 'PRODUCTS',
    ...lines.map(p=>`${p.name} (${p.dose}) × ${p.qty} | Original: ${money(p.price*p.qty)} | 25%-off estimate: ${money(p.price*.75*p.qty)}`),
    '', 'ESTIMATE (NO PAYMENT REQUESTED)',
    'Original subtotal: '+money(t.original),
    'Grand-opening discount (25%): -'+money(t.savings),
    'Discounted subtotal: '+money(t.discounted),
    'Estimated Nevada sales tax ('+county+', '+(rate*100).toFixed(3)+'%): '+money(t.tax),
    'ESTIMATED TOTAL: '+money(t.total),
    'Shipping or additional charges, if applicable, are not included. All pricing, taxability, eligibility and availability subject to review.',
    '', 'ADDITIONAL QUESTIONS / MESSAGE',f.elements.message.value.trim()||'(None)',
    '', 'Customer acknowledged that this inquiry is nonbinding and that no transaction or payment has been initiated.',
    'Contact details are provided only for responding to this inquiry, not for sale or unsolicited marketing.'
  ].join('\n');}
  function initMenu(){const toggle=$('menu-toggle'),nav=$('main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}}
  document.addEventListener('DOMContentLoaded',()=>{initMenu();updateCount();renderCatalog();renderShop();initCart();});
  return {products,add,totals};
})();
