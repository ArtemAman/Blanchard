


var gallerySwiper = new Swiper('.gallery__swiper-container', {


      direction: 'horizontal',
      allowTouchMove: false,


      navigation: {
        nextEl: '.js-next-1',
        prevEl: '.js-prev-1',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },


      breakpoints: {

      1650: {

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        slidesPerColumn: 2,
        autoHeight: false,
        centeredSlides: false,
        initialSlide: 0,

      },

      1431: {

        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 35,
        slidesPerColumn: 2,
        autoHeight: false,
        centeredSlides: false,
        initialSlide: 0,  
        
      },

      1025: {

        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
        slidesPerColumn: 2,
        autoHeight: false,
        centeredSlides: false,
        initialSlide: 0,

      },


      768: {

        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
        slidesPerColumn: 2,
        autoHeight: false,
        centeredSlides: false,
        initialSlide: 0,

      },

      320: {

        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        allowTouchMove: true,

      },

    }  

  })





var secondSwiper = new Swiper('#swiper_2', {

  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 35,
  autoHeight: false,
  centeredSlides: false,
  initialSlide: 0,

  navigation: {
    nextEl: '.js-next-2',
    prevEl: '.js-prev-2',
  },
  pagination: {
    el: '.swiper-pagination-2',
    type: 'fraction',
  },

  breakpoints: {

    1650: {

      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      autoHeight: false,
      centeredSlides: false,
      initialSlide: 0,

    },
    1240: {

      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
      autoHeight: false,
      centeredSlides: false,
      initialSlide: 0,

    },

  }  

})


var lastSwiper = new Swiper('#swiper_3', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.js-next-3',
    prevEl: '.js-prev-3',
  },

  breakpoints: {

    1025: {

      slidesPerView: 3,
      spaceBetween: 50,

    },



    675: {

      slidesPerView: 2,
      spaceBetween: 50,

    },


  }


})



