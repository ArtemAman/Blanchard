window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__two-sections').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__sections-visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__sections-visible')

    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links_it').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__visible')
    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links_fr').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.fr__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('fr__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('fr__visible')
    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links_ger').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.ger__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('ger__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('ger__visible')
    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links_ru').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.ru__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('ru__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('ru__visible')
    })
  });
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links_bl').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.bl__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('bl__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('bl__visible')
    })
  });
})




