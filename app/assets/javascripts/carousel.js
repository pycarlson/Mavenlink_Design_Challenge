var Slider = {
};

$(document).ready(function () {
  Slider.checkBrowserWidth();
  setInterval(function () {
    Slider.nextSlide()
  }, 5000);
});

Slider.nextSlide = function () {
  var $activeSlide = $('.carousel-inner li.active');
  Slider.inactivateSlides();
  $activeSlide.next().addClass('active');

  if ($activeSlide.index() === $('.carousel-inner li').length - 1) {
    Slider.inactivateSlides();
    $('.carousel-inner li').first().addClass('active');
  };
}

Slider.inactivateSlides = function () {
  $('.carousel-inner li').removeClass('active');
}

Slider.checkBrowserWidth = function () {
  if ($(window).width() < 480) {
    $('#large-carousel').replaceWith($('#phone-carousel').show());
  } else {
    $('#phone-carousel').remove();
  }
}

function doOnOrientationChange () {
  switch(window.orientation) 
  {  
    case -90:
    case 90:

    $('#product-carousel').css('height', '400px').css('width', '300px');
    break; 
    default:
    break; 
  }
}

window.addEventListener('orientationchange', doOnOrientationChange);

doOnOrientationChange();

