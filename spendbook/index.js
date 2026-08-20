/* ===================================================================
   SpendBook — Showcase Website · JavaScript
   Vanilla JS for navigation, gallery filtering, and scroll-top.
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // =============================================
  //  NAVIGATION
  // =============================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const navHamburger = document.getElementById('navHamburger');
  const scrollTopBtn = document.getElementById('scrollTop');

  // Navbar shrink & Scroll-to-Top toggle
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });

  // Mobile menu toggle
  navHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Scroll-to-top button
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });

  // =============================================
  //  SHOWCASE GALLERY FILTER
  // =============================================
  const tabs = document.querySelectorAll('.showcase-tab');
  const galleryItems = document.querySelectorAll('.showcase-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      galleryItems.forEach(item => {
        const matches = filter === 'all' || item.dataset.category === filter;
        item.style.display = matches ? '' : 'none';
      });
    });
  });

  // =============================================
  //  ANCHOR NAVIGATION
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top });
      }
    });
  });
});