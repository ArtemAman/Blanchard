window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog_header_button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab_content').forEach(function(tabContent){
        tabContent.classList.remove('tab_content_active')
        })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab_content_active')
    })
    
  });


})

