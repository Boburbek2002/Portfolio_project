$(document).ready(function () {
  $('.spinner').hide();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1500: {
        items: 5,
      },
    },
  });
  
});



