$('.service-price__icon2').click(function() {
    $('.service-price__modal-window').show();
    return false;
});

$(document).mouseup(function(e) {
    var popup = $('.service-price__modal');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.service-price__modal-window').hide();
    }
});

$('.order-button').click(function() {
    $('.service-price__modal-window').hide();
    return false;
});

$('.header__nav-menu').click(function() {
    $('.header__nav-menu').hide();
    $('.header__nav-link').show();
    return false;
});


$('.header__nav-hide').click(function() {
    $('.header__nav-hide').hide();
    $('.header__nav-link').hide();
    $('.header__nav-menu').show();
    return false;
});


var line_canvas = document.getElementById("line"),
    context = line_canvas.getContext("2d");
context.beginPath();
context.lineTo(20, 0);
context.lineTo(20, 34);
context.closePath();
context.strokeStyle = "#c4055e";
context.stroke();
context.beginPath();
context.lineTo(20, 34);
context.lineTo(80, 38);
context.closePath();
context.strokeStyle = "#c4055e";
context.stroke();
context.beginPath();
context.lineTo(80, 38);
context.lineTo(20, 42);
context.closePath();
context.strokeStyle = "#c4055e";
context.stroke();
context.beginPath();
context.lineTo(20, 42);
context.lineTo(20, 154);
context.closePath();
context.strokeStyle = "#c4055e";
context.stroke();