/* ═══════════ Accessories by LYM ═══════════ */
(() => {
"use strict";

/* ═══ COMMANDES → GOOGLE SHEETS ═══
   Colle l'URL de ton script Google (elle finit par /exec) entre les guillemets.
   Voir le fichier google-sheets-commandes.gs pour la mise en place.
   Si cette case est vide, le site affiche une alerte et n'envoie rien. */
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwUP10vFAtBJ74xaE7aiaXR_Fb6iGnHBa1e56RpuwHPvOZVYeeOr7iwXigfpi_5byUS/exec";
const SHEETS_KEY = "lym-commandes";

/* ─────────── Catalogue ─────────── */

const CATS = [
  { id:"parures",   label:"Parures",   img:"assets/products/parure1.jpg",    blurb:"Ensemble complet" },
  { id:"packs",     label:"Packs",     img:"assets/products/pack1.jpg",      blurb:"Écrins & duos" },
  { id:"bracelets", label:"Bracelets", img:"assets/products/bracelet1.jpg",  blurb:"Perles & chaînes" },
  { id:"colliers",  label:"Colliers",  img:"assets/products/collier1.jpg",   blurb:"Fins & statement" },
  { id:"boucles",   label:"Boucles",   img:"assets/products/boucle2.jpg",    blurb:"Créoles & puces" },
  // Bagues et Montres cachés tant qu'il n'y a pas de photo ni de produit.
  // Pour les remettre : enlève le // du début de la ligne, et remplace bague1.jpg / montre1.jpg par tes vrais fichiers.
  // { id:"bagues",  label:"Bagues",    img:"assets/products/bague1.jpg",     blurb:"Empilables" },
  // { id:"montres", label:"Montres",   img:"assets/products/montre1.jpg",    blurb:"Quartz & acier" },
];

const P = (id,name,cat,price,img,desc,extra={}) => {
  const p = { id, name, cat, price, img, desc, badge:"", stock:"en stock", rank:20, ...extra };
  p.was = p.was || Math.round(p.price * 1.25 / 100) * 100;
  return p;
};

/* Cadrage photo possible sur chaque produit, dans le dernier { } : pos:"center 70%", zoom:1.15 */
const PRODUCTS = [
  // parures
  P("parure-trefle","Parure Trèfle Nacré","parures",3200,"assets/products/parure1.jpg",
    "Collier, bracelet et boucles assortis, motif trèfle en nacre blanche sur plaqué or.",
    { badge:"", badgeKind:"hot", rank:1 ,pos:"center 60%", zoom:1,pos:"center 65%", zoom:1.05 }),
  P("parure-perle","Parure Perle Éclat","parures",2900,"assets/products/parure2.jpg",
    "Collier de perles douces et puces pendantes serties de strass.", { rank:2,pos:"center 73%", zoom:1.2 }),
  P("parure-coeur","Parure Cœur Doré","parures",2600,"assets/products/parure3.jpg",
    "Trois pièces fines à porter seules ou empilées, motif cœur.", { badge:"", isNew:true, rank:3,pos:"center 70%", zoom:1.1  }),

  // packs
  P("pack-ecrin","Pack Cadeau Écrin 3 Pièces","packs",3800,"assets/products/pack1.jpg",
    "Bracelet, boucles et bague dans leur écrin satin avec ruban — prêt à offrir.",
    { badge:"Idée cadeau", rank:4,pos:"center 60%", zoom:1.05 }),

  // bracelets
  P("br-perles","Bracelet Perles Multi-Rangs","bracelets",1500,"assets/products/bracelet1.jpg",
    "Trois rangs de perles fines et chaînes dorées, petit trèfle pendentif.", { rank:6,pos:"center 60%", zoom:1.1  }),
  P("br-jonc","Jonc Rigide Plaqué Or","bracelets",1800,"assets/products/bracelet2.jpg",
    "Jonc ouvert poli, finition miroir, tient seul au poignet.", { rank:7,pos:"center 60%", zoom:1  }),
  P("br-chaine","Bracelet Chaîne Trèfle","bracelets",1300,"assets/products/bracelet3.jpg",
    "Chaîne fine alternant maillons polis et trèfles nacrés.", { badge:"", rank:8,pos:"center 63%", zoom:1  }),
  P("br-stack","Stack Bracelets Trèfle & Perles","bracelets",2200,"assets/products/bracelet4.jpg",
    "Le stack porté sur nos photos : jonc, perles et chaînes trèfle ensemble.",
    { badge:"", rank:9,pos:"center 65%", zoom:1.05  }),

  // colliers
  P("cl-lettre","Collier Pendentif Lettre","colliers",1200,"assets/products/collier1.jpg",
    "Chaîne fine et lettre à choisir — personnalisation dispo sur demande.",
    { badge:"", rank:10,pos:"center 60%", zoom:1.03  }),
  P("cl-baroque","Ras-de-cou Baroque","colliers",1700,"assets/products/collier2.jpg",
    "Perles baroques irrégulières et intercalas dorés, longueur ras-de-cou.", { rank:11,pos:"center 45%", zoom:1 }),

  // boucles
  P("bo-creoles","Créoles Torsadées Or","boucles",1250,"assets/products/boucle2.jpg",
    "Paire de créoles moyenne taille, finition corde torsadée, tige inoxydable.",
    { badge:"", badgeKind:"hot", rank:13,pos:"center 70%", zoom:1.3  }),


  // bagues
  // P("ba-trifles","Lot de 3 Bagues Trèfle","bagues",14,"assets/products/r02-bagues-trifles.jpeg",
  //   "Trois bagues dorées à motifs trèfle et pierre, à empiler comme sur la photo.",
  //   { badge:"Photo réelle", rank:15}),
  // P("ba-pierre","Bague Pierre Carrée","bagues",900,"assets/products/r05-bague-pierre.jpeg",
  //   "Zirconia taille carrée sertie griffes, anneau fin.", { isNew:true, rank:16 }),
  // P("ba-fines","Bagues Fines Duo","bagues",1100,"assets/products/r03-bagues-fines.jpeg",
  //   "Deux anneaux discrets, un lisse et un texturé, portés index et majeur.",
  //   { badge:"2 pièces", rank:17 }),

  // montres
  // P("mo-acier","Montre Acier Cadran Noir","montres",4500,"assets/products/r01-montre-acier.jpeg",
  //   "Bracelet acier brossé, cadran noir lisible, mouvement quartz, résistante aux éclaboussures.",
  //   { badge:"Stock limité", badgeKind:"few", stock:"3 pièces", rank:18 }),
];

/* ─────────── Wilayas & zones ─────────── */

const ZONES = { centre:400, est:500, ouest:500, sud:650, grandsud:850 };
const WILAYAS = [
  [1,"Adrar","sud"],[2,"Chlef","centre"],[3,"Laghouat","sud"],[4,"Oum El Bouaghi","est"],[5,"Batna","est"],
  [6,"Béjaïa","est"],[7,"Biskra","sud"],[8,"Béchar","sud"],[9,"Blida","centre"],[10,"Bouira","centre"],
  [11,"Tamanrasset","grandsud"],[12,"Tébessa","est"],[13,"Tlemcen","ouest"],[14,"Tiaret","centre"],
  [15,"Tizi Ouzou","centre"],[16,"Alger","centre"],[17,"Djelfa","sud"],[18,"Jijel","est"],[19,"Sétif","est"],
  [20,"Saïda","ouest"],[21,"Skikda","est"],[22,"Sidi Bel Abbès","ouest"],[23,"Annaba","est"],[24,"Guelma","est"],
  [25,"Constantine","est"],[26,"Médéa","centre"],[27,"Mostaganem","ouest"],[28,"M'Sila","centre"],
  [29,"Mascara","ouest"],[30,"Ouargla","sud"],[31,"Oran","ouest"],[32,"El Bayadh","sud"],[33,"Illizi","grandsud"],
  [34,"Bordj Bou Arréridj","centre"],[35,"Boumerdès","centre"],[36,"El Tarf","est"],[37,"Tindouf","grandsud"],
  [38,"Tissemsilt","centre"],[39,"El Oued","sud"],[40,"Khenchela","est"],[41,"Souk Ahras","est"],
  [42,"Tipaza","centre"],[43,"Mila","est"],[44,"Aïn Defla","centre"],[45,"Naâma","sud"],
  [46,"Aïn Témouchent","ouest"],[47,"Ghardaïa","sud"],[48,"Relizane","ouest"],[49,"Timimoun","sud"],
  [50,"Bordj Badji Mokhtar","grandsud"],[51,"Ouled Djellal","sud"],[52,"Béni Abbès","sud"],
  [53,"In Salah","grandsud"],[54,"In Guezzam","grandsud"],[55,"Touggourt","sud"],[56,"Djanet","grandsud"],
  [57,"El M'Ghair","sud"],[58,"El Meniaa","sud"],
];
const PICKUPS = { usthb:"Retrait USTHB (Bab Ezzouar)", esaa:"Retrait ESAA (Ben Aknoun)" };

/* ─────────── Helpers ─────────── */

const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => [...r.querySelectorAll(s)];
const t  = (k,v,fb) => I18N.t(k,v,fb);
let _nf, _nfLoc = "";
const numf = () => {
  const l = I18N.numLocale();
  if (l !== _nfLoc){ _nf = new Intl.NumberFormat(l); _nfLoc = l; }
  return _nf;
};
const da = n => `${numf().format(Math.round(n))} ${I18N.unit()}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const catLabel = id => t("cat." + id, null, (CATS.find(c=>c.id===id) || {}).label || id);
const catBlurb = id => t("catb." + id, null, (CATS.find(c=>c.id===id) || {}).blurb || "");
const pname = p => t("pn." + p.id, null, p.name);
const pdesc = p => t("pd." + p.id, null, p.desc);
const pbadge = p => t("pb." + p.id, null, p.badge);
const pstock = p => t("ps." + p.id, null, p.stock === "en stock" ? t("card.stock") : p.stock);
/* Cadrage photo par produit : pos = object-position, zoom = échelle de l'image. */
const imgPos  = p => /^[0-9a-z%. ]{1,24}$/i.test(p.pos || "") ? p.pos : "center 50%";
const imgZoom = p => { const z = parseFloat(p.zoom); return z >= .5 && z <= 3 ? z : 1; };
const enWil = n => n === "Alger" ? "Algiers" : n.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const wname = w => I18N.lang === "en" ? enWil(w[1]) : t("w." + w[0], null, w[1]);
const pickLabel = k => t("pick." + k, null, PICKUPS[k] || k);
const byId = id => PRODUCTS.find(p => p.id === id);
const wilaya = code => WILAYAS.find(w => w[0] === +code) || WILAYAS[15];
const load = (k,f) => { try { return JSON.parse(localStorage.getItem(k)) ?? f; } catch { return f; } };
const save = (k,v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

const store = {
  cart: load("lym_cart_v1", {}),
  favs: new Set(load("lym_favs_v1", [])),
  ship: load("lym_ship_v1", "wilaya"),
  wilaya: load("lym_wilaya_v1", 16),
  filter: "tout",
  query: "",
  sort: "featured",
};

const fee = () => store.ship === "wilaya" ? ZONES[wilaya(store.wilaya)[2]] : 0;
const subtotal = () => Object.entries(store.cart).reduce((s,[id,q]) => s + (byId(id)?.price || 0) * q, 0);
const cartQty = () => Object.values(store.cart).reduce((s,q) => s + q, 0);

const ICON = {
  check:'<svg viewBox="0 0 24 24"><path d="m5 13 4 4 10-10"/></svg>',
  warn:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v5m0 3v.5"/></svg>',
  truck:'<svg viewBox="0 0 24 24"><path d="M4 8h11v8H4zM15 11h3.5L21 14v2h-6"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 3 4 7v5c0 4.6 3.3 8 8 9 4.7-1 8-4.4 8-9V7l-8-4Z"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
};

/* ─────────── Toasts ─────────── */

function toast(msg, icon=ICON.check){
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `${icon}<span>${esc(msg)}</span>`;
  $("#toasts").appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 400); }, 2700);
}

/* ─────────── Overlays (panier + modales) ─────────── */

let lastFocus = null;

function scrim(on){
  const s = $("#scrim");
  if (on){ s.hidden = false; requestAnimationFrame(() => s.classList.add("in")); }
  else {
    s.classList.remove("in");
    setTimeout(() => { if (!s.classList.contains("in")) s.hidden = true; }, 420);
  }
}

function openPanel(el){
  lastFocus = document.activeElement;
  document.body.classList.add("locked");
  scrim(true);
  el.classList.add("in");
  el.setAttribute("aria-hidden","false");
  const f = el.querySelector("input,select,textarea,button");
  requestAnimationFrame(() => f?.focus({ preventScroll:true }));
}

function closeAll(){
  lastFocus?.focus?.({ preventScroll:true });
  lastFocus = null;
  openQuick = null;
  $("#cart").classList.remove("in");
  $("#cart").setAttribute("aria-hidden","true");
  $$(".modal").forEach(m => { m.classList.remove("in"); m.setAttribute("aria-hidden","true"); });
  scrim(false);
  document.body.classList.remove("locked");
  toggleSheet(false);
}

function openCart(){ renderCart(); openPanel($("#cart")); }

/* ─────────── Panier ─────────── */

function bump(){
  const b = $("#cartCount"), n = cartQty();
  b.hidden = n === 0;
  b.textContent = n > 9 ? "9+" : n;
  b.classList.remove("pop");
  void b.offsetWidth;
  b.classList.add("pop");
}

function add(id, qty=1){
  store.cart[id] = Math.min(20, (store.cart[id] || 0) + qty);
  save("lym_cart_v1", store.cart);
  bump();
  patchCard(id);
  if ($("#cart").classList.contains("in")) renderCart();
  toast(t("toast.added", { name: pname(byId(id)) }));
}

function setQty(id, qty){
  store.cart[id] = Math.max(1, Math.min(20, qty));
  save("lym_cart_v1", store.cart);
  renderCart();
  patchCard(id);
}

function remove(id){
  const row = $(`[data-row="${id}"]`);
  const done = () => {
    delete store.cart[id];
    save("lym_cart_v1", store.cart);
    renderCart();
    patchCard(id);
    bump();
  };
  if (row){ row.classList.add("out"); setTimeout(done, 300); } else done();
}

function renderCart(){
  const ids = Object.keys(store.cart).filter(byId);
  const n = cartQty();
  $("#cart").classList.toggle("is-empty", ids.length === 0);
  $("#cartMeta").textContent = t("cart.meta." + I18N.pick(n), { n });
  $("#cartBody").innerHTML = ids.map(id => {
    const p = byId(id);
    return `<div class="ci" data-row="${id}">
      <img src="${p.img}" alt="" loading="lazy" style="--pos:${imgPos(p)}">
      <div class="ci__t">
        <span class="ci__name">${esc(pname(p))}</span>
        <span class="ci__p">${da(p.price)}</span>
        <div class="ci__row">
          <div class="qty">
            <button data-dec="${id}" aria-label="${esc(t("cart.dec"))}">−</button>
            <span>${store.cart[id]}</span>
            <button data-inc="${id}" aria-label="${esc(t("cart.inc"))}">+</button>
          </div>
          <button class="ci__del" data-del="${id}">${esc(t("cart.remove"))}</button>
        </div>
      </div>
    </div>`;
  }).join("");

  $("#wilaya").value = String(store.wilaya);
  $("#wilayaWrap").hidden = store.ship !== "wilaya";
  $$("#shipOpts button").forEach(b => b.classList.toggle("is-active", b.dataset.ship === store.ship));

  const sub = subtotal(), f = ids.length ? fee() : 0;
  $("#sub").textContent = da(sub);
  $("#fee").textContent = ids.length ? (f === 0 ? t("cart.free") : da(f)) : "—";
  $("#total").textContent = da(sub + f);

  $("#cartFoot .free-hint")?.remove();
  if (ids.length && store.ship !== "wilaya"){
    $("#cartFoot").insertAdjacentHTML("afterbegin",
      `<div class="free-hint">${ICON.check}<span>${t("cart.freeHint", { pick: esc(pickLabel(store.ship)) })}</span></div>`);
  }
}

/* ─────────── Grille boutique ─────────── */

function visible(){
  let list = PRODUCTS.filter(p => store.filter === "tout" || p.cat === store.filter);
  const q = store.query.trim().toLowerCase();
  if (q) list = list.filter(p => `${pname(p)} ${pdesc(p)} ${catLabel(p.cat)}`.toLowerCase().includes(q));
  const s = store.sort;
  return [...list].sort((a,b) =>
    s === "asc"  ? a.price - b.price :
    s === "desc" ? b.price - a.price :
    s === "new"  ? Number(b.isNew) - Number(a.isNew) || a.rank - b.rank :
    a.rank - b.rank
  );
}

function cardHTML(p){
  const inCart = store.cart[p.id];
  const fav = store.favs.has(p.id);
  const name = pname(p), badge = pbadge(p), stock = pstock(p);
  return `<article class="card" data-card="${p.id}">
    <div class="card__media" data-quick="${p.id}">
      <img src="${p.img}" alt="${esc(name)}" loading="lazy" decoding="async" style="--pos:${imgPos(p)};--zoom:${imgZoom(p)}">
      ${badge ? `<span class="card__badge${p.badgeKind ? ` card__badge--${p.badgeKind}` : ""}">${esc(badge)}</span>` : ""}
      <button class="card__fav${fav ? " is-on" : ""}" data-fav="${p.id}" aria-pressed="${fav}" aria-label="${esc(t("a.fav", { name }))}">
        <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-9.1A4 4 0 0 1 12 8a4 4 0 0 1 7 2.9C19 15.6 12 20 12 20Z"/></svg>
      </button>
    </div>
    <div class="card__body">
      <span class="card__cat">${esc(catLabel(p.cat))}</span>
      <h3 class="card__name"><button class="card__link" data-quick="${p.id}">${esc(name)}</button></h3>
      <div class="card__foot">
        <span class="price"><s class="price__was">${da(p.was)}</s>${da(p.price)}</span>
        <span class="card__mini">${ICON.truck}${esc(stock)}</span>
      </div>
      <button class="btn btn--solid card__add" data-add="${p.id}">
        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
        <span>${inCart ? t("card.inCart", { n:inCart }) : t("card.add")}</span>
      </button>
    </div>
  </article>`;
}

let io;
function renderGrid(){
  const list = visible();
  $("#grid").innerHTML = list.map(cardHTML).join("");
  $("#empty").hidden = list.length > 0;
  $("#count").textContent = [
    t("shop.count." + I18N.pick(list.length), { n:list.length }),
    store.filter !== "tout" ? catLabel(store.filter) : "",
    store.query.trim() ? `« ${store.query.trim()} »` : "",
  ].filter(Boolean).join(" · ");
  $$("#pills .pill").forEach(b => {
    const on = b.dataset.cat === store.filter;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });

  io?.disconnect();
  io = new IntersectionObserver((es,o) => es.forEach(e => {
    if (!e.isIntersecting) return;
    o.unobserve(e.target);
    const i = $$("#grid .card").indexOf(e.target);
    e.target.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    e.target.classList.add("in");
  }), { rootMargin:"0px 0px -6% 0px", threshold:.05 });
  $$("#grid .card").forEach(c => io.observe(c));
}

function patchCard(id){
  const el = $(`[data-card="${id}"]`);
  if (!el) return;
  const q = store.cart[id] || 0;
  el.querySelector(".card__add span").textContent = q ? t("card.inCart", { n:q }) : t("card.add");
}

function scrollToShop(){
  scrollTo({ top: $("#boutique").getBoundingClientRect().top + scrollY - 92, behavior:"smooth" });
}

/* ─────────── Fiche produit ─────────── */

let openQuick = null;

function quick(id){
  const p = byId(id);
  let qty = 1;
  openQuick = id;
  $("#quickPanel").innerHTML = `
    <button class="icon-btn qv__close" data-close aria-label="${esc(t("qv.close"))}">${ICON.x}</button>
    <div class="qv__media"><img src="${p.img}" alt="${esc(pname(p))}" style="--pos:${imgPos(p)};--zoom:${imgZoom(p)}"></div>
    <div class="qv__body">
      <span class="card__cat">${esc(catLabel(p.cat))}${pbadge(p) ? " · " + esc(pbadge(p)) : ""}</span>
      <h2 class="qv__name">${esc(pname(p))}</h2>
      <p class="qv__price"><s class="price__was">${da(p.was)}</s>${da(p.price)}</p>
      <p class="qv__desc">${esc(pdesc(p))}</p>
      <div class="qv__meta">
        <div>${ICON.truck}<span>${esc(t("qv.ship"))}</span></div>
        <div>${ICON.shield}<span>${esc(t("qv.material"))}</span></div>
        <div>${ICON.clock}<span>${esc(pstock(p))}</span></div>
      </div>
      <div class="qv__buy">
        <div class="qty">
          <button data-qv-dec aria-label="${esc(t("qv.dec"))}">−</button>
          <span id="qvQty">1</span>
          <button data-qv-inc aria-label="${esc(t("qv.inc"))}">+</button>
        </div>
        <button class="btn btn--solid" data-qv-add>${esc(t("qv.add"))}</button>
      </div>
    </div>`;
  const setQtyQv = n => { qty = Math.max(1, Math.min(20, n)); $("#qvQty").textContent = qty; };
  $("#quickPanel").onclick = e => {
    if (e.target.closest("[data-qv-dec]")) setQtyQv(qty - 1);
    if (e.target.closest("[data-qv-inc]")) setQtyQv(qty + 1);
    if (e.target.closest("[data-qv-add]")) { add(p.id, qty); closeAll(); openCart(); }
    if (e.target.closest("[data-close]")) closeAll();
  };
  openPanel($("#quick"));
}

/* ─────────── Commande ─────────── */

function orderText(f){
  const now = new Date(), loc = I18N.locale();
  const L = [
    t("ord.head"),
    t("ord.when", { d: now.toLocaleDateString(loc), t: now.toLocaleTimeString(loc, { hour:"2-digit", minute:"2-digit" }) }),
    t("ord.sep"),
  ];
  let qty = 0;
  Object.entries(store.cart).forEach(([id,q]) => {
    const p = byId(id);
    if (!p) return;
    qty += q;
    L.push(t("ord.line", { name: pname(p), q, p: da(p.price), tot: da(p.price * q) }));
  });
  L.push(t("ord.sep"));
  L.push(t("ord.count", { n: qty }));
  L.push(t("ord.sub", { v: da(subtotal()) }));
  L.push(store.ship === "wilaya"
    ? t("ord.recepW", { w: wname(wilaya(store.wilaya)), c: String(store.wilaya).padStart(2,"0") })
    : t("ord.recep", { v: pickLabel(store.ship) }));
  L.push(t("ord.fee", { v: fee() === 0 ? t("ord.feeFree") : da(fee()) }));
  L.push(t("ord.total", { v: da(subtotal() + fee()) }));
  L.push("", t("ord.who"));
  L.push(t("ord.name", { v: f.name }), t("ord.phone", { v: f.phone }));
  const extra = f.address ? " · " + f.address : "";
  L.push(store.ship === "wilaya"
    ? t("ord.addr", { w: wname(wilaya(store.wilaya)), c: f.city, a: extra })
    : t("ord.pickup", { p: pickLabel(store.ship), c: f.city, a: extra }));
  if (f.note) L.push(t("ord.note", { v: f.note }));
  L.push("", t("ord.thanks"));
  return L.join("\n");
}

/* Une référence courte, unique, qui sert aussi à éviter les doublons côté feuille. */
const orderRef = () => "LYM-" + Date.now().toString(36).toUpperCase().slice(-6) +
  "-" + Math.random().toString(36).toUpperCase().slice(2, 5);

function orderPayload(f, ref){
  let qty = 0;
  const lignes = [];
  Object.entries(store.cart).forEach(([id,q]) => {
    const p = byId(id);
    if (!p) return;
    qty += q;
    lignes.push(`${pname(p)} ×${q} (${da(p.price * q)})`);
  });
  const envoi = store.ship === "wilaya";
  return {
    key: SHEETS_KEY, ref, lang: I18N.lang,
    name: f.name, phone: f.phone,
    wilaya: envoi ? `${String(store.wilaya).padStart(2,"0")} ${wname(wilaya(store.wilaya))}` : "",
    mode: envoi ? "Livraison" : pickLabel(store.ship),
    city: f.city, address: f.address,
    items: lignes.join(" · "), qty,
    subtotal: subtotal(), fee: envoi ? fee() : 0, total: subtotal() + (envoi ? fee() : 0),
    note: f.note,
  };
}

/* Apps Script ne renvoie parfois pas l'en-tête CORS : la réponse peut être
   illisible alors que la ligne est déjà écrite. On retente à l'aveugle, la
   référence fait office de garde-fou contre le doublon. Les motifs d'échec
   sont renvoyés pour pouvoir diagnostiquer la feuille. */
async function sendToSheets(payload){
  const body = JSON.stringify(payload);
  const opts = mode => ({
    method:"POST", mode, body,
    headers:{ "Content-Type":"text/plain;charset=utf-8" },
    signal: AbortSignal.timeout ? AbortSignal.timeout(15000) : undefined,
  });
  let motif = "";
  try {
    const r = await fetch(SHEETS_URL, opts("cors"));
    const j = await r.json();
    if (j && j.ok) return { ok:true, why:"lu" };
    return { ok:false, why:"script:" + ((j && j.error) || "reponse invalide") };
  } catch (e){
    motif = e && e.name === "TimeoutError" ? "delai depasse" : ((e && e.name) || "reseau");
  }
  try {
    await fetch(SHEETS_URL, opts("no-cors"));
    return { ok:true, why:"aveugle (" + motif + ")" };
  } catch (e){
    return { ok:false, why:motif + " + " + ((e && e.name) || "reseau") };
  }
}

const wilayaOptions = selected => WILAYAS.map(w =>
  `<option value="${w[0]}"${w[0] === +selected ? " selected" : ""}>${w[0]} — ${esc(wname(w))}</option>`).join("");

function paintWilayaSelects(){
  $("#wilaya").innerHTML = wilayaOptions(store.wilaya);
  $("#coWilaya").innerHTML = wilayaOptions(store.wilaya);
}

function paintSummary(){
  const rows = Object.entries(store.cart).map(([id,q]) => {
    const p = byId(id);
    return p ? `<div><span>${esc(pname(p))} ×${q}</span><b>${da(p.price * q)}</b></div>` : "";
  }).join("");
  $("#coSummary").innerHTML = `
    ${rows}
    <div><span>${esc(t("sum.shipping"))}</span><b>${fee() === 0 ? esc(t("sum.free")) : da(fee())}</b></div>
    <div class="sum-total"><span>${esc(t("sum.total"))}</span><b>${da(subtotal() + fee())}</b></div>`;
  const pickup = store.ship !== "wilaya";
  $("#coWilayaField").hidden = pickup;
  $("#coCity").placeholder = pickup ? t("co.cityPhPick", null, t("co.cityPh")) : t("co.cityPh");
}

function openCheckout(){
  if (!cartQty()){ toast(t("toast.emptyCart"), ICON.warn); return; }
  paintWilayaSelects();
  $("#cart").classList.remove("in");
  paintSummary();
  openPanel($("#checkout"));
}

async function submitOrder(){
  const g = n => $(`#form [name="${n}"]`);
  const f = {
    name:g("name").value.trim(), phone:g("phone").value.trim(), city:g("city").value.trim(),
    address:g("address").value.trim(), note:g("note").value.trim(),
  };
  const missing = [g("city"), g("name"), g("phone")].filter(el => !el.value.trim());
  if (missing.length){
    missing.forEach(el => {
      el.style.borderColor = "#C57B7B";
      el.addEventListener("input", () => { el.style.borderColor = ""; }, { once:true });
    });
    missing[0].focus({ preventScroll:true });
    toast(t("toast.required"), ICON.warn);
    return;
  }
  if (!SHEETS_URL){
    toast(t("toast.noSheets", null, "Le site n'est pas relié à ta feuille Google"), ICON.warn);
    return;
  }

  const text = orderText(f);
  const btn = $('#form [type="submit"]'), lbl = btn.querySelector("span"), was = lbl.textContent;
  const ref = orderRef();
  btn.disabled = true;
  lbl.textContent = t("co.sending", null, "Envoi en cours…");
  const envoi = await sendToSheets(orderPayload(f, ref));
  btn.disabled = false;
  lbl.textContent = was;

  // Rien n'est perdu en cas d'échec : le formulaire reste ouvert, on réessaie.
  if (!envoi.ok){
    console.warn("[lym] envoi feuille échoué ·", envoi.why, ref);
    toast(t("toast.sendFail", null, "Envoi échoué") + " · " + envoi.why, ICON.warn);
    return;
  }

  const avant = Object.keys(store.cart);
  closeAll();
  store.cart = {};
  save("lym_cart_v1", store.cart);
  avant.forEach(patchCard);
  renderCart(); bump();
  $("#okRef").textContent = ref;
  $("#okText").value = text;
  openPanel($("#confirm"));
}

/* ─────────── Menu mobile ─────────── */

function toggleSheet(force){
  const s = $("#sheet"), on = force ?? !s.classList.contains("is-open");
  s.classList.toggle("is-open", on);
  $("#burger").setAttribute("aria-expanded", String(on));
}

/* ─────────── Contenus statiques ─────────── */

function buildStatics(){
  $("#year").textContent = new Date().getFullYear();

  const bits = ["mq.1","mq.2","mq.3","mq.4","mq.5"].map(k => t(k));
  const run = bits.map(b => `<span class="marquee__item">${esc(b)}<i></i></span>`).join("");
  $("#marquee").innerHTML = run + run;

  $("#catGrid").innerHTML = CATS.map(c => `
    <button class="cat" data-cat="${c.id}" aria-label="${esc(t("a.cat", { label: catLabel(c.id) }))}">
      <img src="${c.img}" alt="" loading="lazy">
      <span class="cat__veil"></span>
      <span class="cat__go"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></span>
      <span class="cat__body"><p>${esc(catBlurb(c.id))}</p><h3>${esc(catLabel(c.id))}</h3></span>
    </button>`).join("");

  $("#pills").innerHTML = [{ id:"tout" }, ...CATS]
    .map(c => `<button class="pill" role="tab" aria-selected="false" data-cat="${c.id}"${c.id === "tout" ? "" : ` aria-label="${esc(t("a.cat", { label: catLabel(c.id) }))}"`}>${esc(c.id === "tout" ? t("shop.all") : catLabel(c.id))}</button>`).join("");

  $("#sheetCats").innerHTML = CATS.map(c => `<a href="#boutique" data-cat="${c.id}">${esc(catLabel(c.id))}</a>`).join("");
  $("#footerCats").innerHTML = CATS.map(c => `<li><a href="#boutique" data-cat="${c.id}">${esc(catLabel(c.id))}</a></li>`).join("");
  paintWilayaSelects();

  const FAQ = [1,2,3,4,5,6].map(i => [t("faq.q" + i), t("faq.a" + i)]);
  $("#faqList").innerHTML = FAQ.map(([q,a],i) => `
    <div class="acc">
      <button class="acc__q" aria-expanded="false" aria-controls="faq${i}">
        <span>${esc(q)}</span>
        <span class="acc__ic"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="acc__a" id="faq${i}"><p>${esc(a)}</p></div>
    </div>`).join("");
}

/* ─────────── Événements ─────────── */

function wire(){
  addEventListener("scroll", () => $("#nav").classList.toggle("is-stuck", scrollY > 26), { passive:true });

  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeAll);
  $("#scrim").addEventListener("click", closeAll);
  $("#burger").addEventListener("click", () => toggleSheet());
  $("#cartShop").addEventListener("click", () => { closeAll(); scrollToShop(); });
  $("#toCheckout").addEventListener("click", openCheckout);
  $$("[data-close]").forEach(b => b.addEventListener("click", closeAll));
  $$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) closeAll(); }));
  addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

  $("#cartBody").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.inc) setQty(b.dataset.inc, store.cart[b.dataset.inc] + 1);
    if (b.dataset.dec) setQty(b.dataset.dec, store.cart[b.dataset.dec] - 1);
    if (b.dataset.del) remove(b.dataset.del);
  });
  $("#shipOpts").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    store.ship = b.dataset.ship;
    save("lym_ship_v1", store.ship);
    renderCart();
    if ($("#checkout").classList.contains("in")) paintSummary();
  });
  $("#wilaya").addEventListener("change", e => {
    store.wilaya = e.target.value;
    save("lym_wilaya_v1", store.wilaya);
    renderCart();
  });

  $("#grid").addEventListener("click", e => {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn){ add(addBtn.dataset.add); return; }
    const fav = e.target.closest("[data-fav]");
    if (fav){
      const id = fav.dataset.fav;
      if (store.favs.has(id)) store.favs.delete(id); else store.favs.add(id);
      save("lym_favs_v1", [...store.favs]);
      const on = store.favs.has(id);
      fav.classList.toggle("is-on", on);
      fav.setAttribute("aria-pressed", String(on));
      toast(on ? t("toast.favOn") : t("toast.favOff"));
      return;
    }
    const q = e.target.closest("[data-quick]");
    if (q) quick(q.dataset.quick);
  });

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    e.preventDefault();
    store.filter = b.dataset.cat;
    if (store.filter !== "tout"){ store.query = ""; $("#search").value = ""; }
    renderGrid();
    toggleSheet(false);
    if (!b.classList.contains("pill")) scrollToShop();
  });
  $("#search").addEventListener("input", e => { store.query = e.target.value; renderGrid(); });
  $("#sort").addEventListener("change", e => { store.sort = e.target.value; renderGrid(); });
  $("#resetBtn").addEventListener("click", () => {
    store.filter = "tout"; store.query = ""; $("#search").value = ""; renderGrid();
  });

  $("#form").addEventListener("submit", e => { e.preventDefault(); submitOrder(); });
  $("#coWilaya").addEventListener("change", e => {
    store.wilaya = e.target.value;
    save("lym_wilaya_v1", store.wilaya);
    paintSummary();
    renderCart();
  });

  $("#faqList").addEventListener("click", e => {
    const q = e.target.closest(".acc__q"); if (!q) return;
    const acc = q.parentElement, panel = acc.querySelector(".acc__a");
    const wasOpen = acc.classList.contains("open");
    $$("#faqList .acc").forEach(a => {
      a.classList.remove("open");
      a.querySelector(".acc__q").setAttribute("aria-expanded","false");
      a.querySelector(".acc__a").style.maxHeight = "";
    });
    if (!wasOpen){
      acc.classList.add("open");
      q.setAttribute("aria-expanded","true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* ─────────── Démarrage ─────────── */

buildStatics();
wire();
renderGrid();
bump();

document.addEventListener("lym:lang", () => {
  buildStatics();
  renderGrid();
  renderCart();
  bump();
  if ($("#checkout").classList.contains("in")) paintSummary();
  if (openQuick && $("#quick").classList.contains("in")) quick(openQuick);
});

const revealIO = new IntersectionObserver((es,o) => es.forEach(e => {
  if (!e.isIntersecting) return;
  o.unobserve(e.target);
  e.target.classList.add("in");
}), { threshold:.1, rootMargin:"0px 0px -5% 0px" });
$$("[data-reveal]").forEach((el,i) => { el.style.setProperty("--i", i % 5); revealIO.observe(el); });

// Filet de sécurité : rien ne doit rester invisible si l'observateur ne déclenche pas.
const sweep = () => {
  const h = innerHeight || document.documentElement.clientHeight;
  $$("[data-reveal]:not(.in),#grid .card:not(.in)").forEach(el => {
    if (el.getBoundingClientRect().top < h * .96) el.classList.add("in");
  });
};
addEventListener("load", sweep);
setTimeout(sweep, 1200);

})();
