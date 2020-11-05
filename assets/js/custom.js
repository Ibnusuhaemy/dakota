// place your custom js here
$(document).ready(function(){
  // Hero Slider
  $('.js-hero-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  // Testimonial Slider
  $('.js-testi-slider').slick();
  
  // Partnet Logo Slider
  $('.js-partner-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});