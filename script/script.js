
/*slick*/
$('.main-slider').slick({
    dots: true,
    infinite: true,
     vertical: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: false
});

/*slick*/
$('.main-slider_page-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.main-slider_nav'
});
$('.main-slider_nav').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    asNavFor: '.main-slider_page-two',
    dots: false,
    focusOnSelect: true
});

$('.slick-dots').wrap('<div id="slick-wrapper"></div>'); //*add wrapper for 'ul'*//
$('#slick-wrapper').css({'width': '1170px', 'margin': '0 auto'});//*add style for '#slick-wrapper'*//

/*menu-navbar*/
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-lin_footer").slideToggle();
    })
});

/*добавить удалить клас при клике на меню*/
$(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('menu-active');
    });
});

/*search-header*/
$(document).ready(function () {
    $(".user-place_search").click(function () {
        $(".user-place_form").slideToggle();
    })
});

/*drops-next*/
$(document).ready(function () {
    $(".section-drops").click(function () {
        $(".next-cards").slideToggle();
    })
});

/*range-slider*/
$('.range-slider').jRange({
    from: 0,
    to: 1100,
    step: 100,
    scale: [0,100,200,300,400, 500, 600, 700, 800, 900, 1000, 1100],
    format: '%s',
    width: 180,
    showLabels: true,
    isRange : true
});

/*счетчик кол.*/
var wrapper = document.querySelector('counter');
var countInput = document.getElementById('count');
var butM = document.getElementById('bminus');
var butP = document.getElementById('bplus');
var units = countInput.value.replace(/\d/g, '');
butP.onclick = function() {
    countInput.value = parseInt(countInput.value) + 1 + units;
};
butM.onclick = function() {
    if (parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value) - 1 + units;
    }
};


