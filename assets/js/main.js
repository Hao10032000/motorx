/**
    * headerFixed
    * btnmenu
    * topSearch
    * video
    * counter
    * flatAccordion
    * tabs 
    * rangeslider
    * styleshop
    * btnQuantity
    * gotop
    * cursor
    * buttonHeart
    * dropdown
    * curvedtext
    * sticky
    * clock
    * retinaLogos
    * preloader
*/

; (function ($) {

  "use strict";
  // Mobile Nav Hide Show
  if ($('.mobile-menu').length) {

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Hide / Show Submenu
    $('.mobile-menu .navigation > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var target = $(this).parent('li').children('ul');

      if ($(target).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(target).slideUp(500);
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2 > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2').children('ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //3rd Level Nav
    $('.mobile-menu .navigation > li.dropdown2 > ul  > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var targetInner = $(this).parent('li').children('ul');

      if ($(targetInner).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(targetInner).slideUp(500);
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown2 > ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');

    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop, .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
      $('.mobile-menu .navigation > li').removeClass('open');
      $('.mobile-menu .navigation li ul').slideUp(0);
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $('body').removeClass('mobile-menu-visible');
        $('.mobile-menu .navigation > li').removeClass('open');
        $('.mobile-menu .navigation li ul').slideUp(0);
      }
    });

  }

  var headerFixed = function () {
    if ($('body').hasClass('counter-scroll')) {
      var nav = $('#header');
      if (nav.length) {
        var
          offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $('', {
            height: headerHeight
          }).insertAfter(nav);

        $(window).on('load scroll', function () {
          if ($(window).scrollTop() > offsetTop) {
            nav.addClass('is-fixed');
            injectSpace.show();
          } else {
            nav.removeClass('is-fixed');
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 500) {
            nav.addClass('is-small');
          } else {
            nav.removeClass('is-small');
          }
        })
      }
    }
  };

  var video = function () {
    if ($('div').hasClass('video-wrap')) {
      $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
    }
  };

  var rangeslider = function () {
    if ($("#range-two-val").length > 0) {
      var skipSlider = document.getElementById("range-two-val");
      var skipValues = [
        document.getElementById("skip-value-lower"),
        document.getElementById("skip-value-upper")
      ];

      noUiSlider.create(skipSlider, {
        start: [20, 99],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
          min: 20,
          max: 120
        },
      });

      skipSlider.noUiSlider.on("update", function (values, handle) {
        skipValues[handle].innerHTML = "$" + values[handle];
      });
    }
  };

  var sticky = function () {
    if ($('body').hasClass('sticky-scroll')) {
      new StickySidebar('#sidebar-sticky', {
        topSpacing: 0,
        bottomSpacing: 0,
        containerSelector: '.page-menu1-wrap',
        innerWrapperSelector: '.po-sticky'
      });
    }
  }
  //goTop
  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('.button-go').addClass('show');
      } else {
        $('.button-go').removeClass('show');
      }
    });

    $('.button-go').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  }; //goTop

  var retinaLogos = function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
      $('#site-logo-inner').find('img').attr({ src: 'assets/images/logo/logo@2x.png', width: '197', height: '48' });
      $('#logo-footer.style').find('img').attr({ src: 'assets/images/logo/logo-footer@2x.png', width: '197', height: '48' });
      $('#logo-footer.style2').find('img').attr({ src: 'assets/images/logo/logo@2x.png', width: '197', height: '48' });
    }
  };

  //reloader
  var preloader = function () {
    setTimeout(function () {
      $(".preload-container").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 1000);
  };

  //Button
  $(".button_main_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".main_button_circle").css({ "left": relX, "top": relY });
    $(this).prev(".main_button_circle").removeClass("desplode-circle");
    $(this).prev(".main_button_circle").addClass("explode-circle");

  });

  $(".button_main_inner").mouseleave(function (e) {

    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".main_button_circle").css({ "left": relX, "top": relY });
    $(this).prev(".main_button_circle").removeClass("explode-circle");
    $(this).prev(".main_button_circle").addClass("desplode-circle");

  });

  //dot
  $(".dot").click(function () {
    $(this).find('i').toggleClass("active");
    $(this).find('.content-price').toggleClass("active");
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // //priceranger
  // $(document).ready(function() {
  //   $('.noUi-handle').on('click', function() {
  //     $(this).width(50);
  //   });
  //   var rangeSlider = document.getElementById('slider-range2');
  //   var moneyFormat = wNumb({
  //     decimals: 0,
  //     thousand: ',',
  //     prefix: '' 
  //   });
  //   noUiSlider.create(rangeSlider, {
  //     start: [0, 5800],
  //     step: 1,
  //     range: {
  //       'min': [0],
  //       'max': [6000]
  //     },
  //     format: moneyFormat,
  //     connect: true
  //   });
  //   // Set visual min and max values and also update value hidden form inputs
  //   rangeSlider.noUiSlider.on('update', function(values, handle) {
  //     document.getElementsById('slider-range-value3').innerHTML = values[3];
  //     document.getElementsById('slider-range-value4').innerHTML = values[4];
  //     document.getElementsByName('min-value').value = moneyFormat.from(
  //       values[0]);
  //     document.getElementsByName('max-value').value = moneyFormat.from(
  //       values[1]);
  //   });
  // });

  $(document).ready(function () {
    $('.noUi-handle').on('click', function () {
      $(this).width(50);
    });
    var rangeSlider = document.getElementById('slider-range');
    var moneyFormat = wNumb({
      decimals: 0,
      thousand: ',',
      prefix: '$'
    });
    noUiSlider.create(rangeSlider, {
      start: [0, 5800],
      step: 1,
      range: {
        'min': [0],
        'max': [6000]
      },
      format: moneyFormat,
      connect: true
    });
    // Set visual min and max values and also update value hidden form inputs
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      document.getElementById('slider-range-value1').innerHTML = values[0];
      document.getElementById('slider-range-value2').innerHTML = values[1];
      document.getElementsByName('min-value').value = moneyFormat.from(values[0]);
      document.getElementsByName('max-value').value = moneyFormat.from(values[1]);
    });
  });

  //Counter Number
  var detectViewport = function () {
    $('[data-waypoint-active="yes"]').waypoint(function () {
      $(this).trigger('on-appear');
    }, { offset: '90%', triggerOnce: true });

    $(window).on('load', function () {
      setTimeout(function () {
        $.waypoints('refresh');
      }, 100);
    });
  };

  var counter = function () {
    $('.widget-counter').on('on-appear', function () {
      $(this).find('.number-counter').each(function () {
        var to = parseInt(($(this).attr('data-to')), 10), speed = parseInt(($(this).attr('data-speed')), 10);
        console.log(speed);
        if ($().countTo) {
          $(this).countTo({
            to: to,
            speed: speed
          });
        }
      });
    });
  };//Counter Number// 

  // var hoverThumbGallery = function (e) {
  //   e.find('.hover-listing-image').each(function () {
  //     $(this).find('.listing-item:first-child').addClass('active');
  //     $(this).find('.bl-item:first-child').addClass('active');
  //     $(".hover-listing-image .listing-item").hover(
  //       function () {
  //         var index = $(this).index();
  //         $(this).closest('.hover-listing-image').find('.listing-item').removeClass('active');
  //         $(this).addClass("active");
  //         $(this).closest('.hover-listing-image').find('.bl-item').removeClass('active');
  //         $(this).closest('.hover-listing-image').find('.bl-item').eq(index).addClass('active');
  //       },
  //       function () {
  //         $(this).removeClass("active");
  //         $(this).closest('.hover-listing-image').find('.bl-item').removeClass('active');
  //         $(this).closest('.hover-listing-image').find('.listing-item:first-child').addClass('active');
  //         $(this).closest('.hover-listing-image').find('.bl-item:first-child').addClass('active');
  //       }
  //     );

  //   });
  // }

  // Dom Ready
  $(function () {
    headerFixed();
    video();
    rangeslider();
    sticky();
    retinaLogos();
    preloader();
    goTop();
    hoverThumbGallery();
    // detectViewport();
    // counter();
  });

})(jQuery);
