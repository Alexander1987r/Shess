
const swiper= new Swiper('.stages__list',{
  navigation:{
      prevEl:'.stages__list-button_prev',
      nextEl:'.stages__list-button_next'
  },
  pagination:{
      el:'.stages__list-pagination',
      clickable:false,
  },
  breakpoints: {

    1366: {enabled: false},
  },
});



const newSwiper= new Swiper('.participants__list',{
  navigation:{
    prevEl:'.participants__list-button_prev',
    nextEl:'.participants__list-button_next',
  },
  pagination:{
    el:'.participants__list-pagination',
    type:'fraction',
  },
  breakpoints: {
    768:{
      slidesPerView:2,
      spaceBetween:20,
    },
    1366:{
      slidesPerView:3,
      spaceBetween:20,
    },
  },
});

