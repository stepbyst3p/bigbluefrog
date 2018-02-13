$(document).on("scroll", function () {
    if ($(document).scrollTop() > 100) {
        $("nav").addClass("navbar-setting");
        $("nav").removeClass("transparent");
    }
    else {
        $("nav").removeClass("navbar-setting");
        $("nav").addClass("transparent");
    }
});

$(document).ready(function () {
    $('.team-photo-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    });
    $('.btn-slider-left').click(function () {
        $('.team-photo-slider').slick('slickPrev');
    })

    $('.btn-slider-right').click(function () {
        $('.team-photo-slider').slick('slickNext');
    })
});


$('#clock').countdown('2018/03/10', function (event) {
    $(this).html(event.strftime('%D дня %H:%M:%S'));
});