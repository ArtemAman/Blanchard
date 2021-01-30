window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#all_events_button').addEventListener('click', function () {
    document.querySelectorAll('.hidden')[0].classList.toggle('shown')

  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#all_events_button').addEventListener('click', function () {
    document.querySelectorAll('.hidden')[1].classList.toggle('shown'); 
  })
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#all_events_button').addEventListener('click', function () {
    document.querySelector('#all_events_button').classList.add('hidden'); 
  })
})


$(".hero_top_list_dropdown_1").click(function() {
  $('.scroll_class_1').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".hero_top_list_dropdown_1").length) {
    $('.scroll_class_1').hide();
  }
  e.stopPropagation();
});





$(".hero_top_list_dropdown_2").click(function() {
  $('.scroll_class_2').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".hero_top_list_dropdown_2").length) {
    $('.scroll_class_2').hide();
  }
  e.stopPropagation();
});







$(".hero_top_list_dropdown_3").click(function() {
  $('.scroll_class_3').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".hero_top_list_dropdown_3").length) {
    $('.scroll_class_3').hide();
  }
  e.stopPropagation();
});






$(".hero_top_list_dropdown_4").click(function() {
  $('.scroll_class_4').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".hero_top_list_dropdown_4").length) {
    $('.scroll_class_4').hide();
  }
  e.stopPropagation();
});








$(".hero_top_list_dropdown_5").click(function() {
  $('.scroll_class_5').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".hero_top_list_dropdown_5").length) {
    $('.scroll_class_5').hide();
  }
  e.stopPropagation();
});


