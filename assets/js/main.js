$(function() {
  $imgSlider = $('.testimonial-img-slider');
  $textSlider = $('.testimonial-text-slider');

  $imgSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.testimonial-text-slider',
    prevArrow: '<i class="fas fa-angle-left"></i>',
    nextArrow: '<i class="fas fa-angle-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $textSlider.slick({
    arrows: false,
    fade: true,
    asNavFor: '.testimonial-img-slider'
  });
});
