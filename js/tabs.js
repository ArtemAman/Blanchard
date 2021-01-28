window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog_header_button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab_content').forEach(function (tabContent) {
        tabContent.classList.remove('tab_content_active')
      })
      document.querySelectorAll('.catalog_header_button').forEach(function (tabborder) {
        tabborder.classList.remove('country_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab_content_active')
      document.querySelectorAll('.catalog_header_button').forEach(function (tabborderadd) {
        tabborderadd.addEventListener('click', function (event2) {
          event2.target.classList.add('country_active')
        })
      })
    })
  });
})


window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion_inside_links').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog_left_variable').forEach(function (tabContent) {
        tabContent.classList.remove('left_visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('left_visible')
    })
  });
})



window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.hero_top_list_link').forEach(function (herolink) {
    herolink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.scroll_class').forEach(function (scrolldell) {
        scrolldell.classList.remove('scroll_visible')
      })
      document.querySelectorAll('.list_arrow').forEach(function (scrolldell) {
        scrolldell.classList.remove('list_arrow_up')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('scroll_visible')
    })
    document.querySelectorAll('.hero_top_list_link').forEach(function (changecolor) {
      changecolor.addEventListener('click', function (event3) {
        event3.target.classList.toggle('changed')
      })

    })

  })
})


