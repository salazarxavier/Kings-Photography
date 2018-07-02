$(function () {

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.form-control').on('click', function (e) {
        $('this').css('border', 'solid red 2px');
    });

});