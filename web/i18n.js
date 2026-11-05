/* ═══════════ i18n — FR / AR / EN ═══════════ */
/* Les textes du HTML sont rédigés en français : ils servent de langue par défaut.
   Seules les clés rendues par app.js ont une entrée "fr" explicite. */
window.I18N = (() => {
  "use strict";

  const KEY = "lym_lang_v1";
  const LOCALE = { fr:"fr-FR", ar:"ar-DZ-u-nu-latn", en:"en-GB" };
  const NUMLOC = { fr:"fr-FR", ar:"fr-FR", en:"en-GB" };
  const UNIT   = { fr:"DA", ar:"دج", en:"DA" };

  const TR = {
    fr:{
      "cat.parures":"Parures",        "cat.packs":"Packs",           "cat.bracelets":"Bracelets",
      "cat.colliers":"Colliers",      "cat.boucles":"Boucles",       "cat.bagues":"Bagues",
      "cat.montres":"Montres",
      "catb.parures":"Ensemble complet","catb.packs":"Écrins & duos","catb.bracelets":"Perles & chaînes",
      "catb.colliers":"Fins & statement","catb.boucles":"Créoles & puces","catb.bagues":"Empilables",
      "catb.montres":"Quartz & acier",
      "mq.1":"Livraison 69 wilayas","mq.2":"Retrait gratuit USTHB & ESAA","mq.3":"Paiement à la livraison",
      "mq.4":"Parures · Packs · Bracelets · Colliers · Boucles · Bagues · Montres","mq.5":"Commande en 30 secondes",
      "sort.featured":"Nos favoris","sort.asc":"Prix croissant","sort.desc":"Prix décroissant","sort.new":"Nouveautés",
      "faq.q1":"Comment passer commande ?",
      "faq.a1":"Ajoute tes pièces au panier, remplis le petit formulaire et envoie : la commande arrive directement chez la vendeuse. Elle confirme le stock, le lieu et le délai juste après.",
      "faq.q2":"Quels sont les frais de livraison ?",
      "faq.a2":"400 DA pour le centre, 500 DA pour l'est et l'ouest, 650 DA pour le sud et 850 DA pour le grand sud. Le montant exact s'affiche dans le panier dès que tu choisis ta wilaya.",
      "faq.q3":"Le retrait USTHB et ESAA est vraiment gratuit ?",
      "faq.a3":"Oui, à 100 %. On se cale sur un créneau par message et tu récupères ta commande sur le campus, sans frais de livraison.",
      "faq.q4":"Comment se fait le paiement ?",
      "faq.a4":"Paiement à la livraison partout en Algérie : tu règles au livreur. En main propre sur les campus, ou via CCP / BaridiMob si tu préfères avant l'envoi.",
      "faq.q5":"Les bijoux noircissent-ils ?",
      "faq.a5":"Les pièces sont plaquées or 18 ct sans nickel. Évite le contact direct avec parfum, crème et eau de mer, et range-les dans leur pochette : c'est ce qui leur garde leur éclat.",
      "faq.q6":"Puis-je changer d'avis ?",
      "faq.a6":"Écris-nous sous 48 h. Un article non porté, dans son emballage d'origine, est échangé ou remboursé. Les pièces personnalisées (lettre, taille) ne sont pas reprises.",
      "shop.all":"Tout","shop.count.one":"{n} accessoire","shop.count.other":"{n} accessoires",
      "a.mainnav":"Navigation principale","a.footerCats":"Catégories","a.pills":"Filtrer par catégorie",
      "card.add":"Ajouter","card.inCart":"Au panier · {n}","card.stock":"en stock",
      "a.fav":"Mettre {name} dans mes coups de cœur","a.cat":"Filtrer sur {label}",
      "cart.meta.one":"{n} article au panier","cart.meta.other":"{n} articles au panier","cart.remove":"Retirer","cart.dec":"Diminuer la quantité",
      "cart.inc":"Augmenter la quantité","cart.free":"Gratuite","cart.freeHint":"Livraison <b>offerte</b> — {pick}",
      "sum.shipping":"Livraison","sum.free":"Offerte","sum.total":"Total à régler",
      "qv.ship":"Livraison 69 wilayas · 1 à 5 jours ouvrés","qv.material":"Plaqué or 18 ct, sans nickel",
      "qv.add":"Ajouter au panier","qv.close":"Fermer","qv.dec":"Diminuer","qv.inc":"Augmenter",
      "pick.usthb":"Retrait USTHB (Bab Ezzouar)","pick.esaa":"Retrait ESAA (Ben Aknoun)",
      "co.cityPh":"Bab Ezzouar, Mohammadia…","co.cityPhPick":"Campus ou point de rendez-vous",
      "toast.emptyCart":"Ton panier est vide",
      "ord.head":"🛍️ Commande — Accessories by LYM","ord.when":"Le {d} à {t}","ord.sep":"———————————————",
      "ord.line":"• {name} — quantité {q} × {p} = {tot}","ord.count":"Articles : {n}",
      "ord.sub":"Sous-total : {v}","ord.recep":"Réception : {v}","ord.recepW":"Livraison à {w} (wilaya {c})",
      "ord.fee":"Livraison : {v}","ord.feeFree":"offerte","ord.total":"TOTAL À RÉGLER : {v}",
      "ord.who":"———— Infos client ————","ord.name":"👤 {v}","ord.phone":"📞 {v}",
      "ord.addr":"📍 {w} — {c}{a}","ord.pickup":"🎓 {p} — {c}{a}","ord.note":"📝 {v}",
      "ord.thanks":"Merci de me confirmer la disponibilité et le délai ✨",
      "toast.added":"{name} ajouté au panier","toast.favOn":"Ajouté à tes coups de cœur","toast.favOff":"Retiré des coups de cœur",
      "toast.required":"Nom, téléphone et lieu de retrait sont requis",
      "co.sending":"Envoi en cours…","toast.sendFail":"Envoi échoué","toast.noSheets":"Le site n'est pas relié à ta feuille Google",
      "ok.aria":"Récapitulatif de commande",
      "meta.title":"Accessories by LYM — Bijoux & accessoires fantaisie · Livraison 69 wilayas",
      "meta.desc":"Parures, packs, bracelets, colliers, boucles d'oreilles, bagues et montres. Livraison dans les 69 wilayas d'Algérie, gratuite à l'USTHB et à l'ESAA.",
      "a.skip":"Aller à la boutique","a.home":"Accessories by LYM, accueil","a.lang":"Changer de langue",
      "a.cart":"Ouvrir le panier","a.menu":"Ouvrir le menu","a.closeCart":"Fermer le panier","a.close":"Fermer",
      "a.wilaya":"Choisir ta wilaya","shop.searchAria":"Rechercher un accessoire","shop.sortAria":"Trier les produits",
      "shop.searchPh":"Rechercher…","co.namePh":"Lym. …","co.phonePh":"05 51 22 33 44",
      "co.addressPh":"Cité, rue… ou « retrait USTHB samedi 14h »","co.notePh":"Couleur, taille, question…",
      "alt.logo":"Accessories by LYM","alt.lookbook":"Mains portant bagues, bracelets et montres Accessories by LYM",
    },

    ar:{
      "a.skip":"روحي إلى المتجر","a.home":"Accessories by LYM، الصفحة الرئيسية","a.lang":"تغيير اللغة",
      "a.cart":"افتحي السلة","a.menu":"افتحي القائمة","a.closeCart":"إغلاق السلة","a.close":"إغلاق",
      "a.wilaya":"اختاري ولايتك","a.mainnav":"القائمة الرئيسية","a.footerCats":"الفئات",
      "nav.shop":"المتجر","nav.collections":"التشكيلات","nav.shipping":"التوصيل","nav.info":"معلومات","nav.contact":"اتصلي بنا",
      "cta.contactIg":"اكتبيلنا على إنستغرام","cta.collection":"اكتشفي التشكيلة",
      "hero.eyebrow":"إكسسوارات · ساعات · الجزائر",
      "hero.title":"<span class=\"il\">تفاصيل</span> صغيرة<br>تغيّر <em>كل</em> إطلالتك",
      "hero.lede":"أطقم، علب هدايا، أساور، قلائد، أقراط، خواتم وساعات مختارة بعناية. اطلبي في ثوانٍ وادفعي عند الاستلام.",
      "hero.chip1":"<b>69 ولاية</b> توصيل","hero.chip2":"<b>مجاني</b> USTHB و ESAA","hero.chip3":"<b>الدفع</b> عند الاستلام",
      "alt.logo":"شعار Accessories by LYM","alt.lookbook":"يدين تلبس خواتم وأساور وساعات Accessories by LYM",
      "hero.script":"تفاصيل صغيرة، تأثير كبير","foot.tag":"تفاصيل صغيرة، تأثير كبير.",
      "cats.title":"تسوّقي حسب <em>التشكيلة</em>","cats.lede":"اختاري فئة، والمتجر يفلتر مباشرة.",
      "shop.title":"كل <em>القطع</em>","shop.lede":"الأسعار بالدينار الجزائري · المخزون مُحدَّث باستمرار.",
      "shop.searchPh":"ابحثي…","shop.searchAria":"ابحثي عن إكسسوار","shop.sortAria":"ترتيب المنتجات",
      "shop.empty":"لا يوجد غرض مطابق لبحثك.","shop.reset":"عرض الكل",
      "why.badge1":"وفّري","why.badge2":"وبلا ما تخسري ستايلك",
      "why.title":"علاش <em>LYM</em>؟",
      "why.1t":"اختيار، وليس مخزون","why.1p":"كل قطعة مختارة لتقعد معاك يوميًا: طلاء ذهب، أقفال قوية، ولؤلؤ لا يبهت بعد يومين.",
      "why.2t":"اطلبي في 30 ثانية","why.2p":"زّيدي للسلة، عمّري الفورمولير وابعتي — طلبك يوصل للبائعة مباشرة. نأكدّلك التوفر والمدة في وقتها.",
      "why.3t":"تدفقي وقت ما تستلمّي","why.3p":"الدفع عند الاستلام في كل الجزائر، أو باليد في USTHB و ESAA — بلا مصاريف.",
      "ship.title":"التوصيل و<em>الاستلام</em>","ship.lede":"في كل ولايات الجزائر، ومجاني في الحرمين الجامعيين.",
      "ship.69":"69 ولاية",
      "ship.p1":"شحن خلال 24–48 ساعة، والاستلام بين يوم وخمسة أيام عمل حسب الوجهة. المصاريف تبان في السلة أول ما تختاري ولايتك.",
      "zone.centre":"الوسط","zone.estouest":"الشرق / الغرب","zone.sud":"الجنوب","zone.grandsud":"الجنوب الكبير",
      "ship.free":"مجاني","ship.campus":"استلام من الحرم",
      "ship.p2":"لا تدفعين التوصيل: تستلمين طلبك في الحرم الجامعي، في الموعد المتفق عليه بالرسائل.",
      "ship.usthb":"باب الزوار — الجزائر","ship.esaa":"المدرسة العليا للفنون — بن عكنون",
      "ship.slot":"حدّدي موعدًا ←","ship.how":"كيف يتم الطلب",
      "ship.s1":"<b>تختارين</b> قطعك وتضيفينها إلى السلة.","ship.s2":"<b>تبعتين</b> طلبك من الموقع، بلا دفع أونلاين.",
      "ship.s3":"<b>نأكد</b> المخزون والطريقة والمدة.","ship.s4":"<b>تدفقين</b> عند الاستلام أو باليد.",
      "faq.title":"معلومات <em>مفيدة</em>",
      "faq.q1":"كيفاش نطلب؟",
      "faq.a1":"زّيدي قطعك للسلة، عمّري الفورمولير الصغير وابعتي: الطلب يوصل للبائعة مباشرة. تّأكدّلك المخزون، المكان والمدة في وقتها.",
      "faq.q2":"قديش مصاريف التوصيل؟",
      "faq.a2":"400 دج للوسط، 500 دج للشرق والغرب، 650 دج للجنوب و850 دج للجنوب الكبير. المبلغ الدقيق يبان في السلة أول ما تختاري ولايتك.",
      "faq.q3":"الاستلام من USTHB و ESAA مجاني بصراحة؟",
      "faq.a3":"نعم، 100 %. نتفقو على موعد بالرسائل وتستلمين طلبك في الحرم الجامعي بلا مصاريف التوصيل.",
      "faq.q4":"كيفاش ندفّع؟",
      "faq.a4":"الدفع عند الاستلام في كل الجزائر: تدفّقي للموصّل. أو باليد في الحرم، أو عبر CCP / BaridiMob إذا حبّيتي قبل الشحن.",
      "faq.q5":"الإكسسوارات يولّيو سود؟",
      "faq.a5":"القطع مطليّة بالذهب 18 قيراط وبلا نيكل. جنّبيها العطر والكريم وماء البحر وخليها في الكيس تبعها: هذا اللي يحافظ على اللمعة.",
      "faq.q6":"نبدّل رأيي؟",
      "faq.a6":"راسلينا خلال 48 ساعة. أي قطعة ما استعملتهاش وفي علبتها الأصلية تتبدّل أو ترجع فلوسها. القطع المفصّلة (حرف، مقاس) ما ترجعش.",
      "contact.eyebrow":"سؤال، أو قطعة مفصّلة على ذوقك؟","contact.title":"راسلينا <em>مباشرة</em>",
      "contact.lede":"عادةً الرد في ساعات، من الأحد إلى الخميس.",
      "footer.l1":"توصيل 69 ولاية","footer.l2":"استلام USTHB و ESAA","footer.l3":"الدفع والمدة","footer.l4":"اتصلي بنا",
      "footer.city":"الجزائر العاصمة، الجزائر","footer.note":"الأسعار بالدينار الجزائري (دج) · الدفع عند الاستلام",
      "cart.title":"سلّتك","cart.empty":"سلّتك فارغة.","cart.browse":"تصفّحي المتجر",
      "cart.mode":"طريقة الاستلام","cart.freeShort":"مجاني","cart.wilaya":"ولاية",
      "cart.sub":"المجموع الفرعي","cart.shipping":"التوصيل","cart.total":"الإجمالي","cart.checkout":"إتمام الطلب",
      "cart.note":"الطلب يوصل للبائعة مباشرة — نأكدّولك في وقتها.",
      "co.title":"تأكيد الطلب","co.name":"الاسم واللقب","co.namePh":"ليم. …",
      "co.phone":"الهاتف","co.phonePh":"05 51 22 33 44","co.wilaya":"الولاية",
      "co.city":"البلدية / نقطة الاستلام","co.cityPh":"باب الزوار، المحمدية…",
      "co.address":"العنوان أو الموعد المتفق عليه","co.addressPh":"حي، شارع… أو «استلام USTHB السبت 14h»",
      "co.note":"ملاحظة للبائعة","co.notePh":"لون، مقاس، سؤال…","co.send":"أرسلي الطلب",
      "co.hint":"طلبك يوصل للبائعة مباشرة. لا دفع إلكتروني: التدفيع عند الاستلام أو باليد.",
      "ok.title":"تمّ تسجيل الطلب","ok.lede":"نتّصلو بيك في الرقم اللي عطيتيه باش نأكدّو المخزون، المكان والميعاد.",
      "ok.ref":"المرجع","ok.hint":"ما إتّصلوش بيك من بعد 24 ساعة؟ حطي المرجع وابعتيلنا رسالة من صفحة التواصل.",
      "ok.close":"حسنًا","ok.aria":"ملخّص الطلب",
      "co.sending":"جارٍ الإرسال…","toast.sendFail":"ما تقدّرش نبعثوه","toast.noSheets":"الموقع ما يربطوش بالورقة ديال Google",
      "gate.title":"اختاري اللغة","gate.sub":"Français · العربية · English","gate.note":"تقدرين تبدّلي اللغة في أي وقت.",
      "sort.featured":"مفضّلاتنا","sort.asc":"السعر تصاعديًا","sort.desc":"السعر تنازليًا","sort.new":"الجديد",
      "cat.parures":"أطقم","cat.packs":"علب هدايا","cat.bracelets":"أساور","cat.colliers":"قلائد",
      "cat.boucles":"أقراط","cat.bagues":"خواتم","cat.montres":"ساعات",
      "catb.parures":"طقم كامل","catb.packs":"علب وثنائيات","catb.bracelets":"لؤلؤ وسلاسل",
      "catb.colliers":"ناعمة وبارزة","catb.boucles":"دائرية ومسمرات","catb.bagues":"قابلة للتكديس","catb.montres":"كوارتز وفولاذ",
      "mq.1":"توصيل 69 ولاية","mq.2":"استلام مجاني USTHB و ESAA","mq.3":"الدفع عند الاستلام",
      "mq.4":"أطقم · علب هدايا · أساور · قلائد · أقراط · خواتم · ساعات","mq.5":"الطلب في 30 ثانية",
      "shop.all":"الكل","shop.count.one":"{n} قطعة","shop.count.other":"{n} قطع",
      "a.mainnav":"القائمة الرئيسية","a.footerCats":"الفئات","a.pills":"فلترة حسب الفئة",
      "card.add":"أضيفي","card.inCart":"في السلة · {n}","card.stock":"متوفر","ps.mo-acier":"3 قطع",
      "a.fav":"ضيفي {name} إلى المفضّلة","a.cat":"فلترة على {label}",
      "cart.meta.one":"{n} قطعة في السلة","cart.meta.other":"{n} قطع في السلة","cart.remove":"حيّدي","cart.dec":"ناقصي الكمية","cart.inc":"زيّدي الكمية",
      "cart.free":"مجاني","cart.freeHint":"توصيل <b>مجاني</b> — {pick}",
      "sum.shipping":"التوصيل","sum.free":"مجاني","sum.total":"الإجمالي المستحق",
      "qv.ship":"توصيل 69 ولاية · يوم إلى 5 أيام عمل","qv.material":"طلاء ذهب 18 قيراط، بلا نيكل",
      "qv.add":"أضيفي إلى السلة","qv.close":"إغلاق","qv.dec":"ناقصي","qv.inc":"زيّدي",
      "pick.usthb":"استلام USTHB (باب الزوار)","pick.esaa":"استلام ESAA (بن عكنون)",
      "co.cityPhPick":"الحرم الجامعي أو نقطة اللقاء","toast.emptyCart":"سلّتك فارغة",
      "ord.head":"🛍️ طلب — Accessories by LYM","ord.when":"في {d} على {t}","ord.sep":"———————————————",
      "ord.line":"• {name} — كمية {q} × {p} = {tot}","ord.count":"عدد القطع : {n}",
      "ord.sub":"المجموع الفرعي : {v}","ord.recep":"الاستلام : {v}","ord.recepW":"توصيل إلى {w} (ولاية {c})",
      "ord.fee":"التوصيل : {v}","ord.feeFree":"مجاني","ord.total":"الإجمالي : {v}",
      "ord.who":"———— معلومات الزبونة ————","ord.name":"👤 {v}","ord.phone":"📞 {v}",
      "ord.addr":"📍 {w} — {c}{a}","ord.pickup":"🎓 {p} — {c}{a}","ord.note":"📝 {v}",
      "ord.thanks":"أكدّيلي من فضلك التوفر والمدة ✨",
      "toast.added":"{name} تزاد للسلة","toast.favOn":"تزيد للمفضّلة","toast.favOff":"تحيّد من المفضّلة",
      "toast.required":"الاسم، الهاتف ومكان الاستلام ضروريين",
      "meta.title":"Accessories by LYM — إكسسوارات وساعات · توصيل 69 ولاية",
      "meta.desc":"أطقم، علب هدايا، أساور، قلائد، أقراط، خواتم وساعات. توصيل في 69 ولاية في الجزائر، مجاني في USTHB و ESAA.",
    },

    en:{
      "a.skip":"Skip to the shop","a.home":"Accessories by LYM, home","a.lang":"Change language",
      "a.cart":"Open cart","a.menu":"Open menu","a.closeCart":"Close cart","a.close":"Close",
      "a.wilaya":"Choose your wilaya","a.mainnav":"Main navigation","a.footerCats":"Categories",
      "nav.shop":"Shop","nav.collections":"Collections","nav.shipping":"Delivery","nav.info":"Info","nav.contact":"Contact",
      "cta.contactIg":"Message us on Instagram","cta.collection":"See the collection",
      "hero.eyebrow":"Fashion jewellery · Watches · Algeria",
      "hero.title":"<span class=\"il\">Details</span> that<br>change <em>everything</em>",
      "hero.lede":"Suites, gift packs, bracelets, necklaces, earrings, rings and watches, picked with care. Order in seconds, pay on delivery.",
      "hero.chip1":"<b>69 wilayas</b> delivered","hero.chip2":"<b>Free</b> USTHB & ESAA pickup","hero.chip3":"<b>Pay</b> on delivery",
      "alt.logo":"Accessories by LYM logo","alt.lookbook":"Hands wearing Accessories by LYM rings, bracelets and watches",
      "hero.script":"little details, big impact","foot.tag":"little details, big impact.",
      "cats.title":"Shop by <em>collection</em>","cats.lede":"Pick a category, the shop filters instantly.",
      "shop.title":"The <em>shop</em>","shop.lede":"Prices in Algerian dinars · stock updated regularly.",
      "shop.searchPh":"Search…","shop.searchAria":"Search an accessory","shop.sortAria":"Sort products",
      "shop.empty":"No accessory matches your search.","shop.reset":"Show all",
      "why.badge1":"Save more","why.badge2":"same full look",
      "why.title":"Why <em>LYM</em>?",
      "why.1t":"Curated, not warehoused","why.1p":"Every piece is chosen to be worn daily: gold-plated finish, solid clasps, pearls that don't dull after two days.",
      "why.2t":"Order in 30 seconds","why.2p":"Add to cart, fill in the form and send — your order reaches the seller directly. We confirm stock and timing right after.",
      "why.3t":"You pay when you receive","why.3p":"Cash on delivery anywhere in Algeria, or in person at USTHB and ESAA — no fee.",
      "ship.title":"Delivery &amp; <em>pickup</em>","ship.lede":"Anywhere in Algeria, and free on both campuses.",
      "ship.69":"69 wilayas",
      "ship.p1":"Shipped within 24–48 h, delivered in 1 to 5 working days depending on the destination. Fees show in the cart as soon as you pick your wilaya.",
      "zone.centre":"Central","zone.estouest":"East / West","zone.sud":"South","zone.grandsud":"Deep South",
      "ship.free":"Free","ship.campus":"Campus pickup",
      "ship.p2":"Nothing to pay for delivery: collect your order on campus, at a time we agree by message.",
      "ship.usthb":"Bab Ezzouar — Algiers","ship.esaa":"Higher School of Arts — Ben Aknoun",
      "ship.slot":"Agree a time →","ship.how":"How it works",
      "ship.s1":"<b>You pick</b> your pieces and add them to the cart.","ship.s2":"<b>You send</b> your order from the site, no online payment.",
      "ship.s3":"<b>We confirm</b> stock, method and timing.","ship.s4":"<b>You pay</b> on delivery or in person.",
      "faq.title":"Good to <em>know</em>",
      "faq.q1":"How do I order?",
      "faq.a1":"Add your pieces to the cart, fill in the short form and send — the order reaches the seller directly. She confirms stock, place and timing right after.",
      "faq.q2":"What are the delivery fees?",
      "faq.a2":"400 DA central, 500 DA east and west, 650 DA south and 850 DA for the deep south. The exact amount shows in the cart as soon as you pick your wilaya.",
      "faq.q3":"Is campus pickup really free?",
      "faq.a3":"Yes, 100 %. We agree a time by message and you collect your order on campus, with no delivery fee.",
      "faq.q4":"How do I pay?",
      "faq.a4":"Cash on delivery anywhere in Algeria — you pay the courier. Or in person on campus, and by CCP / BaridiMob before shipping if you prefer.",
      "faq.q5":"Will the jewellery tarnish?",
      "faq.a5":"Pieces are 18 ct gold-plated and nickel free. Keep perfume, cream and sea water off them and store them in their pouch — that's what keeps the shine.",
      "faq.q6":"Can I change my mind?",
      "faq.a6":"Message us within 48 h. An unworn item in its original packaging is exchanged or refunded. Personalised pieces (letter, size) can't be taken back.",
      "contact.eyebrow":"A question, or a made-to-order piece?","contact.title":"Message us <em>directly</em>",
      "contact.lede":"Usually a reply within a few hours, Sunday to Thursday.",
      "footer.l1":"69-wilaya delivery","footer.l2":"USTHB & ESAA pickup","footer.l3":"Payment & timing","footer.l4":"Contact us",
      "footer.city":"Algiers, Algeria","footer.note":"Prices in Algerian dinars (DA) · Payment on delivery",
      "cart.title":"Your cart","cart.empty":"Your cart is empty.","cart.browse":"Browse the shop",
      "cart.mode":"Reception method","cart.freeShort":"free","cart.wilaya":"Wilaya",
      "cart.sub":"Subtotal","cart.shipping":"Delivery","cart.total":"Total","cart.checkout":"Checkout",
      "cart.note":"Your order reaches the seller directly — we confirm right away.",
      "co.title":"Finish your order","co.name":"Full name","co.namePh":"Lym. …",
      "co.phone":"Phone","co.phonePh":"05 51 22 33 44","co.wilaya":"Wilaya",
      "co.city":"Town / pickup point","co.cityPh":"Bab Ezzouar, Mohammadia…",
      "co.address":"Address or agreed time slot","co.addressPh":"Block, street… or “USTHB pickup Saturday 2pm”",
      "co.note":"Note for the seller","co.notePh":"Colour, size, question…","co.send":"Send my order",
      "co.hint":"Your order reaches the seller directly. No online payment: you pay on delivery or in person.",
      "ok.title":"Order recorded","ok.lede":"We'll call you back on the number you gave to confirm stock, place and time slot.",
      "ok.ref":"Reference","ok.hint":"No news within 24 h? Keep this reference and message us from the Contact page.",
      "ok.close":"Done","ok.aria":"Order recap",
      "co.sending":"Sending…","toast.sendFail":"Send failed","toast.noSheets":"The site isn't linked to your Google Sheet",
      "gate.title":"Choose your language","gate.sub":"Français · العربية · English","gate.note":"You can switch language any time.",
      "sort.featured":"Our picks","sort.asc":"Price low to high","sort.desc":"Price high to low","sort.new":"New in",
      "cat.parures":"Suites","cat.packs":"Gift packs","cat.bracelets":"Bracelets","cat.colliers":"Necklaces",
      "cat.boucles":"Earrings","cat.bagues":"Rings","cat.montres":"Watches",
      "catb.parures":"Full set","catb.packs":"Boxes & duos","catb.bracelets":"Pearls & chains",
      "catb.colliers":"Fine & statement","catb.boucles":"Hoops & studs","catb.bagues":"Stackable","catb.montres":"Quartz & steel",
      "mq.1":"Delivery to 69 wilayas","mq.2":"Free USTHB & ESAA pickup","mq.3":"Payment on delivery",
      "mq.4":"Suites · Packs · Bracelets · Necklaces · Earrings · Rings · Watches","mq.5":"Order in 30 seconds",
      "shop.all":"All","shop.count.one":"{n} accessory","shop.count.other":"{n} accessories",
      "a.mainnav":"Main navigation","a.footerCats":"Categories","a.pills":"Filter by category",
      "card.add":"Add","card.inCart":"In cart · {n}","card.stock":"in stock","ps.mo-acier":"3 pieces",
      "a.fav":"Add {name} to your favourites","a.cat":"Filter by {label}",
      "cart.meta.one":"{n} item in the cart","cart.meta.other":"{n} items in the cart","cart.remove":"Remove","cart.dec":"Decrease quantity","cart.inc":"Increase quantity",
      "cart.free":"Free","cart.freeHint":"Delivery <b>free</b> — {pick}",
      "sum.shipping":"Delivery","sum.free":"Free","sum.total":"Total due",
      "qv.ship":"69-wilaya delivery · 1 to 5 working days","qv.material":"18 ct gold-plated, nickel free",
      "qv.add":"Add to cart","qv.close":"Close","qv.dec":"Less","qv.inc":"More",
      "pick.usthb":"USTHB pickup (Bab Ezzouar)","pick.esaa":"ESAA pickup (Ben Aknoun)",
      "co.cityPhPick":"Campus or meeting point",
      "toast.emptyCart":"Your cart is empty",
      "ord.head":"🛍️ Order — Accessories by LYM","ord.when":"On {d} at {t}","ord.sep":"———————————————",
      "ord.line":"• {name} — qty {q} × {p} = {tot}","ord.count":"Items : {n}",
      "ord.sub":"Subtotal : {v}","ord.recep":"Pickup : {v}","ord.recepW":"Delivery to {w} (wilaya {c})",
      "ord.fee":"Delivery : {v}","ord.feeFree":"free","ord.total":"TOTAL : {v}",
      "ord.who":"———— Customer ————","ord.name":"👤 {v}","ord.phone":"📞 {v}",
      "ord.addr":"📍 {w} — {c}{a}","ord.pickup":"🎓 {p} — {c}{a}","ord.note":"📝 {v}",
      "ord.thanks":"Please confirm availability and timing ✨",
      "toast.added":"{name} added to the cart","toast.favOn":"Added to your favourites","toast.favOff":"Removed from favourites",
      "toast.required":"Name, phone and pickup place are required",
      "meta.title":"Accessories by LYM — Fashion jewellery & watches · 69 wilayas",
      "meta.desc":"Suites, gift packs, bracelets, necklaces, earrings, rings and watches. Delivery across 69 Algerian wilayas, free at USTHB and ESAA.",
    },
  };

  /* Noms arabes des 58 wilayas, dans l'ordre des codes. */
  const WIL_AR = "أدرار|الشلف|الأغواط|أم البواقي|باتنة|بجاية|بسكرة|بشار|البليدة|البويرة|تمنراست|تبسة|تلمسان|تيارت|تيزي وزو|الجزائر|الجلفة|جيجل|سطيف|سعيدة|سكيكدة|سيدي بلعباس|عنابة|قالمة|قسنطينة|المدية|مستغانم|المسيلة|معسكر|ورقلة|وهران|البيض|إليزي|برج بوعريريج|بومرداس|الطارف|تندوف|تيسمسيلت|الوادي|خنشلة|سوق أهراس|تيبازة|ميلة|عين الدفلى|النعامة|عين تموشنت|غرداية|غليزان|تيميمون|برج باجي مختار|أولاد جلال|بني عباس|عين صالح|عين قزام|تقرت|جانت|المغير|المنيعة".split("|");
  WIL_AR.forEach((n,i) => { TR.ar["w." + (i+1)] = n; });

  /* Noms / descriptions / étiquettes des 17 produits. */
  const P_AR = {
    "parure-trefle":["طقم البرسيم بالصدف","قلادة وسوار وأقراط متناسقة، رسمة برسيم بالصدف الأبيض على طلاء ذهب.","الأكثر مبيعًا"],
    "parure-perle":["طقم اللؤلؤ المتألّق","قلادة لؤلؤ رقيق وأقراط متدلّبة مرصّعة.","جديد"],
    "parure-coeur":["طقم القلب الذهبي","ثلاث قطع رفيعة تلبسوها وحدها أو مع بعض، رسمة قلب.","جديد"],
    "pack-ecrin":["علبة هدية 3 قطع","سوار، أقراط وخاتم في علبة ساتان مع فيونكة — جاهزة للتقديم.","فكرة هدية"],
    "pack-duo":["طقم ثنائي للصديقات","سواران متناسقان تتقاسموهما، أقفال قابلة للتعديل.",""],
    "br-perles":["سوار لؤلؤ متعدد الصفوف","ثلاثة صفوف من اللؤلؤ الرفيع وسلاسل مذهّبة، برسيم صغير متدلّي.",""],
    "br-jonc":["إسوارة صلبة مطلّية بالذهب","إسوارة مفتوحة مصقولة، لمعة مرايا، تثبت في المعصم.",""],
    "br-chaine":["سوار سلسلة البرسيم","سلسلة رفيعة تتناوب حلقات مصقولة وبرسيم بالصدف.","متوفر ثنائي"],
    "br-stack":["مجموعة أساور البرسيم واللؤلؤ","الأساور اللي تبان في صورنا: إسوارة، لؤلؤ وسلاسل برسيم.","صورة حقيقية"],
    "cl-lettre":["قلادة بحرف","سلسلة رفيعة وحرف تختارينه — تخصيص حسب الطلب.","قابل للتخصيص"],
    "cl-baroque":["عقد باروك قصير","لؤلؤ باروك غير منتظم وفاصل مذهّبة، طول قريب من العنق.",""],
    "cl-link":["قلادة سلاسل عريضة","حلقات بيضاوية سميكة، القطعة اللي تلبّي أي تيشرت.","الأكثر مبيعًا"],
    "bo-creoles":["أقراط دائرية مبرومة","زوج أقراط دائرية وسط، شكل حبل مبروم، مسمار ضد الأكسدة.","الأكثر مبيعًا"],
    "ba-trifles":["ثلاث خواتم برسيم","ثلاثة خواتم مذهّبة برسمة برسيم وحجر، تكدّسيها كي في الصورة.","صورة حقيقية"],
    "ba-pierre":["خاتم حجر مربّع","زركونيا مربّع مركّبة بمخالب، حلقة رفيعة.","جديد"],
    "ba-fines":["ثنائي الخواتم الرفيعة","حلقتين هاديتين، واحدة ناعمة وواحدة محفورة، للسبابة والوسطى.","قطعتان"],
    "mo-acier":["ساعة فولاذ بميناء أسود","سوار فولاذ مصقول، ميناء أسود مقروء، حركة كوارتز، تقاوم الرذاذ.","كمية محدودة"],
  };
  const P_EN = {
    "parure-trefle":["Mother-of-Pearl Clover Suite","Matching necklace, bracelet and earrings, white mother-of-pearl clover on gold plate.","Best seller"],
    "parure-perle":["Radiant Pearl Suite","Freshwater pearl necklace with strass drop studs.","New"],
    "parure-coeur":["Golden Heart Suite","Three delicate pieces, worn alone or stacked, heart motif.","New"],
    "pack-ecrin":["3-Piece Gift Box Set","Bracelet, earrings and ring in a satin box with ribbon — ready to gift.","Gift idea"],
    "pack-duo":["Besties Duo Set","Two matching bracelets to share, adjustable clasps.",""],
    "br-perles":["Multi-Row Pearl Bracelet","Three rows of fine pearls and gold chains with a small clover charm.",""],
    "br-jonc":["Gold-Plated Bangle","Polished open bangle, mirror finish, sits upright on the wrist.",""],
    "br-chaine":["Clover Chain Bracelet","Fine chain alternating polished links and mother-of-pearl clovers.","Duo available"],
    "br-stack":["Clover & Pearl Stack","The exact stack from our photos: bangle, pearls and clover chains together.","Real photo"],
    "cl-lettre":["Letter Pendant Necklace","Fine chain with the letter you choose — customisation on request.","Customisable"],
    "cl-baroque":["Baroque Pearl Choker","Irregular baroque pearls with gold spacers, choker length.",""],
    "cl-link":["Chunky Link Necklace"," Thick oval links — the statement piece that dresses up a t-shirt.","Best seller"],
    "bo-creoles":["Twisted Gold Hoops","Mid-size hoops, twisted-rope finish, stainless steel post.","Best seller"],
    "ba-trifles":["3 Clover Rings Set","Three gold rings with clover and stone motifs, stacked like our photo.","Real photo"],
    "ba-pierre":["Square Stone Ring","Prong-set square zirconia on a thin band.","New"],
    "ba-fines":["Slim Rings Duo","Two discreet bands, one smooth and one textured, worn on index and middle finger.","2 pieces"],
    "mo-acier":["Steel Watch, Black Dial","Brushed steel bracelet, legible black dial, quartz movement, splash resistant.","Limited stock"],
  };
  ["ar","en"].forEach(l => {
    const src = l === "ar" ? P_AR : P_EN;
    Object.entries(src).forEach(([id,[n,d,b]]) => {
      TR[l]["pn."+id] = n; TR[l]["pd."+id] = d;
      if (b) TR[l]["pb."+id] = b;
    });
  });

  /* ─────────── Moteur ─────────── */

  const $  = (s,r=document) => r.querySelector(s);
  const $$ = (s,r=document) => [...r.querySelectorAll(s)];

  const ORIG = new Map();   // texte HTML d'origine (français rédigé)
  const ORIGPH = new Map(), ORIGARIA = new Map(), ORIGALT = new Map();
  let lang = "fr";

  const read = () => {
    try {
      const v = JSON.parse(localStorage.getItem(KEY));
      return ["fr","ar","en"].includes(v) ? v : "";
    } catch { return ""; }
  };
  const guess = () => {
    const n = (navigator.language || "fr").slice(0,2).toLowerCase();
    return n === "ar" ? "ar" : n === "en" ? "en" : "fr";
  };
  const write = l => { try { localStorage.setItem(KEY, JSON.stringify(l)); } catch {} };

  const t = (key, vars, fallback) => {
    let s = (TR[lang] || {})[key];
    if (s == null) s = TR.fr[key];
    if (s == null) return fallback != null ? fallback : key;
    if (vars) for (const k in vars) s = s.split("{" + k + "}").join(String(vars[k]));
    return s;
  };

  function remember(){
    $$("[data-i18n]").forEach(el => { if (!ORIG.has(el)) ORIG.set(el, el.innerHTML); });
    $$("[data-i18n-ph]").forEach(el => { if (!ORIGPH.has(el)) ORIGPH.set(el, el.getAttribute("placeholder") || ""); });
    $$("[data-i18n-aria]").forEach(el => { if (!ORIGARIA.has(el)) ORIGARIA.set(el, el.getAttribute("aria-label") || ""); });
    $$("[data-i18n-alt]").forEach(el => { if (!ORIGALT.has(el)) ORIGALT.set(el, el.getAttribute("alt") || ""); });
  }

  function apply(l){
    lang = l;
    const root = document.documentElement;
    root.lang = l;
    root.dir = l === "ar" ? "rtl" : "ltr";
    root.className = "lang-" + l;

    remember();

    $$("[data-i18n]").forEach(el => {
      const tr = (TR[l] || {})[el.dataset.i18n];
      el.innerHTML = tr != null ? tr : ORIG.get(el);
    });
    $$("[data-i18n-ph]").forEach(el => {
      const tr = (TR[l] || {})[el.dataset.i18nPh];
      el.setAttribute("placeholder", tr != null ? tr : ORIGPH.get(el));
    });
    $$("[data-i18n-aria]").forEach(el => {
      const tr = (TR[l] || {})[el.dataset.i18nAria];
      el.setAttribute("aria-label", tr != null ? tr : ORIGARIA.get(el));
    });
    $$("[data-i18n-alt]").forEach(el => {
      const tr = (TR[l] || {})[el.dataset.i18nAlt];
      el.setAttribute("alt", tr != null ? tr : ORIGALT.get(el));
    });

    document.title = t("meta.title");
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));
    const og = $('meta[property="og:description"]');
    if (og) og.setAttribute("content", t("meta.desc"));

    $$("#lang button").forEach(b => b.classList.toggle("is-on", b.dataset.lang === l));
    document.dispatchEvent(new CustomEvent("lym:lang", { detail:{ lang:l } }));
  }

  function setLang(l, persist = true){
    if (!["fr","ar","en"].includes(l)) return;
    if (persist) write(l);
    apply(l);
    closeGate();
  }

  /* ─────────── Écran d'accueil ─────────── */

  function gateLock(on){
    const g = $("#gate"); if (!g) return;
    [...document.body.children].forEach(el => { if (el !== g && el.tagName !== "SCRIPT") el.inert = on; });
  }

  function openGate(){
    const g = $("#gate"); if (!g) return;
    g.classList.add("in");
    g.setAttribute("aria-hidden","false");
    document.body.classList.add("gate-open");
    gateLock(true);
    // La visibilité est en transition : le focus doit attendre que la boîte soit réellement visible.
    setTimeout(() => $(`#gate .gate__opt[data-lang="${lang}"]`)?.focus({ preventScroll:true }), 80);
  }

  function closeGate(){
    const g = $("#gate"); if (!g) return;
    g.classList.remove("in");
    g.setAttribute("aria-hidden","true");
    document.body.classList.remove("gate-open");
    gateLock(false);
  }

  function init(){
    const stored = read();
    apply(stored || guess());
    $$("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    if (!stored) openGate();
  }

  document.addEventListener("DOMContentLoaded", init);

  return {
    get lang(){ return lang; },
    t, apply, setLang, openGate, closeGate,
    locale: () => LOCALE[lang],
    numLocale: () => NUMLOC[lang],
    unit: () => UNIT[lang],
    rtl: () => lang === "ar",
    pick: n => (n > 1 ? "other" : "one"),
  };
})();
