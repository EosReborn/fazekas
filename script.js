document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 2. Intersection Observer for Fade-ins
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach(el => {
    fadeObserver.observe(el);
  });

  // 3. Lightbox Logic
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxVisual = document.getElementById("lightbox-visual");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-description");

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      // Setup data
      const imgDiv = item.querySelector(".gallery-image");
      const bgImage = getComputedStyle(imgDiv).backgroundImage;
      
      lightboxVisual.style.backgroundImage = bgImage;
      lightboxTitle.textContent = item.dataset.title || "";
      lightboxDesc.textContent = item.dataset.description || "";
      
      // Open
      lightbox.hidden = false;
      document.body.style.overflow = "hidden"; // prevet scroll background
    });
  });

  // Close functionality
  lightbox.addEventListener("click", (e) => {
    if(e.target.dataset.close === "true") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });

  // 4. Form Submit Dev Mock
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Köszönjük érdeklődésed! Mivel ez egy új fejlesztésű landing oldal, az űrlap jelenleg bemutató célokat szolgál.");
      form.reset();
    });
  }

});
