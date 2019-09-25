$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'fade',
        loop: true
    });
})