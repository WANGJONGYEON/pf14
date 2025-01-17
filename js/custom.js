$(function () {
    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,

        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
    })
})