/* ============================================================
   FAZEKAS FAÉPÍTMÉNYEK — script.js
   ============================================================

   ➡️  KÉPEK HOZZÁADÁSA / CSERÉJE:
   Csak a KEPEK tömböt módosítsd lentebb!

   Minden képhez add meg:
     src   → a kép fájlneve (pl. "kepek/pergola1.jpg")
             vagy teljes URL (pl. "https://...")
     cat   → kategória: "pergola" | "terasz" | "kocsibealló" | "kerti"
     title → cím amit a képen megjelenít

   ============================================================ */

const KEPEK = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Modern Pergola" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Fedett terasz" },
  { src: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Kerti pavilon" },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=75", cat: "kocsibealló",title: "Kocsibeálló" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Kerti pergola" },
  { src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Terasz fedés" },
  { src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Pihenősarok" },
  { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Árnyékoló pergola" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Nyitott terasz" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Kerti ház" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Íves pergola" },
  { src: "https://images.unsplash.com/photo-1558618047-3c8c76ca9ff4?w=800&auto=format&fit=crop&q=75", cat: "kocsibealló",title: "Dupla kocsibeálló" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Üvegtetős terasz" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Lapos tetős pergola" },
  { src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Nyári konyha terasz" },
  { src: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Erkély pergola" },
  { src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Nádtetős terasz" },
  { src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Kerti bár" },
  { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Tetős pergola" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "L-alakú terasz" },
  { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=75", cat: "kocsibealló",title: "Klasszikus kocsibeálló" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Kerti pihenő" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Díszes pergola" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Tető alatti terasz" },
  { src: "https://images.unsplash.com/photo-1558618047-3c8c76ca9ff4?w=800&auto=format&fit=crop&q=75", cat: "kerti",      title: "Nyitott nyári ház" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&auto=format&fit=crop&q=75", cat: "kocsibealló",title: "Modern kocsibeálló" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=75", cat: "pergola",     title: "Virágos pergola" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=75", cat: "terasz",     title: "Vidéki terasz" },
];

/* ============================================================
   INNEN NEM KELL MÓDOSÍTANI SEMMIT
   ============================================================ */

const OLDAL_MERET = 12; // hány kép látszik egyszerre "Több kép" előtt

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
  const grid       = document.getElementById("galleryGrid");
  const loadMoreBtn= document.getElementById("loadMoreBtn");
  const loadMoreWrap=document.getElementById("loadMoreWrap");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let activeFilter = "all";
  let visibleCount = OLDAL_MERET;
  let renderedItems = []; // DOM elemek ugyanolyan sorrendben mint KEPEK

  // Galéria renderelése
  function renderGallery() {
    grid.innerHTML = "";
    renderedItems  = [];

    KEPEK.forEach((kep, idx) => {
      const btn = document.createElement("button");
      btn.className  = "gallery-item fade-in";
      btn.dataset.cat = kep.cat;
      btn.dataset.idx = idx;
      btn.setAttribute("role","listitem");
      btn.setAttribute("aria-label", kep.title);
      btn.innerHTML = `
        <img
          src="${kep.src}"
          alt="${kep.title}"
          loading="lazy"
          draggable="false"
        >
        <div class="gallery-overlay">
          <span class="gallery-item-title">${kep.title}</span>
        </div>`;

      btn.addEventListener("click", () => openLightbox(idx));
      grid.appendChild(btn);
      renderedItems.push(btn);

      // Fade-in observer
      fadeObs.observe(btn);
    });

    applyFilterAndPaging();
  }

  function applyFilterAndPaging() {
    let shown = 0;
    renderedItems.forEach((btn) => {
      const match = activeFilter === "all" || btn.dataset.cat === activeFilter;
      if (!match) {
        btn.classList.add("filtered-out");
        btn.classList.remove("hidden");
        return;
      }
      btn.classList.remove("filtered-out");
      if (shown < visibleCount) {
        btn.classList.remove("hidden");
        shown++;
      } else {
        btn.classList.add("hidden");
      }
    });

    const total = renderedItems.filter(b => activeFilter === "all" || b.dataset.cat === activeFilter).length;
    if (loadMoreWrap) loadMoreWrap.style.display = visibleCount >= total ? "none" : "block";
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      visibleCount = OLDAL_MERET;
      applyFilterAndPaging();
    });
  });

  loadMoreBtn?.addEventListener("click", () => {
    visibleCount += 8;
    applyFilterAndPaging();
  });

  renderGallery();

  // ── LIGHTBOX ─────────────────────────────────────────────────
  const lightbox   = document.getElementById("lightbox");
  const lbImg      = document.getElementById("lbImg");
  const lbTitle    = document.getElementById("lbTitle");
  const lbClose    = document.getElementById("lbClose");
  const lbPrev     = document.getElementById("lbPrev");
  const lbNext     = document.getElementById("lbNext");
  const lbBackdrop = document.getElementById("lbBackdrop");

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
    document.body.style.overflow = "";
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

});
