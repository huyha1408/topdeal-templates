$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 4000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'fade',
        loop: true
    });
})