$(document).ready(function() {
    $('.burger__button').click(function(event) {
        $('.menu__list, .burger__button').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function ibg(){

    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
    
ibg();

(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('asyncImage');
  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ? 
        item.src = item.dataset.src :        
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();
