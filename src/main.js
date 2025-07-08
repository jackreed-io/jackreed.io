import { gsap } from "gsap";

console.log("GSAP is loaded!");

// Basic test animation
gsap.to(".headline", {
  y: 50,
  opacity: 0,
  duration: 1,
});
