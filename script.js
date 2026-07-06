/* ============================================================
   FAZEKAS FAÉPÍTMÉNYEK — script.js
   ============================================================

   ➡️  KÉPEK HOZZÁADÁSA / CSERÉJE:
   Csak a KEPEK tömböt módosítsd lentebb!

   Minden képhez add meg:
     src   → a kép fájlneve (pl. "kepek/pergola1.webp")
             vagy teljes URL (pl. "https://...")
     cat   → kategória: "pergola" | "terasz" | "kocsibeallo" | "kerti"
     title → cím amit a képen megjelenít

   ============================================================ */

const KEPEK = [
  { src: "./assets/gallery/gallery-01-fa-teraszfedes-polikarbonattal.webp", cat: "terasz", title: "Fa teraszfedés polikarbonáttal" },
  { src: "./assets/gallery/gallery-10-modern-szurke-polikarbonat.webp", cat: "terasz", title: "Modern polikarbonát fedés" },
  { src: "./assets/gallery/gallery-06-korlatos-fedett-terasz.webp", cat: "terasz", title: "Korlátos fedett terasz" },
  { src: "./assets/gallery/gallery-12-fa-arnyekolo-oldalfal.webp", cat: "terasz", title: "Fa árnyékoló oldalfal" },
  { src: "./assets/gallery/gallery-19-vilagos-fa-terasz.webp", cat: "terasz", title: "Világos fa teraszfedés" },
  { src: "./assets/gallery/gallery-15-polikarbonat-alulnezet.webp", cat: "terasz", title: "Polikarbonát fedés alulnézetből" },
  { src: "./assets/gallery/gallery-24-modern-szurke-szerkezet.webp", cat: "terasz", title: "Modern szürke szerkezet" },
  { src: "./assets/gallery/gallery-17-fedett-kulter-konyha.webp", cat: "kerti", title: "Fedett kültéri konyha" },
  { src: "./assets/gallery/gallery-09-sotet-fa-teraszfedes.webp", cat: "terasz", title: "Sötét fa teraszfedés" },
  { src: "./assets/gallery/gallery-27-bejarati-fa-fedes.webp", cat: "terasz", title: "Bejárati fa fedés" },
  { src: "./assets/gallery/gallery-29-vilagos-fa-fedes.webp", cat: "terasz", title: "Világos fa fedés" },
  { src: "./assets/gallery/gallery-05-teraszfedes-gerenda-reszlet.webp", cat: "terasz", title: "Fa gerendázat részlete" },
  { src: "./assets/gallery/gallery-36-sotet-fa-terasz-oldalfallal.webp", cat: "terasz", title: "Sötét fa terasz oldalfallal" },
  { src: "./assets/gallery/gallery-13-fa-arnyekolo-reszlet.webp", cat: "terasz", title: "Fa árnyékoló részlet" },
  { src: "./assets/gallery/gallery-20-vilagos-teraszfedes-hazfalnal.webp", cat: "terasz", title: "Világos teraszfedés házfalnál" },
  { src: "./assets/gallery/gallery-39-fa-teraszfedes-polikarbonat.webp", cat: "terasz", title: "Fa teraszfedés polikarbonáttal" },
  { src: "./assets/gallery/gallery-30-fa-fedes-bejaratnal.webp", cat: "terasz", title: "Fa fedés bejáratnál" },
  { src: "./assets/gallery/gallery-32-korlatos-fa-teraszfedes.webp", cat: "terasz", title: "Korlátos fa teraszfedés" },
  { src: "./assets/gallery/gallery-37-fa-teraszfedes-szeles.webp", cat: "terasz", title: "Széles fa teraszfedés" },
  { src: "./assets/gallery/gallery-41-hosszu-modern-fedes.webp", cat: "terasz", title: "Hosszú modern fedés" },
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

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── FADE-IN ──────────────────────────────────────────────────
  const fadeObs = new IntersectionObserver(
    (entries, obs) => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      obs.unobserve(e.target);
    }),
    { rootMargin: "0px 0px -5% 0px", threshold: 0.12 }
  );
  document.querySelectorAll(".fade-in").forEach(el => fadeObs.observe(el));

  const staggerObs = new IntersectionObserver(
    (entries, obs) => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      obs.unobserve(e.target);
    }),
    { rootMargin: "0px 0px -5% 0px", threshold: 0.08 }
  );
  document.querySelectorAll(".reveal-stagger").forEach(el => staggerObs.observe(el));

  // ── SCROLL (single rAF pipeline) ─────────────────────────────
  const heroBg = document.querySelector(".hero-bg");
  const mobileCta = document.getElementById("mobileCta");
  const contactSec = document.getElementById("kapcsolat");
  const heroParallaxEnabled = heroBg && !prefersReduced
    && window.matchMedia("(pointer: fine)").matches
    && window.innerWidth > 768;

  let scrollTicking = false;
  const updateOnScroll = () => {
    const y = window.scrollY;

    navbar?.classList.toggle("is-scrolled", y > 40);

    if (heroParallaxEnabled && y < window.innerHeight) {
      heroBg.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(1.04)`;
    }

    if (mobileCta) {
      const pastHero = y > window.innerHeight * 0.6;
      let overContact = false;
      if (contactSec) {
        const r = contactSec.getBoundingClientRect();
        overContact = r.top < window.innerHeight * 0.85 && r.bottom > 0;
      }
      mobileCta.classList.toggle("is-visible", pastHero && !overContact);
    }
  };

  window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateOnScroll();
      scrollTicking = false;
    });
  }, { passive: true });
  updateOnScroll();

  // ── GALÉRIA ──────────────────────────────────────────────────
  let activeFilter = "all";
  const grid = document.getElementById("galleryGrid");
  const openGalleryBtn = document.getElementById("openGalleryBtn");
  const galleryBrowser = document.getElementById("galleryBrowser");
  const galleryBrowserGrid = document.getElementById("galleryBrowserGrid");
  const galleryBrowserClose = document.getElementById("galleryBrowserClose");
  const galleryBrowserBackdrop = document.getElementById("galleryBrowserBackdrop");
  let browserGalleryBuilt = false;

  function createGalleryItem(kep, idx, className) {
      const btn = document.createElement("button");
      const eager = className.includes("gallery-browser-item");
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
          loading="${eager ? "eager" : "lazy"}"
          decoding="async"
          draggable="false"
        >`;
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
  const lbThumbs   = document.getElementById("lbThumbs");

  let lbIndex  = 0;
  let lbVisible = []; // csak a szűrt + látható képek indexei
  let lbThumbsBuilt = false;

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
    if (lbTitle) lbTitle.textContent = kep.title;

    const pos = lbVisible.indexOf(idx);
    lbPrev.disabled = pos <= 0;
    lbNext.disabled = pos >= lbVisible.length - 1;
    lbPrev.style.opacity = lbPrev.disabled ? "0.3" : "1";
    lbNext.style.opacity = lbNext.disabled ? "0.3" : "1";
    if (lbCounter) lbCounter.textContent = `${pos + 1} / ${lbVisible.length}`;
    lbThumbs?.querySelectorAll(".lb-thumb").forEach((thumb) => {
      const active = Number(thumb.dataset.idx) === idx;
      thumb.classList.toggle("is-active", active);
      thumb.setAttribute("aria-current", active ? "true" : "false");
      if (active) thumb.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });

    // Szomszédos képek előtöltése a gördülékeny lapozásért
    [pos - 1, pos + 1].forEach(p => {
      if (p >= 0 && p < lbVisible.length) { const im = new Image(); im.src = KEPEK[lbVisible[p]].src; }
    });
  }

  function openLightbox(idx) {
    lbVisible = getVisibleIndices();
    if (lbThumbs && !lbThumbsBuilt) {
      KEPEK.forEach((kep, thumbIdx) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "lb-thumb";
        thumb.dataset.idx = thumbIdx;
        thumb.setAttribute("aria-label", `${kep.title} megnyitása`);
        // Kis bélyegkép a nagy kép helyett (assets/gallery/thumbs/ alatt)
        const thumbSrc = kep.src.replace("/gallery/", "/gallery/thumbs/");
        thumb.innerHTML = `<img src="${thumbSrc}" alt="" loading="lazy" decoding="async">`;
        thumb.addEventListener("click", () => showLb(thumbIdx));
        lbThumbs.appendChild(thumb);
      });
      lbThumbsBuilt = true;
    }
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
    if (!lightbox?.hidden) {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   lbPrev?.click();
      if (e.key === "ArrowRight")  lbNext?.click();
      return;
    }
    if (!galleryBrowser?.hidden && e.key === "Escape") closeGalleryBrowser();
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

  // ── BEFORE / AFTER SLIDER ────────────────────────────────────
  document.querySelectorAll(".ba-slider").forEach(slider => {
    const range = slider.querySelector(".ba-range");
    const after = slider.querySelector(".ba-after");
    const handle = slider.querySelector(".ba-handle");
    const set = v => {
      const value = Math.max(0, Math.min(100, Number(v)));
      slider.style.setProperty("--pos", value + "%");
      slider.classList.toggle("is-after-only", value <= 7);
      slider.classList.toggle("is-before-only", value >= 93);
      range?.setAttribute("aria-valuenow", Math.round(value));
      if (range) range.value = value;
    };
    range?.addEventListener("input", () => set(range.value));

    // Húzás vagy koppintás bárhol a képen (egér + érintés).
    let dragging = false;
    const moveTo = clientX => {
      const r = slider.getBoundingClientRect();
      const v = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
      set(v);
    };
    const start = e => {
      dragging = true;
      slider.classList.add("is-dragging");
      if (e?.clientX != null) moveTo(e.clientX);
    };
    const end   = () => { dragging = false; slider.classList.remove("is-dragging"); };
    slider.addEventListener("pointerdown", start);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointermove", e => { if (dragging) moveTo(e.clientX); });
    set(50);
    if (after) after.setAttribute("aria-hidden", "true");
  });

});
