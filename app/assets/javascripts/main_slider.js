var Slider = {
  timeInterval: 3000,
  slides: $('.carousel-inner li')
};

$(document).ready(function () {
  var slideTimer = setInterval(function () {
    Slider.nextSlide();
  }, 2000);
});

Slider.nextSlide = function () {
  var $activeSlide = $('.carousel-inner li.active');
  Slider.inactivateSlides();
  $activeSlide.next().fadeIn(1500).addClass('active');

  if ($activeSlide.index() === Slider.slides.length - 1) {
    Slider.inactivateSlides();
    Slider.slides.first().fadeIn(1500).addClass('active');
  };
}

Slider.inactivateSlides = function () {
  Slider.slides.removeClass('active');
}


