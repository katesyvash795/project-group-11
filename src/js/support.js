import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import '../../node_modules/swiper/swiper-bundle.css';

const swiperEl = document.querySelector(".swiper");
const swipeDownBtn = document.querySelector(".support-btn");

const swiper = new Swiper(swiperEl, {
  direction: 'vertical',
  rewind: true,
  loopSlides: 9,
  navigation: {
    nextEl: swipeDownBtn,
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

