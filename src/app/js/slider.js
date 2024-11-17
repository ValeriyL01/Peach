import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

export const swiperControl = () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
