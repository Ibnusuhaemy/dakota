// place your custom js here
$(document).ready(function(){
  $('.js-hero-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.js-testi-slider').slick();
  $('.js-partner-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});