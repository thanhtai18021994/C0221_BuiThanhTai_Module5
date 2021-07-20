       $(document).ready(function() {
           $(window).on("scroll", function() {
               if ($(window).scrollTop()) {
                   $('.logo').addClass('navbar__brand-img-scroll');
                   $('.nav-item').removeClass('text');
                   $('.nav-item').addClass('text-scroll');
               } else {
                   $('.logo').removeClass('navbar__brand-img-scroll');
                   $('.nav-item').addClass('text');
                   $('.nav-item').removeClass('text-scroll');
               }
           })
       });