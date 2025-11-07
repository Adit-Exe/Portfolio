window.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // ===== SplitText Animation =====
  const splitElements = document.querySelectorAll("#split");
  splitElements.forEach(el => {
    const split = new SplitText(el, { type: "lines" });
    gsap.from(split.lines, {
      duration: 1.2,
      autoAlpha: 0,
      y: 60,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom bottom", // animation continues until bottom is visible
        scrub: false,
        once: true,
      }
    });
  });

  // ===== Hero Section =====
  gsap.from("#hero img", {
    y: 80,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from("#hero h1", {
    y: 40,
    autoAlpha: 0,
    duration: 1,
    delay: 0.3,
    ease: "power4.out"
  });

  // ===== Animate Each Box, Techbox, and Icon Individually =====
  const animEls = document.querySelectorAll("#sec2, #sec3 .box, #techbox .techbox, .tak a, #app");

  animEls.forEach(el => {
    gsap.from(el, {
      y: 100,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",      // starts when the element is entering viewport
        end: "bottom bottom",  // ensures full visibility before ending
        toggleActions: "play none none none",
        once: true,
      }
    });
  });

  // ===== Animate Section Titles =====
  gsap.utils.toArray("h2").forEach(title => {
    gsap.from(title, {
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true,
      }
    });
  });

  // Final refresh
  setTimeout(() => ScrollTrigger.refresh(), 1000);
});
