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



    676: {

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

var lastSwiper = new Swiper('#swiper_3', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoHeight: true,

  navigation: {
    nextEl: '.js-next-3',
    prevEl: '.js-prev-3',
  },

  breakpoints: {
    1026: {

      slidesPerView: 3,
      spaceBetween: 50,

    },
    675: {
      autoHeight: false,
      slidesPerView: 2,
      spaceBetween: 35,

    },
  }
})




const slider_2 = document.querySelector('#swiper_2');

let mySwiper_2;

function mobileSlider_2() {
  if (window.innerWidth >= 480) {
    mySwiper_2 = new Swiper('#swiper_2', {

      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
      autoHeight: true,
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
          autoHeight: true,
          centeredSlides: false,
          initialSlide: 0,

        },
        1240: {

          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 35,
          autoHeight: true,
          centeredSlides: false,
          initialSlide: 0,

        },

      }

    })

    if (window.innerWidth < 480) {
      if (slider_2.classList.contains('swiper-container-initialized')) {
        mySwiper_2.destroy();
      }
    }
  }
}

mobileSlider_2();





const slider = document.querySelector('.events__swiper');

let mySwiper;


function mobileSlider() {


  if (window.innerWidth <= 675 && slider.dataset.mobile == 'false') {

    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination_3',
        clickable: true,


      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 675) {

    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
  mobileSlider_2();
});