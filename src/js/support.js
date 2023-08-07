import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import '../../node_modules/swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  navigation: {
    nextEl: 'support-btn',
    prevEl: 'support-btn swipe-up',
  },
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
