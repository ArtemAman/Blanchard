var mySwiper = new Swiper('#swiper_1', {

    loop: true,

    navigation: {
      nextEl: '.js-next-1',
      prevEl: '.js-prev-1',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

})


var secondSwiper = new Swiper('#swiper_2', {

  loop: true,

  navigation: {
    nextEl: '.js-next-2',
    prevEl: '.js-prev-2',
  },
  pagination: {
    el: '.swiper-pagination-2',
    type: 'fraction',
  },

})


var lastSwiper = new Swiper('#swiper_3', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,

  navigation: {
    nextEl: '.js-next-3',
    prevEl: '.js-prev-3',
  },
  

})