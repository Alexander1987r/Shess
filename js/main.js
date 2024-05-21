
const swiper= new Swiper('.stages__list',{
  navigation:{
      prevEl:'.swiper-button-prev',
      nextEl:'.swiper-button-next'
  },
  pagination:{
      el:'.swiper-pagination',
      clickable:false,
  },
  breakpoints: {
    // when window width is >= 320px
    1366: {enabled: false},
  },
});

const newSwiper= new Swiper('.list',{
  navigation:{
    prevEl:'.swiper-button-prev',
    nextEl:'.swiper-button-next'
  },
  pagination:{
    el:'.number-pagination',
    type:'fraction',
  },
  breakpoints: {
    768:{
      slidesPerView:2,
    },
    1366:{
      slidesPerView:3,
    },
  },
});
