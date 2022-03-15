$(".navbar-toggler").click(function (e) { 
    $(".collapse").slideToggle();
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 190) {
        $(".menu").addClass("fixMenu");
    }
    else {
        $(".menu").removeClass("fixMenu");
    }
});




var swiper1 = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.sliderRightBtn img',
        prevEl: '.sliderLeftBtn img',
    },
    // slidesPerView: 1,
    // spaceBetween: 15,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 20500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
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


$(".slidePuzzleWrapper").mouseover(function () { 
    var  elementHeight = $(this).find(".hoverPercentage").height();

    if ( elementHeight < 30){
        $(this).find("span").css("top", -20)
    }
    if ( elementHeight > 90){
        $(this).find("span").css("top", 20)
    }
});






$(".buyPuzzleBtn").click(function (e) {
    const ostan = $(".puzzleSliderWrapper .swiper .swiper-wrapper").find(".swiper-slide-active").find("p").html();
    console.log(ostan)
});

$(".searchBoxInner div").click(function (e) {
    searchNames()
});

$(".searchBoxInner input").keydown(function (e) {
    if (e.keyCode == 13) {
        searchNames()
    }
});

function searchNames(){
    var name = $(".searchBoxInner input").val();

    const names = [
        "خوزستان",
        "بوشهر",
        "فارس",
        "هرمزگان",
        "سیستان و بلوچستان",
        "تهران",
        "مازندران",
        "گیلان",
        "گلستان",
        "کرمان",
        "شیراز",
        "خراسان رضوی",
        "خراسان شمالی",
        "خراسان جنوبی",
        "خوزستان",
        "البرز",
        "اردبیل",
        "قزوین",
        "زنجان",
        "اذربایجان شرقی",
        "اذربایجان غربی",
        "کردستان",
        "کرمانشاه",
        "همدان",
        "اراک",
        "ایلام",
        "لرستان",
        "قم",
        "سمنان",
        "اصفهان",
        "یزد",
        "چهار محال بختیاری",
        "کهگیلویه بویراحمد",
    ];

    const names2 = [
        "فارس",
        "هرمزگان",
        "سیستان و بلوچستان",
        "تهران",
        "مازندران",
        "گیلان",
        "گلستان",
        "کرمان",
        "شیراز",
        "خراسان رضوی",
        "خراسان شمالی",
        "خراسان جنوبی",
        "خوزستان",
        "البرز",
        "اردبیل",
        "قزوین",
        "زنجان",
        "اذربایجان شرقی",
        "اذربایجان غربی",
        "کردستان",
        "کرمانشاه",
        "همدان",
        "اراک",
        "ایلام",
        "لرستان",
        "قم",
        "سمنان",
        "اصفهان",
        "یزد",
        "چهار محال بختیاری",
        "کهگیلویه بویراحمد",
        "خوزستان",
        "بوشهر",
    ];
    
    const names3 = [
        "سیستان و بلوچستان",
        "تهران",
        "مازندران",
        "گیلان",
        "گلستان",
        "کرمان",
        "شیراز",
        "خراسان رضوی",
        "خراسان شمالی",
        "خراسان جنوبی",
        "خوزستان",
        "البرز",
        "اردبیل",
        "قزوین",
        "زنجان",
        "اذربایجان شرقی",
        "اذربایجان غربی",
        "کردستان",
        "کرمانشاه",
        "همدان",
        "اراک",
        "ایلام",
        "لرستان",
        "قم",
        "سمنان",
        "اصفهان",
        "یزد",
        "چهار محال بختیاری",
        "کهگیلویه بویراحمد",
        "خوزستان",
        "بوشهر",
        "فارس",
        "هرمزگان",
    ];
    
    
    // var index = names.indexOf(name);

    if (swiper1.currentBreakpoint == 1440){
        var index = names.indexOf(name);
    }

    if (swiper1.currentBreakpoint == 1024){
        var index = names.indexOf(name);
    }
    
    if (swiper1.currentBreakpoint == 768){
        var index = names2.indexOf(name);
    }

    if (swiper1.currentBreakpoint == 640){
        var index = names2.indexOf(name);
    }

    if (swiper1.currentBreakpoint == "max"){
        var index = names3.indexOf(name);
    }


    if (name != "") {
        if (index != -1) {
            swiper1.slideTo(index);
        }
    }

    console.log(swiper1.currentBreakpoint);

}
