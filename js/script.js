var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prvBtn',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 7,
            spaceBetween: 10,
        }
    }
});
