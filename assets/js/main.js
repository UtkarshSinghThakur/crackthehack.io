/**
* Template Name: Personal - v2.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Hero typing effect
  var $typedEl = $('.typed');
  if ($typedEl.length) {
    var items = ($typedEl.data('typed-items') || '').split('|').filter(Boolean);
    if (items.length) {
      var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        $typedEl.text(items[0]);
      } else {
        var typedText = items[0];
        var typedIndex = 0;
        var typedChar = 0;
        var typedDeleting = false;
        var typedCursor = $('<span class="typed-cursor" aria-hidden="true">|</span>').appendTo($typedEl);

        function typeTick() {
          var word = items[typedIndex];
          typedChar += typedDeleting ? -1 : 1;
          typedText = word.substring(0, typedChar);
          $typedEl.text(typedText);
          $typedEl.append(typedCursor);

          var delay = typedDeleting ? 35 : 80;
          if (!typedDeleting && typedChar === word.length) {
            delay = 1600;
            typedDeleting = true;
          } else if (typedDeleting && typedChar === 0) {
            typedDeleting = false;
            typedIndex = (typedIndex + 1) % items.length;
            delay = 400;
          }
          setTimeout(typeTick, delay);
        }
        typeTick();
      }
    }
  }

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

  // Writeup "Coming Soon" modal
  var $writeupModal = $('#writeupModal');
  var $writeupTrigger = null;

  function openWriteupModal($trigger) {
    $writeupTrigger = $trigger;
    $writeupModal.addClass('is-open').attr('aria-hidden', 'false');
    $('body').addClass('writeup-modal-active');

    // Close any open mobile nav so the modal sits cleanly on top
    if ($('body').hasClass('mobile-nav-active')) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').fadeOut();
    }

    $writeupModal.find('.writeup-modal-close').trigger('focus');
  }

  function closeWriteupModal() {
    $writeupModal.removeClass('is-open').attr('aria-hidden', 'true');
    $('body').removeClass('writeup-modal-active');
    if ($writeupTrigger && $writeupTrigger.length) {
      $writeupTrigger.trigger('focus');
    }
  }

  $(document).on('click', '[data-writeup-open]', function(e) {
    e.preventDefault();
    openWriteupModal($(this));
  });

  $(document).on('click', '[data-writeup-close]', function(e) {
    e.preventDefault();
    closeWriteupModal();
  });

  $(document).on('click', '[data-writeup-modal]', function(e) {
    if (e.target === this) {
      closeWriteupModal();
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && $writeupModal.hasClass('is-open')) {
      closeWriteupModal();
    }
  });

})(jQuery);