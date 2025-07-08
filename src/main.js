import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  console.log("GSAP loaded and DOM ready");

  gsap.to(".heading-style-h1", {
    y: 50,
    opacity: 0,
    duration: 1,
  });
});
