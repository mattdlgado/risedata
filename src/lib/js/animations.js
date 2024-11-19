// LenisJS
import Lenis from "lenis";
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// GSAP > Hero
const feah = document.querySelector(".feah");
const hero = document.querySelector(".hero");
const mvideo = document.querySelector(".mvideo");

gsap.to(hero, {
  y: 100,
  scrollTrigger: {
    trigger: feah,
    start: "bottom bottom",
    end: "bottom center",
    scrub: 2,
  },
});

gsap.to(mvideo, {
  opacity: 0.1,
  scrollTrigger: {
    trigger: feah,
    start: "bottom bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// GSAP > Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    }
  );
});

// GSAP > Data video
const dataVideo = document.querySelector(".tvideo");

gsap.to(dataVideo, {
  height: "100dvh",
  scrollTrigger: {
    trigger: dataVideo,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
