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
      $('.publications__check-item').addClass('visually-hidden');

    }
  }

  hideCheckboxes();


  function showCheckboxes() {
    if (window.innerWidth > 480) {
      $('.publications__check-item').removeClass('visually-hidden');

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
      $(".events__card").removeClass("hidden");


    }
  }
  hideButton()

  function showButton() {
    if (window.innerWidth > 675) {      
      $(".events__card_more").addClass("hidden");

    }
  }
  showButton()


  function addCrossCheckboxes() {
    if (window.innerWidth <= 480) {
      $('.publications__input').change(function () {
        if (this.checked) {
          $(this).closest('.publications__check-item').addClass('add_cross');
        }
        else {
          $(this).closest('.publications__check-item').removeClass('add_cross');
        }

      });

    }
  }

  addCrossCheckboxes()




  window.addEventListener('resize', () => {
    addContainer();
    hideCheckboxes();
    hideCards()
    showCards()
    hideButton()
    showButton()
    showCheckboxes()
    addCrossCheckboxes()

  });


  $(".publications__check-item.add_cross").click(function () {
    $(this).removeClass("add_cross");
    $(this).addClass("visually-hidden");
  });

 



  $(".publications__categories").click(function () {
    $(".publications__categories").toggleClass("opened");
    $('.publications__check-item').each(function () {
      if ($(this).hasClass('add_cross')) {
      }
      else {
        $(this).toggleClass("visually-hidden");

      }
    })
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




  $('.catalog__list-item').click(function () {
    var id = $(this).attr('data-path'),
      content = $('.catalog__two-sections[data-path="' + id + '"]');

    $('.catalog__list-item.country-active').removeClass('country-active');
    $(this).addClass('country-active');

    $('.catalog__two-sections.catalog__sections-visible').removeClass('catalog__sections-visible'); // 3
    content.addClass('catalog__sections-visible');
  });





  $('.catalog__inside-links').click(function () {
    var id = $(this).attr('data-path'),
      content = $('.catalog__left-content[data-path="' + id + '"]');
    $(this).siblings('.catalog__inside-links').removeClass('catalog__inside-links_active');
    $(this).addClass('catalog__inside-links_active');

    content.siblings('.catalog__left-content').removeClass('visible'); // 3
    content.addClass('visible');
  });




  $('.header__button').click(function () {
    $(this).siblings('.header__scroll').addClass('visible');
    $(this).find('.header__arrow').addClass('open');
    $(this).addClass('violet');
  });

  $(document).mouseup(function (e) {
    var block = $(".header__scroll");
    if (!block.is(e.target) &&
      block.has(e.target).length === 0) {
      block.removeClass('visible');
      $('.header__arrow').removeClass('open');
      $('.header__button').removeClass('violet');

    }


  });


})