$(function() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<img class="slick-left" src="images/icons/left.png">',
    nextArrow: '<img class="slick-right" src="images/icons/right.png">'
  });

  inView('.water-text').on('enter', function(element) {
    setTimeout(function() {
      $(element).addClass("visible");
    }, 200);
  });
});
