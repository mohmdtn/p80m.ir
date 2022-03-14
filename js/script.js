var swiper1 = new Swiper('.mySwiper', {
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
      delay: 20500,
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


var swiper2 = new Swiper('.mySwiper2', {
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

$(".searchBoxInner div").click(function (e) { 
    var name = $(".searchBoxInner input").val();

    // var slide = $(".puzzleSliderWrapper .swiper .swiper-wrapper").find(".swiper-slide-active").find("p").html(name)

    if (name == "یزد"){
        swiper1.slideTo(30, false, false);
    }
    else if (name == "خوزستان"){
        swiper1.slideTo(0, false, false);
    }
    else if (name == "بوشهر"){
        swiper1.slideTo(1, false, false);
    }
    else if (name == "فارس"){
        swiper1.slideTo(2, false, false);
    }
    else if (name == "هرمزگان"){
        swiper1.slideTo(3, false, false);
    }
    else if (name == "سیستان و بلوچستان"){
        swiper1.slideTo(4, false, false);
    }
    else if (name == "تهران"){
        swiper1.slideTo(5, false, false);
    }

    // swiper1.slideTo(5, false, false);


});
