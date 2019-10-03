$(function () {
    $('.swiper-container').each(function (index,ele) {
        var wrapper = $(this).find('.swiper-wrapper');
        var itemSpace = wrapper.data('space');
        var item = wrapper.data('item');
        var itemPage = wrapper.data('pagi');
        var itemNav = wrapper.data('nav');
        var delay = wrapper.data('delay');
        var pagination = '';
        var nextEl = '';
        var prevEl = '';
        
        if(itemPage == 1) {
            pagination = $(this).find('.swiper-pagination');
        }
        else {
            pagination = ''
        }
        if(itemNav == 1) {
            nextEl = $(this).find('.swiper-button-next');
            prevEl = $(this).find('.swiper-button-prev');
        }
        else {
            nextEl = '';
            prevEl = '';
        }
        var swiper = new Swiper(this, {
            slidesPerView: item,
            spaceBetween: itemSpace,
            pagination: {
                el: pagination,
                clickable: true
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl
            },
            autoplay: {
                delay: delay,
                disableOnInteraction: false
            },
            loop: true
        })
    });

    // var swiper = new Swiper('.swiper-container', {
    //     autoplay: {
    //       delay: 3500,
    //       disableOnInteraction: false
    //     },
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //     effect: 'fade',
    //     loop: true
    // });

    $('.navbar-toggles').click(function(){
        $('.vertical-wrapper').slideToggle('slow');
    })
})