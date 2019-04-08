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
  

  var fixmeTop = $('#page-top').offset().top;  
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll > $(window).height() && $(window).width() > 992){

    $('#sideNav').css({                      
      position: 'fixed',
      top: '0px',
      left: '0px',
  });

  $('.social-icons').css({                      
    position: 'relative',
    bottom: '20px',
    left: '0px',
});

$('.social').css({                      
  position: 'fixed'
});

  $("#sideNav").addClass('floatin');
  $("#allContent").addClass('paddin');
 

   } else{

    $("#sideNav").addClass('floatin');


     if ($("#allContent").hasClass('paddin')) {
      $("#allContent").removeClass('paddin');
     }

    $('#sideNav').css({                      // if you scroll above it
      position: 'static',
      left:'0',
    });

    $('.social-icons').css({                      
      position: 'static',
      bottom: '20px'
  });

  $('.social').css({                      
    position: 'static',
    bottom: '0px'
});

// $('body').css({                    
//   paddingLeft: '0rem',
  
// });

   }

   if (currentScroll > $(window).height() && $(window).width() < 991.98){

    $("#sideNav").removeClass('floatin');

  $("#allContent").removeClass('paddin');
    $('#sideNav').css({                      
      position: 'fixed',
      top: '0px',
      // left: '0px',
      // width: '100%',
      zIndex: '3',
      // marginBottom: '20px'
  });

} else{
  
}

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


    // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });


