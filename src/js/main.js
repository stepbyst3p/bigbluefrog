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