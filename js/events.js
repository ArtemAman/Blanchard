window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#events__button').addEventListener('click', function () {
    document.querySelectorAll('.events__hidden')[0].classList.toggle('events__shown')

  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#events__button').addEventListener('click', function () {
    document.querySelectorAll('.events__hidden')[1].classList.toggle('events__shown'); 
  })
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#events__button').addEventListener('click', function () {
    document.querySelector('#events__button').classList.add('events__hidden'); 
  })
})


$(".js-button-1").click(function() {
  $('.js-scroll-1').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".js-button-1").length) {
    $('.js-scroll-1').hide();
  }
  e.stopPropagation();
});





$(".js-button-2").click(function() {
  $('.js-scroll-2').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".js-button-2").length) {
    $('.js-scroll-2').hide();
  }
  e.stopPropagation();
});







$(".js-button-3").click(function() {
  $('.js-scroll-3').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".js-button-3").length) {
    $('.js-scroll-3').hide();
  }
  e.stopPropagation();
});






$(".js-button-4").click(function() {
  $('.js-scroll-4').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".js-button-4").length) {
    $('.js-scroll-4').hide();
  }
  e.stopPropagation();
});








$(".js-button-5").click(function() {
  $('.js-scroll-5').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".js-button-5").length) {
    $('.js-scroll-5').hide();
  }
  e.stopPropagation();
});


