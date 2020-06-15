$(document).ready(function () {

    $('.menu').children().click(function () {
        $(this).children('.submenu').slideToggle();
    });

});