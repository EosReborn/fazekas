document.addEventListener("DOMContentLoaded", () => {

  // ===== COOKIE BANNER =====
  const cookieBanner  = document.getElementById("cookieBanner");
  const cookieAccept  = document.getElementById("cookieAccept");
  const cookieDecline = document.getElementById("cookieDecline");
  const cookieSettings = document.getElementById("cookieSettings");
  const COOKIE_KEY = "fazekas_cookie_v1";

  function setCookie(name, val, days) {
    const exp = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(val)}; expires=${exp}; path=/; SameSite=Lax`;
  }
  function getCookie(name) {
    return document.cookie.split("; ").reduce((r, v) => {
      const [k, val] = v.split("=");
      return k === name ? decodeURIComponent(val) : r;
    }, null);
  }
  function hideBanner() { cookieBanner.classList.remove("is-visible"); }
  function showBanner() { setTimeout(() => cookieBanner.classList.add("is-visible"), 900); }

  if (!getCookie(COOKIE_KEY)) showBanner();

  cookieAccept?.addEventListener("click",  () => { setCookie(COOKIE_KEY, "accepted", 365); hideBanner(); });
  cookieDecline?.addEventListener("click", () => { setCookie(COOKIE_KEY, "declined",  30); hideBanner(); });
  cookieSettings?.addEventListener("click", showBanner);


  // ===== HAMBURGER NAV =====
  const navbar    = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");
  const navOverlay= document.getElementById("navOverlay");

  function openMenu() {
    navLinks.classList.add("is-open");
    navOverlay.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Menü bezárása");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    navLinks.classList.remove("is-open");
    navOverlay.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Menü megnyitása");
    document.body.style.overflow = "";
  }

  navToggle?.addEventListener("click", () => {
    navLinks.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  navOverlay?.addEventListener("click", closeMenu);

  // Close on nav link click
  navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  // Close on Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && navLinks.classList.contains("is-open")) closeMenu();
  });

  // Navbar scroll shadow
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });


  // ===== FADE-IN OBSERVER =====
  const fadeObs = new IntersectionObserver(
    (entries, obs) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  document.querySelectorAll(".fade-in").forEach(el => fadeObs.observe(el));


  // ===== GALLERY FILTER =====
  const filterBtns   = document.querySelectorAll(".filter-btn");
  const allItems      = Array.from(document.querySelectorAll(".gallery-item"));
  let   activeFilter  = "all";
  let   showCount     = 12;

  function applyFilter() {
    allItems.forEach(item => {
      const match = activeFilter === "all" || item.dataset.category === activeFilter;
      item.classList.toggle("filtered-out", !match);
    });
    applyLoadMore();
  }

  function applyLoadMore() {
    const visible = allItems.filter(i => !i.classList.contains("filtered-out"));
    visible.forEach((item, idx) => item.classList.toggle("hidden", idx >= showCount));
    const loadBtn = document.getElementById("loadMoreBtn");
    if (loadBtn) loadBtn.style.display = showCount >= visible.length ? "none" : "inline-flex";
  }

  filterBtns.forEach(btn => btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    showCount = 12;
    applyFilter();
  }));

  document.getElementById("loadMoreBtn")?.addEventListener("click", () => {
    showCount += 8;
    applyLoadMore();
  });

  applyFilter(); // initial


  // ===== LIGHTBOX =====
  const lightbox      = document.getElementById("lightbox");
  const lbVisual      = document.getElementById("lightbox-visual");
  const lbTitle       = document.getElementById("lightbox-title");
  const lbDesc        = document.getElementById("lightbox-description");
  const lbPrev        = document.getElementById("lightboxPrev");
  const lbNext        = document.getElementById("lightboxNext");

  let lbIndex = 0;
  let lbItems = [];

  function getVisibleItems() {
    return allItems.filter(i => !i.classList.contains("filtered-out") && !i.classList.contains("hidden"));
  }

  function showLbItem(idx) {
    const item = lbItems[idx];
    if (!item) return;
    const bg = getComputedStyle(item.querySelector(".gallery-image")).backgroundImage;
    lbVisual.style.backgroundImage = bg;
    lbVisual.setAttribute("aria-label", item.dataset.title || "");
    lbTitle.textContent = item.dataset.title || "";
    lbDesc.textContent  = item.dataset.description || "";
    if (lbPrev) lbPrev.style.display = idx === 0 ? "none" : "flex";
    if (lbNext) lbNext.style.display = idx === lbItems.length - 1 ? "none" : "flex";
  }

  function openLightbox(idx) {
    lbItems = getVisibleItems();
    lbIndex = idx;
    showLbItem(lbIndex);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lbTitle.focus?.();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = navLinks.classList.contains("is-open") ? "hidden" : "";
  }

  allItems.forEach(item => {
    item.addEventListener("click", () => {
      const vis = getVisibleItems();
      const idx = vis.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  lbPrev?.addEventListener("click", () => { if (lbIndex > 0) { lbIndex--; showLbItem(lbIndex); } });
  lbNext?.addEventListener("click", () => { if (lbIndex < lbItems.length - 1) { lbIndex++; showLbItem(lbIndex); } });

  lightbox?.addEventListener("click", e => { if (e.target.dataset.close === "true") closeLightbox(); });

  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") { closeLightbox(); return; }
    if (e.key === "ArrowLeft"  && lbIndex > 0)               { lbIndex--; showLbItem(lbIndex); }
    if (e.key === "ArrowRight" && lbIndex < lbItems.length-1) { lbIndex++; showLbItem(lbIndex); }
  });

  // Touch swipe on lightbox
  let touchStartX = 0;
  lbVisual?.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive:true });
  lbVisual?.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0 && lbIndex < lbItems.length-1) { lbIndex++; showLbItem(lbIndex); }
    if (dx > 0 && lbIndex > 0)                { lbIndex--; showLbItem(lbIndex); }
  }, { passive:true });

});
