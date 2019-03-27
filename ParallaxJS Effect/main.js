$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        $(".parallax-back").css({
            'background-size': 100 + scrollPos + '%'
        })
    })
})