window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#events__button').addEventListener('click', function () {
    document.querySelector('#events__button').classList.add('hidden');
  })


  function addContainer() {
    if (window.innerWidth <= 767) {
      document.querySelector('#contacts__left').classList.add('container-inside');
  
    }
  }
  addContainer();
  
  
  function hideCheckboxes() {
    if (window.innerWidth <= 480) {
      document.querySelector('.publications__checkbox').classList.add('hidden');
  
    }
  }
  
  hideCheckboxes();
  
  
  function showCheckboxes() {
    if (window.innerWidth > 480) {
      document.querySelector('.publications__checkbox').classList.remove('hidden');
  
    }
  }
  
  showCheckboxes();
  
  
  function hideCards() {
    if (window.innerWidth <= 980) {
      document.querySelector('.events__card_3').classList.add('hidden');
  
    }
  }
  hideCards()
  
  function showCards() {
    if (window.innerWidth > 980) {
      document.querySelector('.events__card_3').classList.remove('hidden');
  
    }
  }
  showCards()
  
  function hideButton() {
    if (window.innerWidth <= 675) {
      document.querySelector('.events__button').classList.add('hidden');
      $(".events__card").removeClass("hidden");
  
  
    }
  }
  hideButton()
  
  function showButton() {
    if (window.innerWidth > 675) {
      document.querySelector('.events__button').classList.remove('hidden');
      $(".events__card_more").addClass("hidden");
  
    }
  }
  showButton()
  
  
  
  window.addEventListener('resize', () => {
    addContainer();
    hideCheckboxes();
    hideCards()
    showCards()
    hideButton()
    showButton()
    showCheckboxes()
  });



  $(".publications__categories").click(function () {
    $(".publications__checkbox").toggleClass("hidden");
  });
  
  
  $("#events__button").click(function () {
    $(".events__card").removeClass("hidden");
  });
  
  $(".header__burger").click(function () {
    $(".header__navigation").toggleClass("shown");
    $(".header__toplist-item").removeClass("hidden");
  });
  
  $(".header__link").click(function () {
    $(".header__navigation").toggleClass("shown");
  });
  
  $(".header__exit").click(function () {
    $(".header__navigation").toggleClass("shown");
  });




  $('.catalog__list-item').click(function() {
    var id = $(this).attr('data-path'),
        content = $('.catalog__two-sections[data-path="'+ id +'"]');
    
    $('.catalog__list-item.country-active').removeClass('country-active'); 
    $(this).addClass('country-active'); 
    
    $('.catalog__two-sections.catalog__sections-visible').removeClass('catalog__sections-visible'); // 3
    content.addClass('catalog__sections-visible'); 
  });
  




  $('.catalog__inside-links').click(function() {
    var id = $(this).attr('data-path'),
        content = $('.catalog__left-content[data-path="'+ id +'"]');
    
    $('.catalog__inside-links.catalog__inside-links_active').removeClass('catalog__inside-links_active'); 
    $(this).addClass('catalog__inside-links_active'); 
    
    $('.catalog__left-content.visible').removeClass('visible'); // 3
    content.addClass('visible'); 
  });




  // $(function(){
  //   $(".catalog__inside-links").click(function (active) {
  //     $(".catalog__inside-links").removeClass("catalog__inside-links_active");
  //     $(active.target).addClass("catalog__inside-links_active")
  //   });
// });






})







// $(".catalog__inside-links_it").click(function (active) {
//   $(".catalog__inside-links_it").removeClass("catalog__inside-links_active");
//   $(active.target).addClass("catalog__inside-links_active")
// });

// $(".catalog__inside-links_fr").click(function (active) {
//   $(".catalog__inside-links_fr").removeClass("catalog__inside-links_active");
//   $(active.target).addClass("catalog__inside-links_active")
// });

// $(".catalog__inside-links_ger").click(function (active) {
//   $(".catalog__inside-links_ger").removeClass("catalog__inside-links_active");
//   $(active.target).addClass("catalog__inside-links_active")
// });

// $(".catalog__inside-links_ru").click(function (active) {
//   $(".catalog__inside-links_ru").removeClass("catalog__inside-links_active");
//   $(active.target).addClass("catalog__inside-links_active")
// });

// $(".catalog__inside-links_bl").click(function (active) {
//   $(".catalog__inside-links_bl").removeClass("catalog__inside-links_active");
//   $(active.target).addClass("catalog__inside-links_active")
// });





















$(".js-button-1").click(function () {
  $('.js-scroll-1').toggle();
  $(".js-arrow-1").toggleClass("open");
  $(".js-button-1").toggleClass("violet");
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".js-button-1").length) {
    $('.js-scroll-1').hide();
    $(".js-arrow-1").removeClass("open");
    $(".js-button-1").removeClass("violet");
  }
  e.stopPropagation();
});



$(".js-button-2").click(function () {
  $('.js-scroll-2').toggle();
  $(".js-arrow-2").toggleClass("open");
  $(".js-button-2").toggleClass("violet");
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".js-button-2").length) {
    $('.js-scroll-2').hide();
    $(".js-arrow-2").removeClass("open");
    $(".js-button-2").removeClass("violet");
  }
  e.stopPropagation();
});



$(".js-button-3").click(function () {
  $('.js-scroll-3').toggle();
  $(".js-arrow-3").toggleClass("open");
  $(".js-button-3").toggleClass("violet");
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".js-button-3").length) {
    $('.js-scroll-3').hide();
    $(".js-arrow-3").removeClass("open");
    $(".js-button-3").removeClass("violet");
  }
  e.stopPropagation();
});



$(".js-button-4").click(function () {
  $('.js-scroll-4').toggle();
  $(".js-arrow-4").toggleClass("open");
  $(".js-button-4").toggleClass("violet");
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".js-button-4").length) {
    $('.js-scroll-4').hide();
    $(".js-arrow-4").removeClass("open");
    $(".js-button-4").removeClass("violet");
  }
  e.stopPropagation();
});








$(".js-button-5").click(function () {
  $('.js-scroll-5').toggle();
  $(".js-arrow-5").toggleClass("open");
  $(".js-button-5").toggleClass("violet");
});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".js-button-5").length) {
    $('.js-scroll-5').hide();
    $(".js-arrow-5").removeClass("open");
    $(".js-button-5").removeClass("violet");
  }
  e.stopPropagation();
});












