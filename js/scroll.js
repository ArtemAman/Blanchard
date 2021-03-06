Array.prototype.forEach.call(    
  document.querySelectorAll('.header__scroll'),    
  el => new SimpleBar(el, {
      autoHide: false,
      scrollbarMaxSize: 28
    }      

  )  
);