/* ==========================================================================
   ALTINO.RO — Language Toggle (RO ↔ EN)
   Default: Romanian. English exists for supplier/partner credibility only.

   ⚠️ TEXT CHANGES — where to edit:
      - Nav, footer, WhatsApp, back-to-top → edit components.js (single source)
      - Page-specific text (hero, about, product descriptions) → edit the HTML file + lang.js RO + lang.js EN
      - All three lang layers must match or the language engine overwrites your change.
      Always grep for the text across all files before editing.
   ========================================================================== */

const translations = {
  // ---- Navigation ----
  nav_home:       { ro: 'Acasă',    en: 'Home' },
  nav_products:   { ro: 'Produse',  en: 'Products' },
  nav_about:      { ro: 'Despre',   en: 'About' },
  nav_contact:    { ro: 'Contact',  en: 'Contact' },

  // ---- Homepage: Hero ----
  hero_title:    { ro: 'Importator și distribuitor de produse alimentare din 2001', en: 'Food importer and distributor since 2001' },
  hero_subtitle: { ro: 'Ingrediente și materii prime pentru patiserie, panificație, HoReCa și industria alimentară. Livrare națională.', en: 'Ingredients and raw materials for pastry, bakery, HoReCa and the food industry. Nationwide delivery.' },
  hero_cta:      { ro: 'Vezi produsele', en: 'View products' },

  // ---- Homepage: Credibility ----
  cred_exp_title:      { ro: 'Peste 25 de ani',              en: 'Over 25 years' },
  cred_exp_desc:       { ro: 'Experiență continuă în importul și distribuția de produse alimentare pe piața românească.', en: 'Continuous experience importing and distributing food products in the Romanian market.' },
  cred_coverage_title: { ro: 'Acoperire națională',           en: 'National coverage' },
  cred_coverage_desc:  { ro: 'Livrări în peste 34 de județe, cu depozite în București și Timișoara.', en: 'Deliveries in over 34 counties, with warehouses in Bucharest and Timișoara.' },
  cred_quality_title:  { ro: 'Ingrediente selecționate',      en: 'Selected ingredients' },
  cred_quality_desc:   { ro: 'Import direct de la producători selectați din Europa și Asia.', en: 'Direct import from selected producers in Europe and Asia.' },

  // ---- Homepage: Categories ----
  cat_title:          { ro: 'Categorii de produse',   en: 'Product categories' },
  cat_patiserie_title:{ ro: 'Patiserie & Panificație', en: 'Pastry & Bakery' },
  cat_patiserie_desc: { ro: 'Ciocolată și cuvertură, grăsimi și margarină, premixuri, creme, umpluturi, decoruri, arome și aditivi — tot ce este necesar pentru producția de patiserie și panificație.', en: 'Chocolate and couverture, fats and margarine, premixes, creams, fillings, decorations, flavours and additives — everything needed for pastry and bakery production.' },
  cat_horeca_title:   { ro: 'HoReCa & Alimentație',   en: 'HoReCa & Food' },
  cat_horeca_desc:    { ro: 'Sosuri și condimente, conserve și murături, produse din carne, uleiuri, semințe și fructe uscate — produse alimentare pentru restaurante, hoteluri, catering și comerț.', en: 'Sauces and condiments, canned goods and pickles, meat products, oils, seeds and dried fruits — food products for restaurants, hotels, catering and retail.' },
  cat_view:           { ro: 'Vezi subcategoriile', en: 'View subcategories' },
  cat_view_products:  { ro: 'Vezi produsele', en: 'View products' },

  // ---- Homepage: About teaser ----
  about_teaser_title: { ro: 'Despre ALTINO', en: 'About ALTINO' },
  about_teaser_text:  { ro: 'ALTINO este importator și distribuitor de produse alimentare activ pe piața românească din 2001. Lucrăm cu producători selectați din Europa și Asia și deservim peste 600 de clienți — patiserii, brutării, restaurante, hoteluri și subdistribuitori din toată țara.', en: 'ALTINO is a food importer and distributor active in the Romanian market since 2001. We work with selected producers from Europe and Asia and serve over 600 clients — pastry shops, bakeries, restaurants, hotels and subdistributors across the country.' },
  about_teaser_cta:   { ro: 'Află mai multe', en: 'Learn more' },

  // ---- Inline CTA ----
  inline_cta_text: { ro: 'Sunteți interesat? Contactați-ne pentru o ofertă personalizată.', en: 'Interested? Contact us for a personalised quote.' },
  inline_cta_btn:  { ro: 'Contactați-ne', en: 'Contact us' },

  // ---- CTA Strip ----
  cta_title:    { ro: 'Deveniți client ALTINO',                                            en: 'Become an ALTINO client' },
  cta_subtitle: { ro: 'Completați formularul de contact și vă vom răspunde în cel mai scurt timp.', en: 'Fill in the contact form and we will get back to you shortly.' },
  cta_btn:      { ro: 'Contactați-ne', en: 'Contact us' },

  // ---- WhatsApp ----
  wa_tooltip:   { ro: 'Lăsați-ne un mesaj', en: 'Leave us a message' },

  // ---- Footer ----
  footer_desc:          { ro: 'Importator și distribuitor de produse alimentare din 2001. Ingrediente și materii prime pentru patiserie, panificație, HoReCa și industria alimentară.', en: 'Food importer and distributor since 2001. Ingredients and raw materials for pastry, bakery, HoReCa and the food industry.' },
  footer_nav_title:     { ro: 'Navigare',  en: 'Navigation' },
  footer_products_title:{ ro: 'Produse',   en: 'Products' },
  footer_contact_title: { ro: 'Contact',   en: 'Contact' },
  footer_address:       { ro: 'Căldăraru, jud. Ilfov', en: 'Căldăraru, Ilfov County' },
  footer_rights:        { ro: 'Toate drepturile rezervate.', en: 'All rights reserved.' },

  // ---- Products overview ----
  products_h1:           { ro: 'Produse',   en: 'Products' },
  products_intro:        { ro: 'Peste 800 de produse alimentare din import direct, organizate în două mari categorii. Selectați o categorie pentru a vedea gama completă.', en: 'Over 800 food products from direct import, organised in two main categories. Select a category to see the full range.' },
  products_shared_title: { ro: 'Categorii comune', en: 'Shared categories' },
  cat_zahar_title:       { ro: 'Zahăr & Îndulcitori',   en: 'Sugar & Sweeteners' },
  cat_zahar_desc:        { ro: 'Zahăr alb și brun, zahăr pudră, zahăr vanilat și îndulcitori — utilizate atât în patiserie cât și în HoReCa.', en: 'White and brown sugar, powdered sugar, vanilla sugar and sweeteners — used in both pastry and HoReCa.' },
  cat_ambalaje_title:    { ro: 'Ambalaje & Accesorii',   en: 'Packaging & Accessories' },
  cat_ambalaje_desc:     { ro: 'Hârtie de copt, ambalaje pentru produse de patiserie și panificație, accesorii profesionale.', en: 'Baking paper, packaging for pastry and bakery products, professional accessories.' },

  // ---- About page ----
  about_h1:         { ro: 'Despre ALTINO', en: 'About ALTINO' },
  about_intro:      { ro: 'ALTINO este importator și distribuitor de produse alimentare activ pe piața românească din 2001. Importăm direct de la producători selectați din Europa și Asia și distribuim în peste 34 de județe din România.', en: 'ALTINO is a food importer and distributor active in the Romanian market since 2001. We import directly from selected producers in Europe and Asia and distribute in over 34 counties in Romania.' },
  about_what_title: { ro: 'Ce facem',  en: 'What we do' },
  about_what_text:  { ro: 'Furnizăm ingrediente și materii prime pentru patiserie, panificație, HoReCa și industria alimentară. Gama noastră cuprinde peste 800 de produse — de la ciocolată și cuvertură, grăsimi și margarină, premixuri și făinuri, până la sosuri, conserve, uleiuri și fructe uscate. Lucrăm cu peste 600 de clienți activi: patiserii, brutării, restaurante, hoteluri, firme de catering și subdistribuitori.', en: 'We supply ingredients and raw materials for pastry, bakery, HoReCa and the food industry. Our range includes over 800 products — from chocolate and couverture, fats and margarine, premixes and flours, to sauces, canned goods, oils and dried fruits. We work with over 600 active clients: pastry shops, bakeries, restaurants, hotels, catering companies and subdistributors.' },
  about_how_title:  { ro: 'Cum lucrăm', en: 'How we work' },
  about_how_text:   { ro: 'Relațiile directe cu producătorii ne permit să oferim termene de plată flexibile și prețuri competitive. Comenzile se plasează prin telefon sau WhatsApp, iar livrarea se face cu flota proprie din depozitele de lângă București și Timișoara. Fiecare client are un agent dedicat care îl vizitează periodic.', en: 'Direct relationships with producers allow us to offer flexible payment terms and competitive prices. Orders are placed by phone or WhatsApp, and delivery is done with our own fleet from warehouses in Bucharest and Timișoara. Each client has a dedicated agent who visits periodically.' },
  stat_years:          { ro: '25+',   en: '25+' },
  stat_years_label:    { ro: 'ani de activitate', en: 'years in business' },
  stat_products:       { ro: '800+',  en: '800+' },
  stat_products_label: { ro: 'produse în catalog', en: 'products in catalog' },
  stat_clients:        { ro: '600+',  en: '600+' },
  stat_clients_label:  { ro: 'clienți activi', en: 'active clients' },
  stat_counties:       { ro: '34',    en: '34' },
  stat_counties_label: { ro: 'județe deservite', en: 'counties served' },

  // ---- Contact page ----
  contact_h1:    { ro: 'Contact',   en: 'Contact' },
  contact_intro: { ro: 'Sunteți interesat să deveniți client ALTINO? Completați formularul de mai jos sau contactați-ne direct.', en: 'Interested in becoming an ALTINO client? Fill in the form below or contact us directly.' },
  form_company:  { ro: 'Nume companie *',       en: 'Company name *' },
  form_person:   { ro: 'Persoană de contact *',  en: 'Contact person *' },
  form_phone:    { ro: 'Telefon *',              en: 'Phone *' },
  form_email:    { ro: 'Email',                  en: 'Email' },
  form_county:   { ro: 'Județ *',               en: 'County *' },
  form_county_placeholder: { ro: 'Selectați județul', en: 'Select county' },
  form_message:  { ro: 'Mesaj',                  en: 'Message' },
  form_activity:    { ro: 'Tip activitate *',       en: 'Business type *' },
  form_activity_placeholder: { ro: 'Selectați tipul', en: 'Select type' },
  form_activity_patiserie:   { ro: 'Patiserie / Cofetărie', en: 'Pastry / Confectionery' },
  form_activity_brutarie:    { ro: 'Brutărie / Panificație', en: 'Bakery' },
  form_activity_restaurant:  { ro: 'Restaurant / Hotel', en: 'Restaurant / Hotel' },
  form_activity_catering:    { ro: 'Catering', en: 'Catering' },
  form_activity_subdist:     { ro: 'Subdistribuitor', en: 'Subdistributor' },
  form_activity_other:       { ro: 'Altele', en: 'Other' },
  form_submit:   { ro: 'Trimite cererea',        en: 'Send request' },
  form_response_time: { ro: 'Răspundem în maxim 24 de ore lucrătoare.', en: 'We respond within 24 business hours.' },
  contact_info_title: { ro: 'Date de contact',   en: 'Contact details' },
  contact_hq:    { ro: 'Sediu și depozit principal', en: 'Headquarters and main warehouse' },

  // ---- Subcategory pages: Patiserie ----
  patiserie_h1:       { ro: 'Patiserie & Panificație', en: 'Pastry & Bakery' },
  patiserie_intro:    { ro: 'Ingrediente și materii prime pentru producția de patiserie și panificație. Selectați o subcategorie.', en: 'Ingredients and raw materials for pastry and bakery production. Select a subcategory.' },
  grasimi_h1:         { ro: 'Grăsimi & Margarină',     en: 'Fats & Margarine' },
  grasimi_intro:      { ro: 'Margarină premium, margarină de foietaj, grăsimi de cofetărie și alte grăsimi specializate pentru patiserie și panificație profesională.', en: 'Premium margarine, puff pastry margarine, confectionery fats and other specialised fats for professional pastry and bakery.' },
  ciocolata_h1:       { ro: 'Ciocolată & Cuvertură',    en: 'Chocolate & Couverture' },
  ciocolata_intro:    { ro: 'Ciocolată neagră, cu lapte și albă, cuverturi, creme de ciocolată și cacao pudră pentru patiserie profesională.', en: 'Dark, milk and white chocolate, couvertures, chocolate creams and cocoa powder for professional pastry.' },
  premixuri_h1:       { ro: 'Premixuri & Făinuri',      en: 'Premixes & Flours' },
  premixuri_intro:    { ro: 'Premixuri pentru patiserie și panificație, făinuri specializate, drojdie uscată și bază de foietaj.', en: 'Premixes for pastry and bakery, specialised flours, dry yeast and puff pastry base.' },
  creme_h1:           { ro: 'Creme & Produse Lactate',  en: 'Creams & Dairy' },
  creme_intro:        { ro: 'Frișcă vegetală și animală, creme pentru gătit, produse UHT pentru patiserie și HoReCa.', en: 'Vegetable and dairy whipping cream, cooking creams, UHT products for pastry and HoReCa.' },
  umpluturi_h1:       { ro: 'Umpluturi & Gemuri',       en: 'Fillings & Jams' },
  umpluturi_intro:    { ro: 'Umpluturi de fructe, jeleuri, dulcețuri și paste pentru patiserie — gata de utilizat.', en: 'Fruit fillings, jellies, jams and pastes for pastry — ready to use.' },
  decoruri_h1:        { ro: 'Decoruri & Finisaje',      en: 'Decorations & Finishes' },
  decoruri_intro:     { ro: 'Fondant, rahat, scaglietta, ornamente din zahăr și alte produse pentru decorarea și finisarea produselor de patiserie.', en: 'Fondant, Turkish delight, scaglietta, sugar ornaments and other products for decorating and finishing pastry products.' },
  arome_h1:           { ro: 'Arome & Aditivi',          en: 'Flavours & Additives' },
  arome_intro:        { ro: 'Esențe de vanilie, gelatină, amidon, conservanți și alți aditivi alimentari pentru patiserie și panificație.', en: 'Vanilla extracts, gelatine, starch, preservatives and other food additives for pastry and bakery.' },

  // ---- Subcategory pages: HoReCa ----
  horeca_h1:       { ro: 'HoReCa & Alimentație',    en: 'HoReCa & Food' },
  horeca_intro:    { ro: 'Produse alimentare pentru restaurante, hoteluri, catering și comerț alimentar. Selectați o subcategorie.', en: 'Food products for restaurants, hotels, catering and food retail. Select a subcategory.' },
  sosuri_h1:       { ro: 'Sosuri & Condimente',      en: 'Sauces & Condiments' },
  sosuri_intro:    { ro: 'Maioneze, ketchup, muștar, sos pizza și alte condimente pentru HoReCa. Import din Ungaria (Univer) și alte surse.', en: 'Mayonnaise, ketchup, mustard, pizza sauce and other condiments for HoReCa. Imported from Hungary (Univer) and other sources.' },
  conserve_h1:     { ro: 'Conserve & Murături',      en: 'Canned Goods & Pickles' },
  conserve_intro:  { ro: 'Ciuperci, castraveți murați, măsline, compot și alte conserve pentru restaurante și catering.', en: 'Mushrooms, pickled cucumbers, olives, compote and other canned goods for restaurants and catering.' },
  carne_h1:        { ro: 'Produse din Carne',        en: 'Meat Products' },
  carne_intro:     { ro: 'Crenvurști și preparate din carne pentru HoReCa și fast-food.', en: 'Frankfurters and meat products for HoReCa and fast-food.' },
  uleiuri_h1:      { ro: 'Uleiuri',                  en: 'Oils' },
  uleiuri_intro:   { ro: 'Uleiuri vegetale pentru gătit și prăjit — palmier, cocos, floarea-soarelui. Import direct din Europa și Asia.', en: 'Vegetable oils for cooking and frying — palm, coconut, sunflower. Direct import from Europe and Asia.' },
  seminte_h1:      { ro: 'Semințe & Fructe Uscate',  en: 'Seeds & Dried Fruits' },
  seminte_intro:   { ro: 'Susan, mac, arahide, stafide, fistic și alte semințe și fructe uscate pentru patiserie și HoReCa.', en: 'Sesame, poppy seeds, peanuts, raisins, pistachios and other seeds and dried fruits for pastry and HoReCa.' },

  // ---- Shared categories ----
  zahar_h1:      { ro: 'Zahăr & Îndulcitori',   en: 'Sugar & Sweeteners' },
  zahar_intro:   { ro: 'Zahăr alb, zahăr brun, zahăr pudră, zahăr vanilat și îndulcitori. Utilizate atât în patiserie cât și în HoReCa.', en: 'White sugar, brown sugar, powdered sugar, vanilla sugar and sweeteners. Used in both pastry and HoReCa.' },
  ambalaje_h1:   { ro: 'Ambalaje & Accesorii',   en: 'Packaging & Accessories' },
  ambalaje_intro:{ ro: 'Hârtie de copt, cutii pentru torturi, pungi și ambalaje profesionale pentru patiserie și panificație.', en: 'Baking paper, cake boxes, bags and professional packaging for pastry and bakery.' },

  // ---- Product card shared ----
  product_cta: { ro: 'Cereți ofertă', en: 'Request quote' },

  // ---- Legal pages ----
  privacy_breadcrumb: { ro: 'Confidențialitate', en: 'Privacy' },
  privacy_h1:         { ro: 'Politica de Confidențialitate', en: 'Privacy Policy' },
  privacy_intro:      { ro: 'Informații despre modul în care ALTINO INTL SRL colectează și prelucrează datele dumneavoastră cu caracter personal.', en: 'Information about how ALTINO INTL SRL collects and processes your personal data.' },
  cookies_breadcrumb: { ro: 'Cookie-uri', en: 'Cookies' },
  cookies_h1:         { ro: 'Politica de Cookie-uri', en: 'Cookie Policy' },
  cookies_intro:      { ro: 'Informații despre cookie-urile și tehnologiile de stocare utilizate pe site-ul altino.ro.', en: 'Information about the cookies and storage technologies used on altino.ro.' },
  footer_privacy:     { ro: 'Confidențialitate', en: 'Privacy' },
  footer_cookies:     { ro: 'Cookie-uri', en: 'Cookies' },

  // ---- Cookie banner ----
  cookie_banner_text: { ro: 'Folosim cookie-uri pentru analize de trafic.', en: 'We use cookies for traffic analytics.' },
  cookie_accept:      { ro: 'Accept', en: 'Accept' },
  cookie_reject:      { ro: 'Refuz', en: 'Decline' },
};

// ---- Language engine ----
let currentLang = localStorage.getItem('altino_lang') || 'ro';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('altino_lang', lang);
  applyTranslations();
  updateToggle();
  document.documentElement.lang = lang;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][currentLang]) {
      // For inputs with placeholder, set placeholder. For others, set textContent.
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[key][currentLang];
      } else {
        el.textContent = translations[key][currentLang];
      }
    }
  });
  // Show/hide full content blocks based on language (used on legal pages)
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
  });
}

function updateToggle() {
  const roBtn = document.getElementById('langRo');
  const enBtn = document.getElementById('langEn');
  if (roBtn && enBtn) {
    roBtn.classList.toggle('active', currentLang === 'ro');
    enBtn.classList.toggle('active', currentLang === 'en');
  }
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  if (currentLang !== 'ro') {
    applyTranslations();
    updateToggle();
    document.documentElement.lang = currentLang;
  }
});