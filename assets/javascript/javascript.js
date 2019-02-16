var mainNavLinks = document.querySelectorAll("nav ul li a");
var mainSections = document.querySelectorAll("section");

var lastId;
var cur = [];


// $('#sideNav').hide();

window.addEventListener("scroll", function(){

  // if ($(this).scrollTop()>0)
  //    {
  //       $('#sideNav').show();
  //    }
  //   else
  //    {
  //     $('#sideNav').hide();
  //    }

  mainNavLinks.forEach(function(link) {
    var section = document.querySelector(link.hash);
    if (section.length) {
          $("html, body").animate( {
              scrollTop: section.offset().top
            },
            500
          );
        } 
  });

});

51


// $(window).scroll(function() {

//     if ($(this).scrollTop()>0)
//      {
//         $('nav').fadeOut();
//      }
//     else
//      {
//       $('nav').fadeIn();
//      }
//  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  $("#hamburger").click(function(e){
    e.preventDefault();
    if ($("#sideNav").hasClass('borderin')) {
      $("#sideNav").removeClass('borderin');
     }
     else
     {
      $("#sideNav").addClass('borderin');
     }
  });

    // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').removeClass('show');
    $("#sideNav").addClass('borderin');
  });

//home text
  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Frontend Developer", "Multimedia Designer"],
      typeSpeed: 100,
      loop: true,
    });
  });


