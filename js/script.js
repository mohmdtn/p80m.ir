var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prvBtn',
    },
    slidesPerView: 1,
    spaceBetween: 15,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 15,
        }
    }
});






$(".buyPuzzleBtn").click(function (e) { 
    const ostan = $(".puzzleSliderWrapper .swiper .swiper-wrapper").find(".swiper-slide-active").find("p").html();
    console.log(ostan)
});
