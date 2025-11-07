gsap.from("#left", {
  height: 0,
  duration: 2,
  opacity: 0,
  ease: "power4",
})


gsap.from("#right h1", {
  x: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
  ease: "power4",
})


gsap.from("#right h3", {
  x: 100,
  duration: 1,
  delay: 1.5,
  opacity: 0,
  ease: "power4",
})

gsap.from("#coninfo", {
  duration: 1,
  delay: 4,
  opacity: 0,
  ease: "power4",
})

gsap.from('#hdone', {
  delay: 3.5,
  y: 100,
  duration: 1,
  opacity: 0,
  ease: "power4",

});


gsap.from('#dtl', {
  width: 0,
  delay: 4,
  duration: 1,
  opacity: 0,
  ease: "power4",

});




// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate #hdtwo when it enters the viewport
gsap.from("#hdtwo", {
  y: 100,
  duration: 1,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: "#hdtwo",
    toggleActions: "play none none none", // play on enter, no reset
    start: "top 100%", // start when the top of #hdtwo is at 80% of the viewport height
  },
});


gsap.from("video", {
  y: 100,
  duration: 1,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
  scrollTrigger: {
    trigger: "video",
    toggleActions: "play none none none", // play on enter, no reset
    start: "top 100%", // start when the top of #hdtwo is at 80% of the viewport height
  },
});



gsap.from("h3", {
  y: 100,
  duration: 1,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
  scrollTrigger: {
    trigger: "h3",
    toggleActions: "play none none none", // play on enter, no reset
    start: "top 80%", // start when the top of #hdtwo is at 80% of the viewport height
  },
});






gsap.from('#hdthree', {
  y: 100,
  duration: 1,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: ".scroll-wrapper .pic",
    start: "top 100%", // start when the top of #hdtwo is at 80% of the viewport height
  },
});

gsap.from(".scroll-wrapper .pic", {
  y: 100,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: "power4",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".scroll-wrapper .pic",
    start: "top 100%", // start when the top of #hdtwo is at 80% of the viewport height
  },
});


window.addEventListener("DOMContentLoaded", () => {
  // Split the text into lines
  const split = new SplitText("#introText", {
    type: "lines"
  });

  // Optional: make sure lines stack properly
  gsap.set("#introText", { perspective: 400 });

  // Animate each line with a staggered reveal
  gsap.from(split.lines, {
    delay: 2,
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power4",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#introText",
      toggleActions: "play none none none", // play on enter, no reset
      start: "top 80%", // start when the top of #hdtwo is at 80% of the viewport height
    },
  });
});

