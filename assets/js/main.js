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
            nextEl = $(this).find('.slider2-btn-next');
            prevEl = $(this).find('.slider2-btn-prev');
        }
        else {
            nextEl = '';
            prevEl = '';
        }
        var swiper = new Swiper(this, {
            autoHeight: true,
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

    $('.navbar-toggles').click(function(){
        $('.vertical-wrapper').slideToggle('slow');
    })
    $('.close').click(function() {
        $('.top-ads').css('display','none');
        // Store
        sessionStorage.setItem("checkHeaderTop", "hidden");
    })

    if(typeof(Storage) !== "undefined") { 
        var ssid = sessionStorage.getItem('checkHeaderTop');
        if(ssid) {
            if(ssid == 'hidden') {
                $('.top-ads').css('display','none');
            }
        }else {
            $('.top-ads').css('display','block');
        }
    }else {
        $('.top-ads').css('display','block');
    }

})