var mainNavLinks = document.querySelectorAll("nav ul li a");
var mainSections = document.querySelectorAll("section");

var lastId;
var cur = [];

window.addEventListener("scroll", function(){

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




