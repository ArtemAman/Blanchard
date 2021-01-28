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

