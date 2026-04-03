
'use strict';

/* ═══════════════════════════════════════════════
   CENTRALISED DATA STORE  (replaces DB in demo)
═══════════════════════════════════════════════ */
const NampakDB = {
  products: [
    {id:1, name:'Conical Sorghum Carton 250ml', cat:'Liquid Packaging', price:150,  stock:180000, unit:'units', img:'assets/images/sorghum-beer-conical-carton.jpg'},
    {id:2, name:'Conical Sorghum Carton 500ml', cat:'Liquid Packaging', price:210,  stock:95000,  unit:'units', img:'assets/images/sorghum-beer-conical-carton.jpg'},
    {id:3, name:'Conical Sorghum Carton 1L',    cat:'Liquid Packaging', price:290,  stock:62000,  unit:'units', img:'assets/images/sorghum-beer-conical-carton.jpg'},
    {id:4, name:'Pure-Pak Milk Carton 250ml',   cat:'Liquid Packaging', price:125,  stock:140000, unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:5, name:'Pure-Pak Milk Carton 500ml',   cat:'Liquid Packaging', price:175,  stock:110000, unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:6, name:'Pure-Pak Milk Carton 1L',      cat:'Liquid Packaging', price:245,  stock:90000,  unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:7, name:'Juice Carton 200ml',           cat:'Liquid Packaging', price:110,  stock:75000,  unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:8, name:'Juice Carton 1L',              cat:'Liquid Packaging', price:230,  stock:55000,  unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:9, name:'Water Packaging Carton 500ml', cat:'Liquid Packaging', price:98,   stock:200000, unit:'units', img:'assets/images/liquid-packaging-dairy.jpg'},
    {id:10,name:'Export Tobacco Case Standard', cat:'Corrugated',       price:2500, stock:8000,   unit:'cases', img:'assets/images/tobacco-export-cases-stacked.jpg'},
    {id:11,name:'Export Tobacco Case Heavy Duty',cat:'Corrugated',      price:3200, stock:5200,   unit:'cases', img:'assets/images/tobacco-export-cases-stacked.jpg'},
    {id:12,name:'Export Tobacco Case Jumbo',    cat:'Corrugated',       price:4100, stock:3000,   unit:'cases', img:'assets/images/tobacco-export-cases-stacked.jpg'},
    {id:13,name:'RSC Box Small (A4)',           cat:'Corrugated',       price:850,  stock:12000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:14,name:'RSC Box Medium',               cat:'Corrugated',       price:1100, stock:9500,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:15,name:'RSC Box Large',                cat:'Corrugated',       price:1450, stock:7200,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:16,name:'Die-Cut Display Box',          cat:'Corrugated',       price:1800, stock:4000,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:17,name:'Printed Corrugated Carton',    cat:'Corrugated',       price:1650, stock:6500,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:18,name:'Agricultural Produce Box',     cat:'Agricultural',     price:950,  stock:22000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:19,name:'Maize Flour Box 25kg',         cat:'Agricultural',     price:1200, stock:18000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:20,name:'Rice Packaging Carton 10kg',   cat:'Agricultural',     price:1050, stock:15000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:21,name:'Tea Packaging Case',           cat:'Agricultural',     price:1350, stock:11000,  unit:'units', img:'assets/images/tobacco-export-cases-stacked.jpg'},
    {id:22,name:'Sugar Packaging Box',          cat:'Agricultural',     price:900,  stock:25000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:23,name:'Fruit & Vegetable Tray',       cat:'Agricultural',     price:780,  stock:30000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:24,name:'Specialty Beverage Carton',    cat:'Liquid Packaging', price:310,  stock:40000,  unit:'units', img:'assets/images/sorghum-beer-conical-carton.jpg'},
    {id:25,name:'FMCG Display Box Printed',     cat:'Corrugated',       price:2100, stock:5500,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:26,name:'Pharmaceutical Packaging Box', cat:'Specialty',        price:2800, stock:3500,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:27,name:'Industrial Transit Case',      cat:'Specialty',        price:3600, stock:2000,   unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:28,name:'Multi-wall Paper Sack 50kg',   cat:'Specialty',        price:650,  stock:50000,  unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:29,name:'Point-of-Sale Stand Corrugated',cat:'Specialty',       price:5500, stock:800,    unit:'units', img:'assets/images/industrial-corrugated-boxes.jpg'},
    {id:30,name:'Custom Printed Export Carton', cat:'Corrugated',       price:2200, stock:4500,   unit:'units', img:'assets/images/tobacco-export-cases-stacked.jpg'},
  ],

  orders: [
    {id:'ORD-2026-041',client:'Chibuku Products Ltd',item:'Conical Sorghum Carton 500ml',qty:200000,status:'In Production',date:'2026-04-01'},
    {id:'ORD-2026-040',client:'Lilongwe Dairy',item:'Pure-Pak Milk Carton 1L',qty:50000,status:'Dispatched',date:'2026-03-29'},
    {id:'ORD-2026-039',client:'Malawi Leaf Tobacco Ltd',item:'Export Tobacco Case Heavy Duty',qty:3000,status:'Completed',date:'2026-03-22'},
    {id:'ORD-2026-038',client:'National Food Reserve',item:'Maize Flour Box 25kg',qty:80000,status:'In Production',date:'2026-04-02'},
    {id:'ORD-2026-037',client:'AgriFarms Ltd',item:'Agricultural Produce Box',qty:15000,status:'Pending Approval',date:'2026-04-03'},
  ],

  invoices: [
    {id:'INV-2026-189',client:'Chibuku Products Ltd',amount:42000000,status:'Pending',due:'2026-04-15'},
    {id:'INV-2026-188',client:'Malawi Leaf Tobacco Ltd',amount:9600000,status:'Paid',due:'2026-03-30'},
    {id:'INV-2026-187',client:'Lilongwe Dairy',amount:12250000,status:'Overdue',due:'2026-03-20'},
    {id:'INV-2026-186',client:'National Food Reserve',amount:96000000,status:'Paid',due:'2026-03-10'},
    {id:'INV-2026-185',client:'AgriFarms Ltd',amount:14250000,status:'Pending',due:'2026-04-20'},
  ],

  inventory: [
    {cat:'Liquid Packaging',items:9,totalStock:847000,low:false},
    {cat:'Corrugated',items:11,totalStock:87700,low:true},
    {cat:'Agricultural',items:6,totalStock:131000,low:false},
    {cat:'Specialty',items:4,totalStock:56300,low:true},
  ],
};

/* ═══ HELPERS ═══ */
function fmt(n){return Number(n).toLocaleString('en-MW')}
function fmtMK(n){return 'MK '+fmt(n)}
function imgWithFallback(src,alt){
  const encoded = encodeURIComponent(alt);
  const fallback = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect width='400' height='200' fill='%23dce3ec'/%3E%3Ctext x='200' y='100' text-anchor='middle' dominant-baseline='middle' font-family='Segoe UI,sans-serif' font-size='13' fill='%23555'%3E${encoded}%3C/text%3E%3C/svg%3E`;
  return `<img src="${src}" alt="${alt}" onerror="this.onerror=null;this.src='${fallback}'">`;
}

/* ═══ PRODUCT CATALOGUE ═══ */
function renderProducts(filterCat='', filterText=''){
  const grid = document.getElementById('product-grid');
  if(!grid) return;
  const list = NampakDB.products.filter(p=>{
    const matchCat = !filterCat || p.cat === filterCat;
    const matchTxt = !filterText || p.name.toLowerCase().includes(filterText.toLowerCase());
    return matchCat && matchTxt;
  });
  grid.innerHTML = list.map(p=>`
    <div class="acrylic product-card">
      ${imgWithFallback(p.img, p.name)}
      <div class="card-body">
        <span class="badge badge-info">${p.cat}</span>
        <h3>${p.name}</h3>
        <div class="price">${fmtMK(p.price)} / ${p.unit}</div>
        <div class="stock">Stock: ${fmt(p.stock)} ${p.unit}</div>
        <button class="btn btn-primary" style="width:100%;margin-top:14px" onclick="addToQuote(${p.id})">Request Quote</button>
      </div>
    </div>`).join('');
}

/* ═══ ERP DASHBOARD ═══ */
function renderDashboard(){
  renderKPIs();
  renderOrders();
  renderInvoices();
  renderInventory();
  renderChart();
}

function renderKPIs(){
  const totalPending = NampakDB.invoices.filter(i=>i.status==='Pending'||i.status==='Overdue').reduce((a,b)=>a+b.amount,0);
  const totalRevenue = NampakDB.invoices.filter(i=>i.status==='Paid').reduce((a,b)=>a+b.amount,0);
  const activeJobs   = NampakDB.orders.filter(o=>o.status==='In Production').length;
  const overdue      = NampakDB.invoices.filter(i=>i.status==='Overdue').length;
  document.getElementById('kpi-revenue') && (document.getElementById('kpi-revenue').textContent = fmtMK(totalRevenue));
  document.getElementById('kpi-pending') && (document.getElementById('kpi-pending').textContent = fmtMK(totalPending));
  document.getElementById('kpi-jobs')    && (document.getElementById('kpi-jobs').textContent    = activeJobs + ' Jobs');
  document.getElementById('kpi-overdue') && (document.getElementById('kpi-overdue').textContent  = overdue + ' Invoice(s)');
}

function renderOrders(){
  const tbody = document.getElementById('order-tbody');
  if(!tbody) return;
  tbody.innerHTML = NampakDB.orders.map(o=>{
    const cls = o.status==='Completed'?'success':o.status==='Dispatched'?'info':o.status==='In Production'?'warning':'danger';
    return `<tr><td>${o.id}</td><td>${o.client}</td><td>${o.item}</td><td>${fmt(o.qty)}</td><td>${o.date}</td><td><span class="badge badge-${cls}">${o.status}</span></td></tr>`;
  }).join('');
}

function renderInvoices(){
  const tbody = document.getElementById('invoice-tbody');
  if(!tbody) return;
  tbody.innerHTML = NampakDB.invoices.map(i=>{
    const cls = i.status==='Paid'?'success':i.status==='Pending'?'warning':'danger';
    const action = i.status!=='Paid'
      ? `<button class="btn btn-primary" style="padding:5px 12px;font-size:.82rem" onclick="payInvoice('${i.id}')">Pay Now</button>`
      : `<button class="btn" style="background:#6b7280;color:#fff;padding:5px 12px;font-size:.82rem" onclick="downloadReceipt('${i.id}')">Receipt</button>`;
    return `<tr><td>${i.id}</td><td>${i.client}</td><td>${fmtMK(i.amount)}</td><td>${i.due}</td><td><span class="badge badge-${cls}">${i.status}</span></td><td>${action}</td></tr>`;
  }).join('');
}

function renderInventory(){
  const tbody = document.getElementById('inv-tbody');
  if(!tbody) return;
  tbody.innerHTML = NampakDB.inventory.map(r=>`
    <tr>
      <td>${r.cat}</td><td>${r.items}</td><td>${fmt(r.totalStock)}</td>
      <td><span class="badge badge-${r.low?'danger':'success'}">${r.low?'LOW STOCK':'OK'}</span></td>
    </tr>`).join('');
}

function renderChart(){
  const canvas = document.getElementById('sales-chart');
  if(!canvas) return;
  if(typeof Chart === 'undefined'){setTimeout(renderChart,500);return;}
  new Chart(canvas.getContext('2d'),{
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr'],
      datasets:[
        {label:'Liquid Packaging (000 units)',data:[320,285,410,380],borderColor:'#0078D4',backgroundColor:'rgba(0,120,212,.1)',fill:true,tension:.4},
        {label:'Corrugated (000 units)',data:[95,112,88,130],borderColor:'#10b981',backgroundColor:'rgba(16,185,129,.1)',fill:true,tension:.4},
      ]
    },
    options:{responsive:true,plugins:{legend:{position:'bottom'}},scales:{y:{beginAtZero:true}}}
  });
}

/* ═══ QUOTATION ENGINE ═══ */
let quoteItems = [];
function addToQuote(id){
  const p = NampakDB.products.find(x=>x.id===id);
  if(!p){return;}
  const existing = quoteItems.find(x=>x.id===id);
  if(existing){existing.qty+=1;}else{quoteItems.push({...p,qty:1});}
  alert(`✔ "${p.name}" added to your quote request.`);
}

function generateQuote(){
  const product = document.getElementById('q-product');
  const qty     = parseInt(document.getElementById('q-qty').value)||0;
  const client  = document.getElementById('q-client').value;
  if(!product||!qty||!client){alert('Please fill in all fields.');return;}
  const p = NampakDB.products.find(x=>x.name===product.value);
  if(!p) return;
  const total   = p.price * qty;
  const vat     = total * 0.165;
  const grandTotal = total + vat;
  alert(`═══ OFFICIAL QUOTATION ═══\nClient: ${client}\nProduct: ${p.name}\nQty: ${fmt(qty)} ${p.unit}\nUnit Price: ${fmtMK(p.price)}\nSubtotal: ${fmtMK(total)}\nVAT (16.5%): ${fmtMK(Math.round(vat))}\nGRAND TOTAL: ${fmtMK(Math.round(grandTotal))}\n\n[In live environment: downloads branded PDF]`);
}

function payInvoice(id){
  const inv = NampakDB.invoices.find(i=>i.id===id);
  if(!inv) return;
  const method = prompt(`Pay ${fmtMK(inv.amount)}\nSelect method:\n1. Airtel Money\n2. TNM Mpamba\n3. Bank Transfer\n(Type 1, 2, or 3)`,'1');
  const methods = {'1':'Airtel Money','2':'TNM Mpamba','3':'Bank Transfer'};
  if(method && methods[method]){
    inv.status='Paid';
    renderInvoices();
    alert(`✔ Payment of ${fmtMK(inv.amount)} via ${methods[method]} confirmed.\nReceipt: REC-${Date.now()}`);
  }
}

function downloadReceipt(id){alert(`Downloading receipt for ${id}...\n[In live environment: generates PDF receipt]`);}

/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded',()=>{
  renderProducts();
  renderDashboard();

  // Product search & filter
  const searchInput  = document.getElementById('search-input');
  const catFilter    = document.getElementById('cat-filter');
  if(searchInput) searchInput.addEventListener('input',()=>renderProducts(catFilter?.value,searchInput.value));
  if(catFilter)   catFilter.addEventListener('change',()=>renderProducts(catFilter.value,searchInput?.value));

  // Populate quotation product dropdown
  const qProduct = document.getElementById('q-product');
  if(qProduct){
    NampakDB.products.forEach(p=>{
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.textContent = p.name;
      qProduct.appendChild(opt);
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
});
