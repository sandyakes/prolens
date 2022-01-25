$(document).ready(function() {
  $('.brand-carousel').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
  });

  $('.testimonial-items-carousel').slick({
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

  $('.testimonial1-items-carousel').slick({
    infinite: false,
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

  $('.slider-items-carousel').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('.product-images-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.products-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('[data-bs-toggle="tooltip"]').tooltip();

  /*==== Price range ====*/
  var sliderrange = $('#js-slider-range');
  var amountprice = $('#js-range-amount');
  $(function() {
      sliderrange.slider({
          range: true,
          min: 2000.00,
          max: 8500.00,
          values: [0, 8500],
          slide: function(event, ui) {
              amountprice.val("Rs. " + ui.values[0] + " - Rs. " + ui.values[1]);
          }
      });
      amountprice.val("Rs. " + sliderrange.slider("values", 0) +
          " - Rs. " + sliderrange.slider("values", 1));
  }); 
  
  $('.js-product-slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-product-slick-slider-nav'
  });
  $('.js-product-slick-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-product-slick-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });  
});    