/* ==========================================================================
   DULCE PASIÓN - REPOSTERÍA ARTESANAL
   Lógica JavaScript Principal | Tienda Virtual
   Proyecto: Herramientas Digitales - Noviembre 2026
   ========================================================================== */

// --- Base de Datos de Productos de la Repostería ---
const PRODUCTS_DATA = [
  // --- Categoría 1: Tortas Tradicionales ---
  {
    id: 'torta-milhojas',
    category: 'tradicionales',
    categoryName: 'Tortas Tradicionales ⭐',
    badge: 'La Más Pedida',
    badgeClass: 'badge-gold',
    name: 'Torta Milhojas Manjar Nuez',
    portions: '15 a 20 porciones',
    prepTime: '24 hrs anticipación',
    price: 28000,
    shortDesc: 'Capas finas de masa hojarasca crujiente artesanal, abundante manjar de campo casero y nueces chilenas tostadas seleccionadas.',
    ingredients: 'Harina de trigo seleccionada, manjar artesanal de campo, nueces tostadas, mantequilla natural y toque de azúcar flor.',
    allergens: 'Contiene gluten, derivados lácteos y frutos secos (nueces).',
    image: 'assets/images/torta-milhojas.png',
    popular: true
  },
  {
    id: 'selva-negra',
    category: 'tradicionales',
    categoryName: 'Tortas Tradicionales ⭐',
    badge: 'Receta Tradicional',
    badgeClass: 'badge-rose',
    name: 'Selva Negra Clásica',
    portions: '20 porciones',
    prepTime: '24 hrs anticipación',
    price: 26500,
    shortDesc: 'Bizcocho húmedo de chocolate cacao amargo premium, relleno con abundante crema chantilly natural y cerezas maceradas.',
    ingredients: 'Cacao puro 100%, crema fresca batida, cerezas al licor artesanal suave, bizcocho de vainilla y virutas de chocolate negro.',
    allergens: 'Contiene gluten, huevo y leche.',
    image: 'assets/images/torta-selva-negra.png',
    popular: true
  },
  {
    id: 'tres-leches',
    category: 'tradicionales',
    categoryName: 'Tortas Tradicionales ⭐',
    badge: 'Infaltable en la Once',
    badgeClass: 'badge-gold',
    name: 'Torta Tres Leches Tradicional',
    portions: '15 a 18 porciones',
    prepTime: '24 hrs anticipación',
    price: 25500,
    shortDesc: 'Bizcocho esponjoso empapado en nuestra exclusiva mezcla de tres leches (evaporada, condensada y crema), cubierto de merengue dorado suave.',
    ingredients: 'Bizcocho artesanal, leche condensada, leche evaporada, crema de leche de vaca, merengue italiano y canela suave.',
    allergens: 'Contiene gluten, leche y huevo.',
    image: 'assets/images/torta-tres-leches.png',
    popular: false
  },
  {
    id: 'panqueque-trufa',
    category: 'tradicionales',
    categoryName: 'Tortas Tradicionales ⭐',
    badge: 'Chocolate Intenso',
    badgeClass: 'badge-rose',
    name: 'Torta Panqueque Trufa',
    portions: '15 a 18 porciones',
    prepTime: '24 hrs anticipación',
    price: 27500,
    shortDesc: 'Delicadas láminas de fino panqueque de vainilla y naranja, intercaladas con suave trufa de chocolate belga semi-amargo.',
    ingredients: 'Panqueques artesanales horneados lámina a lámina, trufa de chocolate 60% cacao, licor de naranja suave y cobertura de ganache.',
    allergens: 'Contiene gluten, huevo y leche.',
    image: 'assets/images/torta-panqueque-trufa.jpg',
    popular: true
  },
  {
    id: 'torta-personalizada',
    category: 'tradicionales',
    categoryName: 'Tortas Tradicionales ⭐',
    badge: 'Personalizable',
    badgeClass: 'badge-gold',
    name: 'Torta Temática Personalizada',
    portions: '20 a 25 porciones',
    prepTime: '48 hrs anticipación',
    price: 35000,
    shortDesc: 'Diseño a elección para cumpleaños, aniversarios y celebraciones familiares en San Bernardo con dedicatoria y decoración especial.',
    ingredients: 'Sabor a elección (bizcocho o panqueque), rellenos a convenir (manjar, frambuesa, chocolate, trufa) y decorado en buttercream o fondant.',
    allergens: 'Consultar según diseño y sabor elegido.',
    image: 'assets/images/torta-personalizada.jpg',
    popular: false
  },

  // --- Categoría 2: Cupcakes y Minipasteles ---
  {
    id: 'cupcakes-surtidos-6',
    category: 'cupcakes',
    categoryName: 'Cupcakes y Minipasteles 🧁',
    badge: 'Pack x6 Unidades',
    badgeClass: 'badge-rose',
    name: 'Caja Variada Surtida de Cupcakes',
    portions: '6 unidades surtidas',
    prepTime: 'Mismo día / Inmediato',
    price: 10500,
    shortDesc: 'Perfecta para regalar o compartir en la oficina y en la once. Incluye sabores: manjar nuez, frutos del bosque, chocolate fudge y vainilla francesa.',
    ingredients: 'Mantequilla, huevos frescos de campo, harinas finas, cacao y buttercream artesanal de variados sabores.',
    allergens: 'Contiene gluten, huevo y leche.',
    image: 'assets/images/cupcakes-surtidos.webp',
    popular: true
  },
  {
    id: 'cupcakes-red-velvet-12',
    category: 'cupcakes',
    categoryName: 'Cupcakes y Minipasteles 🧁',
    badge: 'Pack x12 Gourmet',
    badgeClass: 'badge-gold',
    name: 'Caja Gourmet Red Velvet (12 un)',
    portions: '12 unidades gourmet',
    prepTime: '24 hrs anticipación',
    price: 19000,
    shortDesc: 'Mini ponqués con el inconfundible color rojo terciopelo, textura ultra suave con sutil toque de cacao y coronados con frosting de queso crema.',
    ingredients: 'Harina de repostería, buttermilk, cacao suave, extracto natural de vainilla y frosting de queso crema Philadelphia.',
    allergens: 'Contiene gluten, huevo y leche.',
    image: 'assets/images/cupcakes-red-velvet.jpg',
    popular: true
  },
  {
    id: 'cheesecake-frutos-rojos',
    category: 'cupcakes',
    categoryName: 'Cupcakes y Minipasteles 🧁',
    badge: 'Porción Individual',
    badgeClass: 'badge-rose',
    name: 'Minipastel Cheesecake Frutos Rojos',
    portions: '1 porción generosa',
    prepTime: 'Entrega en el día',
    price: 3800,
    shortDesc: 'Cheesecake horneado a baño María sobre base crocante de galletas artesanas, cubierto con mermelada casera de arándanos, frambuesas y moras.',
    ingredients: 'Queso crema de alta calidad, galletas artesanales de avena y mantequilla, azúcar rubia y coulis de frutos del bosque.',
    allergens: 'Contiene derivados lácteos y gluten.',
    image: 'assets/images/cheesecake-frutos-rojos.jpg',
    popular: false
  },

  // --- Categoría 3: Opciones Saludables e Inclusivas ---
  {
    id: 'torta-vegana-choco',
    category: 'inclusivas',
    categoryName: 'Línea Inclusiva & Saludable 🌿',
    badge: '100% Vegana',
    badgeClass: 'badge-mint',
    name: 'Torta Vegana Choco-Frambuesa',
    portions: '12 a 15 porciones',
    prepTime: '24 hrs anticipación',
    price: 29900,
    shortDesc: 'Elaborada completamente a base de plantas, 100% libre de lácteos y huevos. Bizcocho húmedo de cacao con coulis de frambuesas frescas naturales.',
    ingredients: 'Harina integral orgánica, cacao puro sin aditivos, leche de almendras casera, aceite de coco virgen y frambuesas naturales del sur.',
    allergens: 'Apto para veganos y alérgicos a la proteína de leche de vaca (APLV). Contiene frutos secos (almendra).',
    image: 'assets/images/torta-vegana-choco.jpg',
    popular: true
  },
  {
    id: 'torta-sin-azucar',
    category: 'inclusivas',
    categoryName: 'Línea Inclusiva & Saludable 🌿',
    badge: 'Sin Azúcar Añadida',
    badgeClass: 'badge-mint',
    name: 'Torta Sin Azúcar Frutos Rojos',
    portions: '15 porciones',
    prepTime: '24 hrs anticipación',
    price: 31000,
    shortDesc: 'Endulzada 100% con alulosa y estevia pura. Bizcocho de vainilla liviano relleno de crema chantilly light y abundantes frutos rojos frescos.',
    ingredients: 'Harina de trigo fina, alulosa pura, estevia grado repostería, crema vegetal liviana sin azúcar y frutos del bosque frescos.',
    allergens: 'Apta para personas que controlan el azúcar o diabetes. Contiene gluten y leche.',
    image: 'assets/images/torta-sin-azucar.jpg',
    popular: true
  },
  {
    id: 'especialidad-sin-gluten',
    category: 'inclusivas',
    categoryName: 'Línea Inclusiva & Saludable 🌿',
    badge: 'Sin Gluten (Gluten-Free)',
    badgeClass: 'badge-mint',
    name: 'Postre Individual Sin Gluten Certificado',
    portions: '1 porción individual',
    prepTime: 'Envasado seguro',
    price: 4500,
    shortDesc: 'Delicioso minipastel elaborado en área aislada con harinas alternativas certificadas (arroz, mandioca y maíz) para celíacos.',
    ingredients: 'Mix de harinas sin gluten certificadas, manjar artesanal sin gluten ni lactosa, mantequilla clarificada y nueces.',
    allergens: '100% Libre de Gluten / Apto Celíacos. Contiene leche y huevo.',
    image: 'assets/images/postre-sin-gluten.jpg',
    popular: false
  }
];

// --- Estado de la Aplicación ---
let cart = JSON.parse(localStorage.getItem('dulce_pasion_cart')) || [];
let registeredUser = JSON.parse(localStorage.getItem('dulce_pasion_user')) || null;
let clientsList = JSON.parse(localStorage.getItem('dulce_pasion_clients_list')) || [
  {
    id: 'cli_1',
    nombre: 'Francisco López',
    celular: '+56 9 8452 1190',
    email: 'francisco.lopez@gmail.com',
    comuna: 'San Bernardo',
    fecha: '20/11/2026, 17:30'
  },
  {
    id: 'cli_2',
    nombre: 'Valentina Morales',
    celular: '+56 9 9341 5521',
    email: 'vale.morales.sb@gmail.com',
    comuna: 'San Bernardo',
    fecha: '21/11/2026, 11:15'
  },
  {
    id: 'cli_3',
    nombre: 'Camila Sepúlveda',
    celular: '+56 9 7622 8904',
    email: 'camilasepulveda@hotmail.com',
    comuna: 'San Bernardo',
    fecha: '21/11/2026, 19:40'
  }
];
let appliedDiscount = 0; // Porcentaje de descuento (0 a 1)
let appliedCouponCode = '';
let currentFilter = 'todas';
let searchTerm = '';
let sortBy = 'default';

// ==========================================================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initVisitasCounter();
  renderProducts();
  updateCartUI();
  setupFilterTabs();
  setupSearchAndSort();
  setupRegistrationForm();
  if (isAdminAuthenticated) {
    renderAdminDatabase();
  }
  setupContactForm();
  setupDeliveryChecker();
  checkLoggedInUser();
});

// --- Contador de Visitas Persistente (Requerimiento 3.2.4) ---
function initVisitasCounter() {
  let visitas = parseInt(localStorage.getItem('dulce_pasion_visitas')) || 1284;
  visitas += 1;
  localStorage.setItem('dulce_pasion_visitas', visitas);

  const visitasEl = document.getElementById('visitasCount');
  if (visitasEl) {
    animateValue(visitasEl, visitas - 25, visitas, 1200);
  }
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('es-CL');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// ==========================================================================
// RENDERIZADO DEL CATÁLOGO DE PRODUCTOS
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  let filtered = PRODUCTS_DATA.filter(prod => {
    const matchCategory = (currentFilter === 'todas') || (prod.category === currentFilter);
    const matchSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        prod.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        prod.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Ordenamiento
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'popular') {
    filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
        <p style="font-size: 2.5rem; margin-bottom: 10px;">🍰🔍</p>
        <h3 style="color: var(--color-primary-dark); margin-bottom: 8px;">No encontramos delicias con esos términos</h3>
        <p style="color: var(--color-text-muted);">Prueba con otra palabra o selecciona "Todas las Delicias".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => `
    <article class="product-card" data-category="${prod.category}">
      <div class="product-image-wrap">
        <span class="badge ${prod.badgeClass} product-tag-badge">${prod.badge}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="product-content">
        <span class="product-category-sub">${prod.categoryName}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-description">${prod.shortDesc}</p>
        
        <div class="product-meta-specs">
          <span>👥 ${prod.portions}</span>
          <span>⏱️ ${prod.prepTime}</span>
        </div>

        <div class="product-footer-row">
          <div class="product-price-block">
            <span class="product-price-label">Precio</span>
            <span class="product-price-amount">$${prod.price.toLocaleString('es-CL')}</span>
          </div>
          <div class="product-action-buttons">
            <button class="btn btn-secondary btn-sm" onclick="openProductDetailModal('${prod.id}')" title="Ver ingredientes y alérgenos">
              Detalles
            </button>
            <button class="btn btn-primary btn-sm" onclick="addToCart('${prod.id}')" title="Añadir a mi pedido">
              + Agregar
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// --- Filtros por Pestañas ---
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.catalog-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter');
      renderProducts();
    });
  });
}

// --- Búsqueda y Ordenamiento ---
function setupSearchAndSort() {
  const searchInput = document.getElementById('catalogSearchInput');
  const sortSelect = document.getElementById('catalogSortSelect');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderProducts();
    });
  }
}

// ==========================================================================
// GESTIÓN DEL CARRITO DE COMPRAS INTERACTIVO
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`¡"${product.name}" agregado al carrito! 🍰`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Producto eliminado del carrito');
}

function saveCart() {
  localStorage.setItem('dulce_pasion_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadgeCount');
  const itemsContainer = document.getElementById('cartDrawerItems');
  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const discountLine = document.getElementById('cartDiscountLine');
  const discountEl = document.getElementById('cartDiscountAmount');
  const shippingEl = document.getElementById('cartShippingAmount');
  const totalEl = document.getElementById('cartTotalAmount');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = 'scale(1.3)';
    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <span class="icon">🧁</span>
        <h4 style="color: var(--color-primary-dark); margin-bottom: 6px;">Tu canasta dulce está vacía</h4>
        <p style="color: var(--color-text-muted); font-size: 0.9rem;">Elige una de nuestras tortas o postres tradicionales para comenzar tu pedido.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0';
    if (shippingEl) shippingEl.textContent = '$0';
    if (totalEl) totalEl.textContent = '$0';
    if (discountLine) discountLine.style.display = 'none';
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-CL')}</div>
        <div class="cart-qty-controls">
          <button class="btn-qty" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700; min-width: 18px; text-align: center;">${item.quantity}</span>
          <button class="btn-qty" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="btn-delete-item" onclick="removeFromCart('${item.id}')" title="Eliminar">🗑️</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Costo de despacho en San Bernardo: Gratis sobre $30.000, sino $2.500
  let shipping = 2500;
  if (subtotal >= 30000 || subtotal === 0) {
    shipping = 0;
  }

  const discountVal = Math.round(subtotal * appliedDiscount);
  const finalTotal = Math.max(0, subtotal - discountVal + shipping);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-CL')}`;
  
  if (discountLine && discountEl) {
    if (discountVal > 0) {
      discountLine.style.display = 'flex';
      discountEl.textContent = `-$${discountVal.toLocaleString('es-CL')} (${appliedCouponCode})`;
    } else {
      discountLine.style.display = 'none';
    }
  }

  if (shippingEl) {
    shippingEl.textContent = shipping === 0 ? '¡GRATIS en San Bernardo!' : `$${shipping.toLocaleString('es-CL')}`;
  }

  if (totalEl) {
    totalEl.textContent = `$${finalTotal.toLocaleString('es-CL')}`;
  }
}

// Cupón de descuento
function applyCoupon() {
  const couponInput = document.getElementById('couponCodeInput');
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();
  if (code === 'DULCEPASION' || code === 'DULCEPASION10') {
    appliedDiscount = 0.10;
    appliedCouponCode = '10% OFF';
    showToast('¡Cupón del 10% de descuento aplicado con éxito! 🎉');
    updateCartUI();
  } else if (code === 'SANBERNARDO') {
    appliedDiscount = 0.15;
    appliedCouponCode = '15% VECINOS SB';
    showToast('¡15% de descuento especial vecinos de San Bernardo! 💖');
    updateCartUI();
  } else {
    showToast('Cupón no válido. Intenta con "DULCEPASION" o "SANBERNARDO"');
  }
}

// Apertura y Cierre del Carrito (Offcanvas)
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// MODAL DETALLE DE PRODUCTO (Ingredientes, Alérgenos, Porciones)
// ==========================================================================
function openProductDetailModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('productDetailContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;">
      <div>
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); height: 260px; object-fit: cover;">
        <div style="margin-top: 14px; display: flex; gap: 8px;">
          <span class="badge ${product.badgeClass}">${product.badge}</span>
          <span class="badge badge-gold">100% Artesanal</span>
        </div>
      </div>
      <div>
        <span class="product-category-sub">${product.categoryName}</span>
        <h3 style="font-size: 1.6rem; margin-bottom: 8px; color: var(--color-primary-dark);">${product.name}</h3>
        <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 14px;">${product.shortDesc}</p>
        
        <div style="background: var(--color-surface-soft); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); margin-bottom: 16px;">
          <h5 style="color: var(--color-primary); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 6px;">🌾 Ingredientes Principales:</h5>
          <p style="font-size: 0.82rem; color: var(--color-text-main); margin-bottom: 8px;">${product.ingredients}</p>
          
          <h5 style="color: #c9302c; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 4px;">⚠️ Alérgenos y Restricciones:</h5>
          <p style="font-size: 0.82rem; color: var(--color-text-muted);">${product.allergens}</p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <div style="font-size: 0.75rem; color: var(--color-text-light); text-transform: uppercase;">Porciones</div>
            <div style="font-weight: 700; color: var(--color-primary-dark); font-size: 0.95rem;">${product.portions}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--color-text-light); text-transform: uppercase;">Precio</div>
            <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 800; color: var(--color-primary);">$${product.price.toLocaleString('es-CL')}</div>
          </div>
        </div>

        <button class="btn btn-primary w-100" onclick="addToCart('${product.id}'); closeModal('productDetailModal');">
          🍰 Añadir a mi pedido ($${product.price.toLocaleString('es-CL')})
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// CHECKOUT Y CONFIRMACIÓN DE PEDIDO POR WHATSAPP O DIRECTO
// ==========================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Tu carrito está vacío. Agrega productos primero.');
    return;
  }
  toggleCartDrawer(false);

  const checkoutModal = document.getElementById('checkoutModal');
  const user = registeredUser || {};

  // Prellenar si hay usuario registrado
  document.getElementById('checkoutName').value = user.nombre || '';
  document.getElementById('checkoutPhone').value = user.celular || '';
  document.getElementById('checkoutAddress').value = user.direccion || '';
  document.getElementById('checkoutComuna').value = user.comuna || 'San Bernardo';

  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function processCheckoutOrder(e) {
  e.preventDefault();

  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const comuna = document.getElementById('checkoutComuna').value;
  const deliveryDate = document.getElementById('checkoutDate').value;
  const paymentMethod = document.getElementById('checkoutPayment').value;
  const notes = document.getElementById('checkoutNotes').value.trim();

  if (!name || !phone || !address || !deliveryDate) {
    showToast('Por favor completa los campos requeridos para el despacho.');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = (subtotal >= 30000 || comuna !== 'San Bernardo') ? 0 : 2500;
  const discountVal = Math.round(subtotal * appliedDiscount);
  const total = subtotal - discountVal + shipping;

  // Generar mensaje para WhatsApp con formato chileno
  let msg = `🍰 *NUEVO PEDIDO - DULCE PASIÓN REPOSTERÍA ARTESANAL*\n`;
  msg += `-------------------------------------------\n`;
  msg += `👤 *Cliente:* ${name}\n`;
  msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `📍 *Dirección:* ${address}, ${comuna}\n`;
  msg += `📅 *Fecha requerida:* ${deliveryDate}\n`;
  msg += `💳 *Método de Pago:* ${paymentMethod}\n`;
  if (notes) msg += `📝 *Observaciones:* ${notes}\n`;
  msg += `-------------------------------------------\n`;
  msg += `*DETALLE DEL PEDIDO:*\n`;

  cart.forEach(item => {
    msg += `• ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toLocaleString('es-CL')})\n`;
  });

  msg += `-------------------------------------------\n`;
  msg += `Subtotal: $${subtotal.toLocaleString('es-CL')}\n`;
  if (discountVal > 0) msg += `Descuento: -$${discountVal.toLocaleString('es-CL')}\n`;
  msg += `Envío (${comuna}): $${shipping.toLocaleString('es-CL')}\n`;
  msg += `*TOTAL A PAGAR: $${total.toLocaleString('es-CL')}*\n`;
  msg += `-------------------------------------------\n`;
  msg += `¡Muchas gracias por apoyar nuestra repostería artesanal en San Bernardo! ✨`;

  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/56964567422?text=${encodedMsg}`;

  // Cerrar checkout modal y limpiar carrito
  closeModal('checkoutModal');
  cart = [];
  saveCart();
  updateCartUI();

  // Abrir modal de éxito y enlace a WhatsApp
  const successModal = document.getElementById('orderSuccessModal');
  const detailsEl = document.getElementById('orderSuccessDetails');
  const waBtn = document.getElementById('orderWhatsAppBtn');

  if (detailsEl) {
    detailsEl.innerHTML = `
      <div style="background: #fdf6f0; padding: 18px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); font-size: 0.9rem; text-align: left; margin: 16px 0;">
        <p><strong>Pedido registrado para:</strong> ${name}</p>
        <p><strong>Comuna y Entrega:</strong> ${comuna} (${deliveryDate})</p>
        <p><strong>Total:</strong> $${total.toLocaleString('es-CL')} (${paymentMethod})</p>
      </div>
    `;
  }

  if (waBtn) {
    waBtn.onclick = () => {
      window.open(whatsappUrl, '_blank');
    };
  }

  if (successModal) {
    successModal.classList.add('active');
  }
}

// ==========================================================================
// REGISTRO DE CLIENTES & BASE DE DATOS EN VIVO
// ==========================================================================
function setupRegistrationForm() {
  const form = document.getElementById('clientRegisterForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('regNombre').value.trim();
      const celular = document.getElementById('regCelular').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const comuna = document.getElementById('regComuna').value;

      const now = new Date();
      const fecha = now.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ', ' +
                    now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });

      const newClient = {
        id: 'cli_' + Date.now(),
        nombre,
        celular,
        email,
        comuna,
        fecha
      };

      // Guardar en la base de datos de clientes
      clientsList.unshift(newClient);
      localStorage.setItem('dulce_pasion_clients_list', JSON.stringify(clientsList));

      // Guardar sesión activa del usuario
      registeredUser = newClient;
      localStorage.setItem('dulce_pasion_user', JSON.stringify(registeredUser));

      // Actualizar estado del usuario en la web
      checkLoggedInUser();
      if (isAdminAuthenticated) {
        renderAdminDatabase();
      }

      // Notificación automática por correo a pasiondulce36@gmail.com vía FormSubmit en segundo plano
      try {
        fetch('https://formsubmit.co/ajax/pasiondulce36@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `Nuevo Cliente Registrado: ${nombre} (${comuna})`,
            Nombre: nombre,
            Celular: celular,
            Correo: email,
            Comuna: comuna,
            Fecha_Registro: fecha
          })
        }).catch(() => {});
      } catch (err) {}

      showToast(`¡Registro completado! Bienvenid@ a Dulce Pasión, ${nombre} 🍰`);
      form.reset();
    });
  }
}

// ==========================================================================
// PORTAL EXCLUSIVO DUEÑOS / ADMINISTRACIÓN (FRANCISCO)
// ==========================================================================
let isAdminAuthenticated = sessionStorage.getItem('dulce_pasion_admin_auth') === 'true';

function openAdminModal() {
  if (isAdminAuthenticated) {
    const dbModal = document.getElementById('adminDatabaseModal');
    if (dbModal) {
      renderAdminDatabase();
      dbModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  } else {
    const authModal = document.getElementById('adminAuthModal');
    if (authModal) {
      const errEl = document.getElementById('adminLoginError');
      if (errEl) errEl.style.display = 'none';
      const inputEl = document.getElementById('adminPasswordInput');
      if (inputEl) inputEl.value = '';
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => { if (inputEl) inputEl.focus(); }, 150);
    }
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const pass = document.getElementById('adminPasswordInput').value.trim().toLowerCase();
  const validPasswords = ['francisco', 'dulcepasion', 'francisco2026', 'admin123'];

  if (validPasswords.includes(pass)) {
    isAdminAuthenticated = true;
    sessionStorage.setItem('dulce_pasion_admin_auth', 'true');
    closeModal('adminAuthModal');

    const dbModal = document.getElementById('adminDatabaseModal');
    if (dbModal) {
      renderAdminDatabase();
      dbModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    showToast('¡Bienvenido Francisco! Acceso concedido a la base de datos.');
  } else {
    const errEl = document.getElementById('adminLoginError');
    if (errEl) errEl.style.display = 'block';
  }
}

function logoutAdmin() {
  isAdminAuthenticated = false;
  sessionStorage.removeItem('dulce_pasion_admin_auth');
  closeModal('adminDatabaseModal');
  showToast('Has cerrado la sesión de administrador.');
}

function renderAdminDatabase() {
  const countEl = document.getElementById('totalRegistradosCount');
  const sbCountEl = document.getElementById('totalSanBernardoCount');
  const tbody = document.getElementById('adminClientsTableBody');

  const sbCount = clientsList.filter(c => c.comuna && c.comuna.toLowerCase().includes('san bernardo')).length;
  if (countEl) countEl.textContent = clientsList.length;
  if (sbCountEl) sbCountEl.textContent = sbCount;
  if (!tbody) return;

  if (clientsList.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--color-text-muted); padding: 30px;">
          No hay clientes registrados en la base de datos todavía.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = clientsList.map(c => {
    const cleanPhone = (c.celular || '').replace(/[^0-9]/g, '');
    const isSanBernardo = (c.comuna || '').toLowerCase().includes('san bernardo');
    const comunaBadge = isSanBernardo ?
      `<span class="badge badge-rose" style="font-size: 0.72rem;">${c.comuna}</span>` :
      `<span class="badge" style="background:#f3f3f3; color:#555; font-size: 0.72rem;">${c.comuna}</span>`;

    return `
      <tr>
        <td><strong>${c.nombre}</strong></td>
        <td>
          <a href="https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(c.nombre)},%20te%20escribimos%20de%20Dulce%20Pasi%C3%B3n%20San%20Bernardo" target="_blank" class="client-wa-btn" style="text-decoration:none; display:inline-flex; align-items:center; gap:4px; font-weight:600; color:#25D366;" title="Escribir al WhatsApp del cliente">
            💬 ${c.celular}
          </a>
        </td>
        <td>
          <a href="mailto:${c.email}" style="color: var(--color-primary); text-decoration: none;">
            ${c.email}
          </a>
        </td>
        <td>${comunaBadge}</td>
        <td style="color: var(--color-text-light); font-size: 0.82rem;">${c.fecha}</td>
        <td>
          <button type="button" onclick="deleteClient('${c.id}')" style="background:#fff0f0; border:1px solid #ffcccc; color:#c9302c; border-radius:4px; padding:3px 8px; font-size:0.75rem; cursor:pointer;" title="Eliminar registro">
            🗑️ Eliminar
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function deleteClient(id) {
  if (confirm('¿Estás seguro de eliminar este registro de cliente?')) {
    clientsList = clientsList.filter(c => c.id !== id);
    localStorage.setItem('dulce_pasion_clients_list', JSON.stringify(clientsList));
    renderAdminDatabase();
    showToast('Registro eliminado con éxito.');
  }
}

function downloadClientsCSV() {
  if (clientsList.length === 0) {
    showToast('No hay registros aún para descargar.');
    return;
  }

  let csvContent = '\uFEFF'; // BOM para que Excel en Windows abra con acentos perfectos
  csvContent += 'Nombre;Teléfono;Correo;Comuna;Fecha de Registro\r\n';

  clientsList.forEach(c => {
    const row = [
      `"${c.nombre.replace(/"/g, '""')}"`,
      `"${c.celular.replace(/"/g, '""')}"`,
      `"${c.email.replace(/"/g, '""')}"`,
      `"${c.comuna.replace(/"/g, '""')}"`,
      `"${c.fecha.replace(/"/g, '""')}"`
    ];
    csvContent += row.join(';') + '\r\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `clientes_dulce_pasion_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Planilla descargada exitosamente en formato Excel 📊');
}

function checkLoggedInUser() {
  const userBtn = document.getElementById('userAccountBtn');
  const userStatusBadge = document.getElementById('userStatusBadge');

  if (registeredUser) {
    if (userBtn) {
      userBtn.innerHTML = `👤 <span style="font-size: 0.8rem; font-weight: 700; margin-left: 4px;">${registeredUser.nombre.split(' ')[0]}</span>`;
      userBtn.title = `Cuenta de ${registeredUser.nombre} (${registeredUser.comuna})`;
    }
    if (userStatusBadge) {
      userStatusBadge.innerHTML = `
        <div style="background: #eaf6ec; border: 1px solid #c3e6cb; padding: 12px 16px; border-radius: var(--radius-sm); color: #2b7a3a; font-size: 0.88rem;">
          ✨ <strong>Cliente Registrado:</strong> ${registeredUser.nombre} | Celular: ${registeredUser.celular} | Comuna: ${registeredUser.comuna}
          <button onclick="logoutUser()" style="margin-left: 10px; background: none; border: none; color: #c9302c; text-decoration: underline; cursor: pointer;">Cerrar sesión</button>
        </div>
      `;
    }
  } else {
    if (userBtn) {
      userBtn.innerHTML = `👤`;
      userBtn.title = `Registrarse o Iniciar Sesión`;
    }
    if (userStatusBadge) {
      userStatusBadge.innerHTML = '';
    }
  }
}

function logoutUser() {
  registeredUser = null;
  localStorage.removeItem('dulce_pasion_user');
  checkLoggedInUser();
  showToast('Has cerrado tu sesión.');
}

// ==========================================================================
// VERIFICADOR DE COBERTURA SAN BERNARDO (Capítulo 1.2.3 & Mapa)
// ==========================================================================
function setupDeliveryChecker() {
  const checkBtn = document.getElementById('checkDeliveryBtn');
  const selectComuna = document.getElementById('checkComunaSelect');
  const resultBox = document.getElementById('deliveryResultBadge');

  if (checkBtn && selectComuna && resultBox) {
    checkBtn.addEventListener('click', () => {
      const comuna = selectComuna.value;

      if (comuna === 'San Bernardo') {
        resultBox.className = 'delivery-result-badge success';
        resultBox.innerHTML = `
          <strong>🎉 ¡Excelente noticia!</strong><br>
          San Bernardo es nuestra <strong>zona principal de venta y delivery directo</strong>.<br>
          • Despacho directo a tu puerta (30-60 min).<br>
          • <em>¡Envío GRATIS en compras sobre $30.000!</em> (Tarifa base $2.500 para pedidos menores).
        `;
      } else {
        resultBox.className = 'delivery-result-badge warning';
        resultBox.innerHTML = `
          <strong>📍 ${comuna} está en nuestra zona de Futura Expansión.</strong><br>
          Actualmente puedes realizar pedidos especiales con 48 horas de anticipación o coordinar retiro en nuestro taller de San Bernardo.
        `;
      }
    });
  }
}

// ==========================================================================
// CONSULTAS & MENSAJES DE CLIENTES (Capítulo 3.2.2)
// ==========================================================================
function setupContactForm() {
  const form = document.getElementById('clientContactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('contactNombre').value;
      showToast(`¡Gracias ${nombre}! Tu consulta ha sido enviada. Te responderemos hoy mismo.`);
      form.reset();
    });
  }
}

// ==========================================================================
// UTILIDADES: TOAST NOTIFICATIONS & CRONOGRAMA MODAL
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🧁</span><span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function openTeamProjectModal() {
  openAdminModal();
}
