import Lenis from "lenis";

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Seleccionar todas las tarjetas
const cards = document.querySelectorAll(".card");

// Animar cada tarjeta
cards.forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      x: 300, // Inicia fuera de la pantalla hacia la izquierda
      opacity: 0, // Comienza invisible
    },
    {
      x: 0, // Movimiento a la posición original
      opacity: 1, // Se vuelve visible
      duration: 1, // Duración de la animación
      delay: index * 0.2, // Delay progresivo (0.2 segundos entre cada tarjeta)
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // La animación comienza cuando la tarjeta está al 80% desde la parte superior de la pantalla
        end: "top 30%", // Termina cuando la tarjeta está al 30% desde la parte superior de la pantalla
        scrub: true, // Hace que el movimiento sea más suave
      },
    }
  );
});

// Selecciona el contenedor del video
const videoContainer = document.querySelector(".tvideo");

// Animar el alto del contenedor con ScrollTrigger
gsap.to(videoContainer, {
  height: "100dvh", // Nuevo valor de altura al hacer scroll
  scrollTrigger: {
    trigger: videoContainer, // El disparador de la animación es el contenedor del video
    start: "top bottom", // La animación comienza cuando el contenedor llega al fondo de la pantalla
    end: "bottom top", // La animación termina cuando el contenedor sale de la parte superior de la pantalla
    scrub: true, // Hace que la animación sea más suave y controlada por el desplazamiento del scroll
  },
});
