// place your custom js here

// Hero Slider
$('.js-hero-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

// Testimonial Slider
$('.js-testi-slider').slick();

// Partner Logo Slider
$('.js-partner-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// Go Up Button
$('.js-upper-link').on('click', function(event){
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  }
});