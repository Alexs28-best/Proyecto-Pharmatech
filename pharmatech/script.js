const products = [
  {id:1,name:'Paracetamol 500 mg',category:'medicamentos',price:3.50,description:'Formato demostrativo de farmacia.',image:'img/paracetamol1.jpg'},
  {id:2,name:'Termómetro Digital',category:'bienestar',price:9.95,description:'Lectura rápida y fácil de usar.',image:'img/termometro-digital.jpg'},
  {id:3,name:'Gel Hidroalcohólico',category:'higiene',price:2.75,description:'Higiene de manos para el día a día.',image:'img/gel-hidroalcoholico.jpg'},
  {id:4,name:'Crema Hidratante',category:'cuidado',price:8.90,description:'Cuidado diario para una piel suave.',image:'img/crema-hidratante.jpg'},
  {id:5,name:'Protector Solar SPF 50',category:'cuidado',price:14.90,description:'Protección solar de uso diario.',image:'img/protector-solar-SPF-50.jpg'},
  {id:6,name:'Vitamina C 500 mg',category:'bienestar',price:7.50,description:'Complemento alimenticio de ejemplo.',image:'img/vitamina-c-500mg.jpg'},
  {id:7,name:'Tiritas Sensitive',category:'higiene',price:3.20,description:'Protección para pequeñas heridas.',image:'img/tiritas-sensitive.jpg'},
  {id:8,name:'Colutorio Fresh',category:'higiene',price:5.95,description:'Higiene bucal diaria.',image:'img/colutorio-fresh.jpg'},
  {id:9,name:'Ibuprofeno 400 mg',category:'medicamentos',price:4.20,description:'Analgésico y antiinflamatorio de ejemplo.',image:'img/ibuprofeno-400mg.jpg'},
  {id:10,name:'Mascarilla Quirúrgica',category:'higiene',price:1.50,description:'Protección respiratoria de uso diario.',image:'img/mascarilla-quirurgica.jpg'}
];
const offers = [
  {id:101,name:'Protector Solar SPF 50',category:'cuidado',price:9.90,oldPrice:14.90,description:'Oferta especial por tiempo limitado.',image:'img/protector-solar-SPF-50.jpg',discount:34},
  {id:102,name:'Pack Higiene Manos',category:'higiene',price:4.50,oldPrice:6.50,description:'Dos unidades en promoción.',image:'img/gel-hidroalcoholico.jpg',discount:31},
  {id:103,name:'Vitamina C 500 mg',category:'bienestar',price:5.50,oldPrice:7.50,description:'Precio promocional.',image:'img/vitamina-c-500mg.jpg',discount:27},
  {id:104,name:'Crema Hidratante',category:'cuidado',price:6.90,oldPrice:8.90,description:'Cuidado diario con descuento.',image:'img/crema-hidratante.jpg',discount:22}
];

const translations = {
  es:{topMessage:'Tu farmacia de confianza',brandSubtitle:'Farmacia & Parafarmacia',navHome:'Inicio',navProducts:'Artículos',navOffers:'Ofertas',navAbout:'Quiénes somos',navContact:'Contacto',navLocation:'Ubicación',cart:'Carrito',heroEyebrow:'Cuidamos de ti',heroTitle:'Tu salud, nuestra prioridad.',heroText:'Encuentra productos de farmacia y parafarmacia, descubre nuestras ofertas y conoce al equipo Pharmatech.',seeProducts:'Ver artículos',seeOffers:'Ver ofertas',feature1:'Atención cercana',feature2:'Productos seleccionados',feature3:'Compra sencilla',heroCard:'Farmacia & Parafarmacia',catalogEyebrow:'Catálogo',productsTitle:'Artículos',productsText:'Productos habituales de farmacia y parafarmacia.',filterLabel:'Categoría',allCategories:'Todas',catHygiene:'Higiene',catCare:'Cuidado personal',catWellness:'Bienestar',catMedicines:'Medicamentos',offersEyebrow:'Promociones',offersTitle:'Ofertas',offersText:'Aprovecha nuestras promociones destacadas.',aboutEyebrow:'Conócenos',aboutTitle:'Quiénes somos',aboutText1:'En Pharmatech queremos ofrecer una experiencia cercana, clara y moderna para ayudarte a encontrar lo que necesitas.',aboutText2:'Nuestro catálogo combina productos de cuidado personal, higiene y bienestar. Para este proyecto, el catálogo es demostrativo y los datos pueden sustituirse por los productos reales de la farmacia.',careBadge:'cuidado',aboutPoint1:'Atención personalizada',aboutPoint2:'Información clara de productos',aboutPoint3:'Una web fácil de usar',contactEyebrow:'Estamos aquí para ayudarte',contactTitle:'Contacto',contactText:'¿Tienes alguna pregunta? Escríbenos o llámanos. Sustituye estos datos de ejemplo por los de tu farmacia.',phone:'Teléfono',hours:'Horario',hoursValue:'Lun–Vie · 09:00–20:00',formTitle:'Envíanos un mensaje',formName:'Nombre',formEmail:'Email',formMessage:'Mensaje',namePlaceholder:'Tu nombre',messagePlaceholder:'Escribe tu mensaje...',sendMessage:'Enviar mensaje',locationEyebrow:'Visítanos',locationTitle:'Dónde estamos',locationText:'Dirección de ejemplo: reemplázala por la dirección real de Pharmatech.',openMaps:'Abrir en Google Maps',mapDemo:'Mapa de ubicación — sustituye la dirección por la real',footerLinks:'Enlaces',footerHelp:'Ayuda',demoNotice:'Web demostrativa — sustituye los datos antes de publicarla.',cartEyebrow:'Tu selección',cartTitle:'Carrito',emptyCartTitle:'Tu carrito está vacío',emptyCartText:'Añade algún artículo para verlo aquí.',startShopping:'Empezar a comprar',total:'Total',checkout:'Continuar',clearCart:'Vaciar carrito',cartDisclaimer:'Demo: el botón de compra no procesa pagos reales.',add:'Añadir al carrito',added:'añadido al carrito',remove:'Eliminar',quantity:'Cantidad',checkoutMessage:'Este proyecto es una demo. Aquí puedes conectar después un sistema real de pedidos o pagos.',formSent:'¡Mensaje enviado! (Demo)',medicineNote:'Producto de ejemplo'},
  ca:{topMessage:'La teva farmàcia de confiança',brandSubtitle:'Farmàcia & Parafarmàcia',navHome:'Inici',navProducts:'Articles',navOffers:'Ofertes',navAbout:'Qui som',navContact:'Contacte',navLocation:'Ubicació',cart:'Carretó',heroEyebrow:'Cuidem de tu',heroTitle:'La teva salut, la nostra prioritat.',heroText:'Troba productes de farmàcia i parafarmàcia, descobreix les nostres ofertes i coneix l’equip Pharmatech.',seeProducts:'Veure articles',seeOffers:'Veure ofertes',feature1:'Atenció propera',feature2:'Productes seleccionats',feature3:'Compra senzilla',heroCard:'Farmàcia & Parafarmàcia',catalogEyebrow:'Catàleg',productsTitle:'Articles',productsText:'Productes habituals de farmàcia i parafarmàcia.',filterLabel:'Categoria',allCategories:'Totes',catHygiene:'Higiene',catCare:'Cura personal',catWellness:'Benestar',catMedicines:'Medicaments',offersEyebrow:'Promocions',offersTitle:'Ofertes',offersText:'Aprofita les nostres promocions destacades.',aboutEyebrow:'Coneix-nos',aboutTitle:'Qui som',aboutText1:'A Pharmatech volem oferir una experiència propera, clara i moderna per ajudar-te a trobar el que necessites.',aboutText2:'El nostre catàleg combina productes de cura personal, higiene i benestar. Per a aquest projecte, el catàleg és demostratiu i les dades es poden substituir pels productes reals de la farmàcia.',careBadge:'cura',aboutPoint1:'Atenció personalitzada',aboutPoint2:'Informació clara dels productes',aboutPoint3:'Una web fàcil d’utilitzar',contactEyebrow:'Som aquí per ajudar-te',contactTitle:'Contacte',contactText:'Tens alguna pregunta? Escriu-nos o truca’ns. Substitueix aquestes dades d’exemple per les de la teva farmàcia.',phone:'Telèfon',hours:'Horari',hoursValue:'Dl–Dv · 09:00–20:00',formTitle:'Envia’ns un missatge',formName:'Nom',formEmail:'Email',formMessage:'Missatge',namePlaceholder:'El teu nom',messagePlaceholder:'Escriu el teu missatge...',sendMessage:'Enviar missatge',locationEyebrow:'Visita’ns',locationTitle:'On som',locationText:'Adreça d’exemple: substitueix-la per l’adreça real de Pharmatech.',openMaps:'Obrir a Google Maps',mapDemo:'Mapa d’ubicació — substitueix l’adreça per la real',footerLinks:'Enllaços',footerHelp:'Ajuda',demoNotice:'Web demostrativa — substitueix les dades abans de publicar-la.',cartEyebrow:'La teva selecció',cartTitle:'Carretó',emptyCartTitle:'El teu carretó és buit',emptyCartText:'Afegeix algun article per veure’l aquí.',startShopping:'Començar a comprar',total:'Total',checkout:'Continuar',clearCart:'Buidar carretó',cartDisclaimer:'Demo: el botó de compra no processa pagaments reals.',add:'Afegir al carretó',added:'afegit al carretó',remove:'Eliminar',quantity:'Quantitat',checkoutMessage:'Aquest projecte és una demo. Aquí pots connectar després un sistema real de comandes o pagaments.',formSent:'Missatge enviat! (Demo)',medicineNote:'Producte d’exemple'},
  en:{topMessage:'Your trusted pharmacy',brandSubtitle:'Pharmacy & Parapharmacy',navHome:'Home',navProducts:'Products',navOffers:'Offers',navAbout:'About us',navContact:'Contact',navLocation:'Location',cart:'Cart',heroEyebrow:'We care for you',heroTitle:'Your health, our priority.',heroText:'Find pharmacy and personal-care products, discover our offers and meet the Pharmatech team.',seeProducts:'View products',seeOffers:'View offers',feature1:'Friendly service',feature2:'Selected products',feature3:'Simple shopping',heroCard:'Pharmacy & Parapharmacy',catalogEyebrow:'Catalogue',productsTitle:'Products',productsText:'Everyday pharmacy and personal-care products.',filterLabel:'Category',allCategories:'All',catHygiene:'Hygiene',catCare:'Personal care',catWellness:'Wellness',catMedicines:'Medicines',offersEyebrow:'Promotions',offersTitle:'Offers',offersText:'Take advantage of our featured promotions.',aboutEyebrow:'Get to know us',aboutTitle:'About us',aboutText1:'At Pharmatech, we want to offer a friendly, clear and modern experience to help you find what you need.',aboutText2:'Our catalogue combines personal-care, hygiene and wellness products. For this project, the catalogue is demonstrative and can be replaced with the pharmacy’s real products.',careBadge:'care',aboutPoint1:'Personalised attention',aboutPoint2:'Clear product information',aboutPoint3:'An easy-to-use website',contactEyebrow:'We are here to help',contactTitle:'Contact',contactText:'Have a question? Write or call us. Replace these example details with your pharmacy’s real information.',phone:'Phone',hours:'Opening hours',hoursValue:'Mon–Fri · 09:00–20:00',formTitle:'Send us a message',formName:'Name',formEmail:'Email',formMessage:'Message',namePlaceholder:'Your name',messagePlaceholder:'Write your message...',sendMessage:'Send message',locationEyebrow:'Visit us',locationTitle:'Where we are',locationText:'Example address: replace it with Pharmatech’s real address.',openMaps:'Open in Google Maps',mapDemo:'Location map — replace the address with the real one',footerLinks:'Links',footerHelp:'Help',demoNotice:'Demo website — replace the details before publishing.',cartEyebrow:'Your selection',cartTitle:'Cart',emptyCartTitle:'Your cart is empty',emptyCartText:'Add a product to see it here.',startShopping:'Start shopping',total:'Total',checkout:'Continue',clearCart:'Clear cart',cartDisclaimer:'Demo: the checkout button does not process real payments.',add:'Add to cart',added:'added to cart',remove:'Remove',quantity:'Quantity',checkoutMessage:'This project is a demo. You can connect a real order or payment system here later.',formSent:'Message sent! (Demo)',medicineNote:'Demo product'}
};

let currentLang = localStorage.getItem('pharmatechLang') || 'es';
let cart = JSON.parse(localStorage.getItem('pharmatechCart') || '[]');

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t = key => translations[currentLang][key] || translations.es[key] || key;
const money = n => new Intl.NumberFormat(currentLang === 'en' ? 'en-GB' : 'es-ES',{style:'currency',currency:'EUR'}).format(n);

function categoryName(category){
  const map={higiene:'catHygiene',cuidado:'catCare',bienestar:'catWellness',medicamentos:'catMedicines'};
  return t(map[category]);
}
function allProducts(){return [...products,...offers];}
function findProduct(id){return allProducts().find(p=>p.id===id)}

function renderProducts(){
  const filter=$('#categoryFilter').value;
  const list=products.filter(p=>filter==='all'||p.category===filter);
  $('#productsGrid').innerHTML=list.map(productCard).join('') || `<div class="empty-cart visible" style="grid-column:1/-1"><div>🔎</div><h3>${t('productsTitle')}</h3><p>${t('emptyCartText')}</p></div>`;
  $('#offersGrid').innerHTML=offers.map(productCard).join('');
}
function productCard(p){
  const offer=Boolean(p.oldPrice);
  return `<article class="product-card">
    <div class="product-image">
      ${offer?`<span class="badge">-${p.discount}%</span>`:''}
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="product-info">
      <span class="product-category">${categoryName(p.category)}</span>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-description">${p.description}</p>
      <div class="price-row">
        <span class="price">${money(p.price)}</span>
        ${offer?`<span class="old-price">${money(p.oldPrice)}</span><span class="discount">-${p.discount}%</span>`:''}
      </div>
      <button class="add-btn" data-add="${p.id}">${t('add')}</button>
    </div>
  </article>`;
}

function saveCart(){localStorage.setItem('pharmatechCart',JSON.stringify(cart));}
function addToCart(id){
  const item=cart.find(x=>x.id===id);
  if(item)item.qty++;
  else cart.push({id,qty:1});
  saveCart();renderCart();showToast(`${findProduct(id).name} ${t('added')}`);
}
function changeQty(id,delta){
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);
  saveCart();renderCart();
}
function removeItem(id){cart=cart.filter(x=>x.id!==id);saveCart();renderCart();}
function renderCart(){
  const items=$('#cartItems'), empty=$('#emptyCart'), footer=$('#cartFooter');
  const totalQty=cart.reduce((s,x)=>s+x.qty,0); $('#cartCount').textContent=totalQty;
  if(!cart.length){items.innerHTML='';empty.classList.add('visible');footer.style.display='none';return}
  empty.classList.remove('visible');footer.style.display='block';
  let total=0;
  items.innerHTML=cart.map(item=>{const p=findProduct(item.id);const line=p.price*item.qty;total+=line;return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><div class="cart-item-name">${p.name}</div><div class="cart-item-price">${money(p.price)}</div><div class="qty"><button data-minus="${p.id}">−</button><strong>${item.qty}</strong><button data-plus="${p.id}">+</button></div><button class="remove-item" data-remove="${p.id}">${t('remove')}</button></div><div class="item-total">${money(line)}</div></div>`}).join('');
  $('#cartTotal').textContent=money(total);
}
function openCart(){$('#cartPanel').classList.add('open');$('#cartOverlay').classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){$('#cartPanel').classList.remove('open');$('#cartOverlay').classList.remove('open');document.body.style.overflow=''}
function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2200)}

function setLanguage(lang){
  currentLang=lang;localStorage.setItem('pharmatechLang',lang);document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key]});
  $$('[data-i18n-placeholder]').forEach(el=>{const key=el.dataset.i18nPlaceholder;el.placeholder=t(key)});
  $('#languageSelect').value=lang;$$('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  renderProducts();renderCart();
}

$('#productsGrid').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b)addToCart(Number(b.dataset.add))});
$('#offersGrid').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b)addToCart(Number(b.dataset.add))});
$('#cartItems').addEventListener('click',e=>{const minus=e.target.closest('[data-minus]');const plus=e.target.closest('[data-plus]');const remove=e.target.closest('[data-remove]');if(minus)changeQty(Number(minus.dataset.minus),-1);if(plus)changeQty(Number(plus.dataset.plus),1);if(remove)removeItem(Number(remove.dataset.remove))});
$('#categoryFilter').addEventListener('change',renderProducts);
$('#openCart').addEventListener('click',openCart);$('#openCartFooter').addEventListener('click',openCart);$('#closeCart').addEventListener('click',closeCart);$('#cartOverlay').addEventListener('click',closeCart);$('#goShopping').addEventListener('click',()=>{closeCart();document.querySelector('#articulos').scrollIntoView()});
$('#clearCart').addEventListener('click',()=>{cart=[];saveCart();renderCart()});
$('#checkoutButton').addEventListener('click',()=>showToast(t('checkoutMessage')));
$('#menuButton').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
$$('.nav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
$('#languageSelect').addEventListener('change',e=>setLanguage(e.target.value));$$('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();$('#formMessageStatus').textContent=t('formSent');e.target.reset()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
$('#year').textContent=new Date().getFullYear();
setLanguage(currentLang);
