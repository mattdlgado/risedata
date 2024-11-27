import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

var swiper = new Swiper(".projectsSwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".projectsSwiper-button-next",
    prevEl: ".projectsSwiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".testimonialsSwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".testimonialsSwiper-button-next",
    prevEl: ".testimonialsSwiper-button-prev",
  },
});
