var Slider = {
  timeInterval: 1500,
  slides: $('.carousel-inner li')
};

$(document).ready(function () {
  var slideTimer = setInterval(function () {
    Slider.nextSlide();
  }, 5000);
});

Slider.nextSlide = function () {
  var $activeSlide = $('.carousel-inner li.active');
  Slider.inactivateSlides();
  $activeSlide.next().fadeIn(Slider.timeInterval).addClass('active');

  if ($activeSlide.index() === Slider.slides.length - 1) {
    Slider.inactivateSlides();
    Slider.slides.first().fadeIn(Slider.timeInterval).addClass('active');
  };
}

Slider.inactivateSlides = function () {
  Slider.slides.removeClass('active');
}


