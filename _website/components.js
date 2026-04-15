/* ==========================================================================
   ALTINO.RO — Shared Components
   Single source of truth for nav, footer, WhatsApp, back-to-top, and shared JS.

   ⚠️ EDIT HERE to change nav, footer, or floating buttons across ALL pages.
   Every page includes this file and calls initComponents().
   ========================================================================== */

function getAssetPath() {
  // Calculate relative path to /assets/ based on current page depth
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  if (depth <= 0) return 'assets/';
  return '../'.repeat(depth) + 'assets/';
}

function getActivePage() {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') return 'home';
  if (path.startsWith('/produse')) return 'produse';
  if (path.startsWith('/despre')) return 'despre';
  if (path.startsWith('/contact')) return 'contact';
  return '';
}

function renderNav() {
  const assets = getAssetPath();
  const active = getActivePage();
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  navEl.innerHTML = `
    <div class="nav-inner">
      <a href="/" class="nav-logo"><img src="${assets}logo-altino.svg" alt="ALTINO" style="height:40px;"></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="/"${active === 'home' ? ' class="active"' : ''} data-i18n="nav_home">Acasă</a></li>
        <li><a href="/produse/"${active === 'produse' ? ' class="active"' : ''} data-i18n="nav_products">Produse</a></li>
        <li><a href="/despre/"${active === 'despre' ? ' class="active"' : ''} data-i18n="nav_about">Despre</a></li>
        <li><a href="/contact/"${active === 'contact' ? ' class="active"' : ''} data-i18n="nav_contact">Contact</a></li>
      </ul>
      <div class="lang-toggle">
        <button class="active" id="langRo" onclick="setLang('ro')"><img src="${assets}flag-ro.svg" alt="Română" style="width:24px;height:16px;object-fit:contain;vertical-align:middle;"></button>
        <span class="separator">|</span>
        <button id="langEn" onclick="setLang('en')"><img src="${assets}flag-gb.svg" alt="English" style="width:24px;height:16px;object-fit:contain;vertical-align:middle;"></button>
      </div>
      <button class="nav-hamburger" id="navToggle" aria-label="Meniu">
        <span></span><span></span><span></span>
      </button>
    </div>`;
}

function renderFooter() {
  const assets = getAssetPath();
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo"><img src="${assets}logo-altino-white.svg" alt="ALTINO" style="height:40px;"></div>
          <p data-i18n="footer_desc">Importator și distribuitor de produse alimentare din 2001. Ingrediente și materii prime pentru patiserie, panificație, HoReCa și industria alimentară.</p>
        </div>
        <div>
          <h4 data-i18n="footer_nav_title">Navigare</h4>
          <ul class="footer-links">
            <li><a href="/" data-i18n="nav_home">Acasă</a></li>
            <li><a href="/produse/" data-i18n="nav_products">Produse</a></li>
            <li><a href="/despre/" data-i18n="nav_about">Despre</a></li>
            <li><a href="/contact/" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_products_title">Produse</h4>
          <ul class="footer-links">
            <li><a href="/produse/patiserie/ciocolata/">Ciocolată</a></li>
            <li><a href="/produse/patiserie/grasimi/">Grăsimi</a></li>
            <li><a href="/produse/patiserie/premixuri/">Premixuri</a></li>
            <li><a href="/produse/horeca/sosuri/">Sosuri</a></li>
            <li><a href="/produse/horeca/uleiuri/">Uleiuri</a></li>
            <li><a href="/produse/zahar/">Zahăr</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_contact_title">Contact</h4>
          <ul class="footer-links">
            <li>Str. Oxigenului, Nr. 1 C</li>
            <li>Căldăraru, jud. Ilfov, 077035</li>
            <li><a href="tel:+40722281828">+40 722 281 828</a></li>
            <li><a href="mailto:constantin@altino.ro">constantin@altino.ro</a></li>
            <li style="font-size: 0.75rem; margin-top: 8px; opacity: 0.6;">CUI: 31050793 | J23/6216/2017</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 ALTINO INTL SRL. <span data-i18n="footer_rights">Toate drepturile rezervate.</span>
          <span class="footer-legal-links">
            <a href="/confidentialitate/" data-i18n="footer_privacy">Confidențialitate</a>
            <a href="/cookies/" data-i18n="footer_cookies">Cookie-uri</a>
          </span>
        </p>
      </div>
    </div>`;
}

function renderFloatingButtons() {
  // Back to top
  const btt = document.createElement('button');
  btt.className = 'back-to-top';
  btt.id = 'backToTop';
  btt.setAttribute('aria-label', 'Înapoi sus');
  btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  btt.innerHTML = '<svg viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(btt);

  // WhatsApp
  const wa = document.createElement('a');
  wa.href = 'https://wa.me/40722281828?text=Bun%C4%83%20ziua%2C%20a%C8%99%20dori%20informa%C8%9Bii%20despre%20produsele%20ALTINO.';
  wa.className = 'whatsapp-float';
  wa.target = '_blank';
  wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'WhatsApp');
  wa.innerHTML = `
    <span class="wa-tooltip" data-i18n="wa_tooltip">Lăsați-ne un mesaj</span>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(wa);
}

function initSharedJS() {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // Back to top visibility
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 600);
    });
  }

  // Scroll reveal animations
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  }
}

// Vercel Web Analytics (cookieless — no consent needed)
function initAnalytics() {
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
}

// GA4 Analytics (uses cookies — only load after consent)
function initGA4() {
  if (document.querySelector('script[src*="googletagmanager"]')) return; // already loaded
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-D63YQNBEDZ';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-D63YQNBEDZ');
}

// Cookie consent helpers
function getCookieConsent() {
  return localStorage.getItem('altino_cookies');
}

function setCookieConsent(value) {
  localStorage.setItem('altino_cookies', value);
  if (value === 'accepted') initGA4();
  dismissCookieBanner();
}

function dismissCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.remove();
}

function renderCookieBanner() {
  if (getCookieConsent()) return; // already answered
  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p data-i18n="cookie_banner_text">Folosim cookie-uri pentru analize de trafic. <a href="/cookies/">Detalii</a></p>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-reject" onclick="setCookieConsent('rejected')" data-i18n="cookie_reject">Refuz</button>
      <button class="cookie-btn cookie-btn-accept" onclick="setCookieConsent('accepted')" data-i18n="cookie_accept">Accept</button>
    </div>`;
  document.body.appendChild(banner);
  // Apply translations if language is not Romanian
  if (typeof currentLang !== 'undefined' && currentLang !== 'ro') applyTranslations();
}

// Main init — call this from every page
function initComponents() {
  renderNav();
  renderFooter();
  renderFloatingButtons();
  initSharedJS();
  initAnalytics();       // Vercel — cookieless, always loads
  if (getCookieConsent() === 'accepted') initGA4(); // GA4 — only if consented
  renderCookieBanner();  // Show banner if no choice made yet
}