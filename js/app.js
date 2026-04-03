
// Centralized Data Object (Simulating DB)
// UPDATED: Now referencing local images inside the assets/images folder
const db = {
    products: [
        { id: 1, name: 'Sorghum Beer Cartons (Conical)', category: 'Liquid Packaging', stock: 125000, price: 'MK 150', img: 'assets/images/sorghum-beer-conical-carton.jpg' },
        { id: 2, name: 'Export Tobacco Cases', category: 'Corrugated', stock: 5000, price: 'MK 2,500', img: 'assets/images/tobacco-export-cases-stacked.jpg' },
        { id: 3, name: 'Standard RSC Box (A4)', category: 'Corrugated', stock: 800, price: 'MK 850', img: 'assets/images/industrial-corrugated-boxes.jpg' },
        { id: 4, name: 'Pure-Pak Milk Cartons', category: 'Liquid Packaging', stock: 45000, price: 'MK 120', img: 'assets/images/liquid-packaging-dairy.jpg' }
    ],
    orders: [
        { id: 'ORD-2026-001', client: 'Chibuku Products Ltd', item: 'Sorghum Beer Cartons', qty: 50000, status: 'In Production', date: '2026-04-01' },
        { id: 'ORD-2026-002', client: 'Malawi Leaf Ltd', item: 'Export Tobacco Cases', qty: 2000, status: 'Dispatched', date: '2026-03-28' }
    ],
    invoices: [
        { id: 'INV-2026-089', client: 'Malawi Leaf Ltd', amount: 'MK 5,000,000', status: 'Pending' },
        { id: 'INV-2026-088', client: 'Chibuku Products Ltd', amount: 'MK 7,500,000', status: 'Paid' }
    ]
};

// Functions to Render Data
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    db.products.forEach(p => {
        // Fallback alt text in case the image isn't placed yet
        grid.innerHTML += `
            <div class="acrylic product-card">
                <img src="${p.img}" alt="${p.name} Image Needed" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22200%22%20fill%3D%22%23cccccc%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23666666%22%20font-size%3D%2214px%22%20font-family%3D%22sans-serif%22%3EImage:%20${p.img.split('/').pop()}%3C%2Ftext%3E%3C%2Fsvg%3E';">
                <div class="product-info">
                    <span class="badge ${p.stock > 10000 ? 'success' : 'warning'}">${p.category}</span>
                    <h3 style="margin: 10px 0;">${p.name}</h3>
                    <p style="color: #666;">Stock: ${p.stock.toLocaleString()} units</p>
                    <p style="font-weight: bold; margin-top: 10px;">${p.price} / unit</p>
                    <button class="btn" style="width: 100%; margin-top: 15px;" onclick="alert('Added to Quote Request')">Request Quote</button>
                </div>
            </div>
        `;
    });
}

function renderDashboard() {
    const orderBody = document.getElementById('order-table-body');
    const invoiceBody = document.getElementById('invoice-table-body');
    if (!orderBody || !invoiceBody) return;

    db.orders.forEach(o => {
        orderBody.innerHTML += `<tr><td>${o.id}</td><td>${o.client}</td><td>${o.item}</td><td>${o.qty.toLocaleString()}</td><td><span class="badge ${o.status === 'Dispatched' ? 'success' : 'warning'}">${o.status}</span></td></tr>`;
    });

    db.invoices.forEach(i => {
        invoiceBody.innerHTML += `<tr><td>${i.id}</td><td>${i.client}</td><td>${i.amount}</td><td><span class="badge ${i.status === 'Paid' ? 'success' : 'danger'}">${i.status}</span></td><td>${i.status === 'Pending' ? '<button class="btn" style="padding: 5px 10px; font-size: 0.9rem;" onclick="processPayment()">Pay with Mobile Money</button>' : '<button class="btn" style="background: #6c757d; padding: 5px 10px; font-size: 0.9rem;">Download Receipt</button>'}</td></tr>`;
    });
}

function processPayment() {
    alert("Initiating secure payment via PayChangu/TNM Mpamba API (Demo Mode)");
}

function generateQuote() {
    const item = document.getElementById('quote-item').value;
    const qty = document.getElementById('quote-qty').value;
    alert(`Generating official PDF quote for ${qty} units of ${item}.\n\nIn a live environment, this downloads a branded PDF.`);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderDashboard();
});
