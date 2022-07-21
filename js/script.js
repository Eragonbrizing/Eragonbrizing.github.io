$(document).ready(function() {
    $('.burger__button, .menu__item').click(function(event) {
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

