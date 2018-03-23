$(function() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="arrow fas fa-arrow-left"></i>',
    nextArrow: '<i class="arrow fas fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
});
