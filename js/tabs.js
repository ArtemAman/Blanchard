window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-active')

    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__inside-links').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__invisible').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__visible')
    })
  });
})





