$(document).ready(function () {
  $('#lightSlider').lightSlider({
      gallery: false,
      item: 1,
      loop: true,
      slideMargin: 4,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      pager: false
  }); 

  $('#gallerySlider').lightSlider({
      gallery: false,
      item: 5,
      loop: true,
      slideMargin: 15,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      pager: false
  });

  $('.dropdown-toggle').click(function(e) {
      if ($(document).width() > 768) {
          e.preventDefault();

          var url = $(this).attr('href');

          if (url !== '#') {
              window.location.href = url;
          }
      }
  });
});