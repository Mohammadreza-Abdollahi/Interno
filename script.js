const workSwiper = new Swiper('.works-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay : 3000
  },
  slidesPerView: 3,
  spaceBetween : 42,
  // Navigation arrows
  navigation: {
    nextEl: '.works-swiper-button-next',
    prevEl: '.works-swiper-button-prev',
  },

});
const testimonialSwiper = new Swiper('.testimonial-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay : 3000
  },
  // If we need pagination
  pagination: {
    el: '.testimonial-pagination',
    clickable: true,
  },
});
const brandSwiper = new Swiper('.brands-slider', {
 slidesPerView: "auto",
 loop: true,
 centeredSlides: true,
 speed: 5000,
 allowTouchMove: false,
 disableOnInteraction: false,
 autoplay:{
  delay: 1,
 }
});
