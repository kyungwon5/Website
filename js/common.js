var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
