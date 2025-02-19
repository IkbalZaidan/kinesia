
$(document).ready(function () {
    $(".vs-carousel").slick("unslick"); // Remove old instance
    $(".vs-carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

  
});

$(document).ready(function () {
    if ($(".vs-carousel2").hasClass("slick-initialized")) {
        $(".vs-carousel2").slick("unslick");
    }

    $(".vs-carousel2").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});


$(document).ready(function () {
    if ($(".vs-carousel3").hasClass("slick-initialized")) {
        $(".vs-carousel3").slick("unslick");
    }

    $(".vs-carousel3").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});