/* ============================================================
   FAZEKAS FAÉPÍTMÉNYEK — script.js
   ============================================================

   ➡️  KÉPEK HOZZÁADÁSA / CSERÉJE:
   Csak a KEPEK tömböt módosítsd lentebb!

   Minden képhez add meg:
     src   → a kép fájlneve (pl. "kepek/pergola1.webp")
             vagy teljes URL (pl. "https://...")
     cat   → kategória: "pergola" | "terasz" | "kocsibealló" | "kerti"
     title → cím amit a képen megjelenít

   ============================================================ */

const KEPEK = [
  { src: "./492412545_1344342180619747_7426113484604253320_n.webp", cat: "terasz",      title: "Fedett terasz",          size: "wide" },
  { src: "./491913958_1344342070619758_8077525564327090391_n.webp", cat: "pergola",     title: "Egyedi pergola" },
  { src: "./492007039_1344342060619759_8858205799448836473_n.webp", cat: "kerti",       title: "Kerti pavilon",          size: "tall" },
  { src: "./494050403_1348043183582980_4318933155615995497_n.webp", cat: "kocsibealló", title: "Fedett kocsibeálló" },
  { src: "./493185568_1347669276953704_402446277136218167_n.webp", cat: "terasz",       title: "Teraszfedés" },
  { src: "./491865788_1344341840619781_1974249800156542328_n.webp", cat: "pergola",     title: "Fa pergola" },
  { src: "./493266858_1346032120450753_7294405559515300015_n.webp", cat: "terasz",      title: "Tetőszerkezet részlet",  size: "wide" },
  { src: "./492206505_1344342300619735_5296323316052033624_n.webp", cat: "kerti",       title: "Kerti pavilon",          size: "tall" },
  { src: "./492194315_1344342047286427_2438173004482533572_n.webp", cat: "kocsibealló", title: "Kocsibeálló" },
  { src: "./485146795_1313443183709647_3670276322985493426_n.webp", cat: "terasz",      title: "Otthoni terasz" },
  { src: "./493319489_1347087303678568_1573468675263002388_n.webp", cat: "pergola",     title: "Árnyékoló pergola" },
  { src: "./493832772_1348043273582971_3292194355268832036_n.webp", cat: "terasz",      title: "Üvegfedett terasz",      size: "wide" },
  { src: "./492229447_1344342027286429_2203081091378941283_n.webp", cat: "kerti",       title: "Fa terasz és deck",      size: "tall" },
  { src: "./492691797_1344341853953113_3414013195888945532_n.webp", cat: "kocsibealló", title: "Kocsibeálló pirossal" },
  { src: "./493014039_1348043170249648_8786035690784449248_n.webp", cat: "terasz",      title: "Modern teraszfedés" },
  { src: "./492878571_1346031827117449_4714648344327617924_n.webp", cat: "pergola",     title: "Pergola pihenőrésszel" },
  { src: "./493826334_1347669346953697_3937405391887322449_n.webp", cat: "terasz",      title: "Kültéri étkező",         size: "wide" },
  { src: "./652326620_1634058361648126_6747440263282313438_n.webp", cat: "kerti",       title: "Kerti pavilon",          size: "tall" },
  { src: "./618069672_1587511709636125_7915697822113185770_n.webp", cat: "kocsibealló", title: "Fa kocsibeálló" },
  { src: "./540031086_1456586609395303_4885400561002689768_n.webp", cat: "pergola",     title: "Pergola a kertben" },
  { src: "./492572884_1344342160619749_7375357318257961536_n.webp", cat: "terasz",      title: "Teraszfedés tetővel" },
  { src: "./492354590_1344342040619761_3913685459871897626_n.webp", cat: "kerti",       title: "Kerti faépítmény",       size: "tall" },
  { src: "./618241716_1587511749636121_2494817918921424738_n.webp", cat: "kocsibealló", title: "Modern kocsibeálló" },
  { src: "./571108968_1511590130561617_7339969679272682461_n.webp", cat: "pergola",     title: "Szabadon álló pergola" },
  { src: "./716571065_1713259773727984_1882775765361786434_n.webp", cat: "terasz",      title: "Fedett fa terasz",       size: "wide" },
  { src: "./486340372_1313443097042989_5940983037398002976_n.webp", cat: "terasz",      title: "Teraszfedés otthonhoz" },
  { src: "./494021431_1347669310287034_8475704210619238083_n.webp", cat: "pergola",     title: "Pergola részlet" },
  { src: "./725573795_1724259825961312_8979688001851424189_n.webp", cat: "kocsibealló", title: "Fedett autóbeálló",      size: "tall" },
  { src: "./493319868_1347087290345236_1316013791107558408_n.webp", cat: "pergola",     title: "Egyedi pergola" },
  { src: "./717228734_1713259833727978_9086505153435236998_n.webp", cat: "terasz",      title: "Terasz élőtér",          size: "wide" },
  { src: "./496040595_1359368875783744_8132894668525866776_n.webp", cat: "kerti",       title: "Kerti faház" },
  { src: "./546921558_1469267684793862_7162164344705234915_n.webp", cat: "kocsibealló", title: "Hosszú kocsibeálló" },
  { src: "./571135679_1511590197228277_8448752038189106456_n.webp", cat: "pergola",     title: "Pergola oszloprészlet" },
  { src: "./509594262_1394635298923768_8475445946637392652_n.webp", cat: "terasz",      title: "Fedett terasz" },
  { src: "./514913293_1402122434841721_8112992590257278961_n.webp", cat: "kerti",       title: "Kerti építmény",         size: "tall" },
  { src: "./503249595_1378121693908462_2538137667085507041_n.webp", cat: "kocsibealló", title: "Fa kocsibeálló",         size: "wide" },
  { src: "./571148759_1511590350561595_858091350255610676_n.webp", cat: "pergola",     title: "Kerti pergola" },
  { src: "./491861082_1344342087286423_695031385095881709_n.webp", cat: "terasz",       title: "Polikarbonát fedés" },
  { src: "./722705004_1718542336533061_135223322545439782_n.webp", cat: "kerti",        title: "Kerti faépítmény" },
  { src: "./661999459_1653723433014952_2094688119804639965_n.webp", cat: "kocsibealló", title: "Kocsibeálló kettőnek",   size: "wide" },
  { src: "./494001794_1348043120249653_2243772096525648137_n.webp", cat: "kocsibealló", title: "Kocsibeálló" },
  { src: "./544984736_1463738778680086_3633222574263243629_n.webp", cat: "terasz",      title: "Otthoni terasz" },
  { src: "./494310826_1350327370021228_9462419185624415_n.webp", cat: "terasz",         title: "Kültéri fedés" },
  { src: "./619897200_1587511779636118_3135466953303225458_n.webp", cat: "terasz",      title: "Teraszfedés" },
  { src: "./688732510_1679620257091936_8505750836072010902_n.webp", cat: "kocsibealló", title: "Kocsibeálló" },
  { src: "./721779939_1718594186527876_8847622615205134484_n.webp", cat: "pergola",     title: "Pergola alulnézet",      size: "wide" },
  { src: "./495540591_1359368802450418_4849877553784369400_n.webp", cat: "terasz",      title: "Fa teraszburkolat" },
  { src: "./556129963_1482846636769300_6798119913072306214_n.webp", cat: "pergola",     title: "Pergola szerkezet",      size: "tall" },
  { src: "./492176949_1344341970619768_5756565065919519074_n.webp", cat: "terasz",      title: "Kültéri fedés" },
  { src: "./492556218_1347087297011902_82095195098888230_n.webp", cat: "pergola",       title: "Fa pergola" },
  { src: "./725599144_1725310232522938_6009266775387714240_n.webp", cat: "terasz",      title: "Kész teraszfedés" },
];

/* ============================================================
   INNEN NEM KELL MÓDOSÍTANI SEMMIT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // ── COOKIE ──────────────────────────────────────────────────
  const cookieBanner   = document.getElementById("cookieBanner");
  const cookieAccept   = document.getElementById("cookieAccept");
  const cookieDecline  = document.getElementById("cookieDecline");
  const cookieSettings = document.getElementById("cookieSettings");
  const COOKIE_KEY     = "fazekas_cookie_v1";

  const setCookie = (n, v, d) => {
    document.cookie = `${n}=${encodeURIComponent(v)}; expires=${new Date(Date.now()+d*864e5).toUTCString()}; path=/; SameSite=Lax`;
  };
  const getCookie = n => document.cookie.split("; ").reduce((r,v)=>{
    const [k,val]=v.split("="); return k===n ? decodeURIComponent(val) : r;
  }, null);

  if (!getCookie(COOKIE_KEY)) setTimeout(() => cookieBanner?.classList.add("is-visible"), 900);
  cookieAccept?.addEventListener("click",  () => { setCookie(COOKIE_KEY,"accepted",365); cookieBanner.classList.remove("is-visible"); });
  cookieDecline?.addEventListener("click", () => { setCookie(COOKIE_KEY,"declined", 30); cookieBanner.classList.remove("is-visible"); });
  cookieSettings?.addEventListener("click",() => cookieBanner?.classList.add("is-visible"));

  // ── GYIK: egyszerre csak egy válasz legyen nyitva ──────────
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

  // ── NAVBAR / HAMBURGER ───────────────────────────────────────
  const navbar     = document.getElementById("navbar");
  const navToggle  = document.getElementById("navToggle");
  const navLinks   = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  const closeMenu = () => {
    navLinks?.classList.remove("is-open");
    navOverlay?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded","false");
    navToggle?.setAttribute("aria-label","Menü megnyitása");
    document.body.style.overflow = "";
  };
  const openMenu = () => {
    navLinks?.classList.add("is-open");
    navOverlay?.classList.add("is-open");
    navToggle?.setAttribute("aria-expanded","true");
    navToggle?.setAttribute("aria-label","Menü bezárása");
    document.body.style.overflow = "hidden";
  };

  navToggle?.addEventListener("click", () => navLinks?.classList.contains("is-open") ? closeMenu() : openMenu());
  navOverlay?.addEventListener("click", closeMenu);
  navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key==="Escape") closeMenu(); });
  window.addEventListener("scroll", () => navbar?.classList.toggle("is-scrolled", window.scrollY > 40), { passive:true });

  // ── FADE-IN ──────────────────────────────────────────────────
  const fadeObs = new IntersectionObserver(
    (entries, obs) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }),
    { rootMargin:"0px 0px -8% 0px", threshold:0.08 }
  );
  document.querySelectorAll(".fade-in").forEach(el => fadeObs.observe(el));

  // ── GALÉRIA ──────────────────────────────────────────────────
  let activeFilter = "all";
  const grid = document.getElementById("galleryGrid");
  const openGalleryBtn = document.getElementById("openGalleryBtn");
  const galleryBrowser = document.getElementById("galleryBrowser");
  const galleryBrowserGrid = document.getElementById("galleryBrowserGrid");
  const galleryBrowserClose = document.getElementById("galleryBrowserClose");
  const galleryBrowserBackdrop = document.getElementById("galleryBrowserBackdrop");
  let browserGalleryBuilt = false;

  const categoryLabels = { pergola:"Pergola", terasz:"Teraszfedés", kocsibealló:"Kocsibeálló", kerti:"Kerti építmény" };

  function createGalleryItem(kep, idx, className) {
      const btn = document.createElement("button");
      btn.className = className;
      btn.dataset.cat = kep.cat;
      btn.dataset.idx = idx;
      btn.setAttribute("role","listitem");
      btn.setAttribute("aria-label", kep.title);
      btn.innerHTML = `
        <img
          src="${kep.src}"
          alt="${kep.title}"
          width="800" height="600"
          loading="lazy"
          decoding="async"
          draggable="false"
        >
        <div class="gallery-overlay">
          <span class="gallery-item-meta">${categoryLabels[kep.cat] || "Referenciamunka"}</span>
          <span class="gallery-item-title">${kep.title}</span>
        </div>`;
      btn.addEventListener("click", () => openLightbox(idx));
      return btn;
  }

  function renderGalleryPreview() {
    if (!grid) return;
    KEPEK.slice(0, 3).forEach((kep, idx) => {
      const item = createGalleryItem(kep, idx, "gallery-item gallery-preview-item fade-in");
      grid.appendChild(item);
      fadeObs.observe(item);
    });
  }

  function openGalleryBrowser() {
    if (!galleryBrowser) return;
    if (!browserGalleryBuilt) {
      KEPEK.forEach((kep, idx) => galleryBrowserGrid?.appendChild(createGalleryItem(kep, idx, "gallery-browser-item")));
      browserGalleryBuilt = true;
    }
    galleryBrowser.hidden = false;
    document.body.style.overflow = "hidden";
    galleryBrowserClose?.focus();
  }

  function closeGalleryBrowser() {
    if (!galleryBrowser) return;
    galleryBrowser.hidden = true;
    document.body.style.overflow = "";
  }

  openGalleryBtn?.addEventListener("click", openGalleryBrowser);
  galleryBrowserClose?.addEventListener("click", closeGalleryBrowser);
  galleryBrowserBackdrop?.addEventListener("click", closeGalleryBrowser);
  renderGalleryPreview();

  // ── LIGHTBOX ─────────────────────────────────────────────────
  const lightbox   = document.getElementById("lightbox");
  const lbImg      = document.getElementById("lbImg");
  const lbTitle    = document.getElementById("lbTitle");
  const lbClose    = document.getElementById("lbClose");
  const lbPrev     = document.getElementById("lbPrev");
  const lbNext     = document.getElementById("lbNext");
  const lbBackdrop = document.getElementById("lbBackdrop");
  const lbCounter  = document.getElementById("lbCounter");

  let lbIndex  = 0;
  let lbVisible = []; // csak a szűrt + látható képek indexei

  function getVisibleIndices() {
    return KEPEK
      .map((k, i) => ({ k, i }))
      .filter(({ k }) => activeFilter === "all" || k.cat === activeFilter)
      .map(({ i }) => i);
  }

  function showLb(idx) {
    lbIndex = idx;
    const kep = KEPEK[idx];
    lbImg.src = kep.src;
    lbImg.alt = kep.title;
    lbTitle.textContent = kep.title;

    const pos = lbVisible.indexOf(idx);
    lbPrev.disabled = pos <= 0;
    lbNext.disabled = pos >= lbVisible.length - 1;
    lbPrev.style.opacity = lbPrev.disabled ? "0.3" : "1";
    lbNext.style.opacity = lbNext.disabled ? "0.3" : "1";
    if (lbCounter) lbCounter.textContent = `${pos + 1} / ${lbVisible.length}`;

    // Szomszédos képek előtöltése a gördülékeny lapozásért
    [pos - 1, pos + 1].forEach(p => {
      if (p >= 0 && p < lbVisible.length) { const im = new Image(); im.src = KEPEK[lbVisible[p]].src; }
    });
  }

  function openLightbox(idx) {
    lbVisible = getVisibleIndices();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    showLb(idx);
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    if (galleryBrowser?.hidden) document.body.style.overflow = "";
  }

  lbClose?.addEventListener("click",   closeLightbox);
  lbBackdrop?.addEventListener("click",closeLightbox);

  lbPrev?.addEventListener("click", () => {
    const pos = lbVisible.indexOf(lbIndex);
    if (pos > 0) showLb(lbVisible[pos - 1]);
  });
  lbNext?.addEventListener("click", () => {
    const pos = lbVisible.indexOf(lbIndex);
    if (pos < lbVisible.length - 1) showLb(lbVisible[pos + 1]);
  });

  document.addEventListener("keydown", e => {
    if (!galleryBrowser?.hidden && e.key === "Escape") { closeGalleryBrowser(); return; }
    if (lightbox?.hidden) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   lbPrev?.click();
    if (e.key === "ArrowRight")  lbNext?.click();
  });

  // Touch swipe a lightboxon
  let swipeX = 0;
  lbImg?.addEventListener("touchstart", e => { swipeX = e.changedTouches[0].screenX; }, { passive:true });
  lbImg?.addEventListener("touchend",   e => {
    const dx = e.changedTouches[0].screenX - swipeX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) lbNext?.click();
    if (dx > 0) lbPrev?.click();
  }, { passive:true });

  // ── STAT COUNT-UP ────────────────────────────────────────────
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCount(el) {
    const raw    = el.dataset.count || el.textContent;
    const num    = parseFloat(raw.replace(",", "."));
    const suffix = el.dataset.suffix || "";
    const decimals = (raw.split(".")[1] || raw.split(",")[1] || "").length;
    if (isNaN(num)) return;
    if (prefersReduced) { el.textContent = raw + suffix; return; }

    const dur = 1400;
    const t0  = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (num * eased).toFixed(decimals).replace(".", decimals ? "," : "");
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const statObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(".stat-number[data-count]").forEach(animateCount);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".review-stats").forEach(el => statObs.observe(el));

  // ── HERO PARALLAX ────────────────────────────────────────────
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg && !prefersReduced) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) heroBg.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // ── BEFORE / AFTER SLIDER ────────────────────────────────────
  document.querySelectorAll(".ba-slider").forEach(slider => {
    const range = slider.querySelector(".ba-range");
    const after = slider.querySelector(".ba-after");
    const handle = slider.querySelector(".ba-handle");
    const set = v => {
      slider.style.setProperty("--pos", v + "%");
      range?.setAttribute("aria-valuenow", Math.round(v));
    };
    range?.addEventListener("input", () => set(range.value));

    // Húzás közvetlenül a fogantyúval (egér + érintés)
    let dragging = false;
    const moveTo = clientX => {
      const r = slider.getBoundingClientRect();
      const v = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
      set(v);
      if (range) range.value = v;
    };
    const start = () => { dragging = true; slider.classList.add("is-dragging"); };
    const end   = () => { dragging = false; slider.classList.remove("is-dragging"); };
    handle?.addEventListener("pointerdown", start);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointermove", e => { if (dragging) moveTo(e.clientX); });
    set(50);
    if (after) after.setAttribute("aria-hidden", "true");
  });

  // ── MOBIL RAGADÓS CTA ────────────────────────────────────────
  const mobileCta  = document.getElementById("mobileCta");
  const contactSec = document.getElementById("kapcsolat");
  if (mobileCta) {
    let ctaTicking = false;
    const updateCta = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      let overContact = false;
      if (contactSec) {
        const r = contactSec.getBoundingClientRect();
        overContact = r.top < window.innerHeight * 0.85 && r.bottom > 0;
      }
      mobileCta.classList.toggle("is-visible", pastHero && !overContact);
    };
    window.addEventListener("scroll", () => {
      if (ctaTicking) return;
      ctaTicking = true;
      requestAnimationFrame(() => { updateCta(); ctaTicking = false; });
    }, { passive: true });
    updateCta();
  }

});
