const tl = gsap.timeline({
    defaults: { duration: 0.35, ease: "Power2.easeOut" },
});


gsap.fromTo(".logo", {y: -100, opacity: 0}, {y:0, opacity:1});
gsap.fromTo(".hero-text", {opacity: 0}, {opacity: 1, duration: 2}, "<");
gsap.fromTo(".hero-img-left", {x: -100}, {x: 0}, "<");
gsap.fromTo(".hero-img-right", {x: 100}, {x: 0}, "<");
gsap.fromTo(".hero-img-mobile", {y: "-50%", opacity: 0}, {y: 0, opacity: 1}, "<")
