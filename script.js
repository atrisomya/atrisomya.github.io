$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
         //scroll-up button show/hide script
    if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });

    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  });


// lightslider script

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 3,
    slideMove: 1,
    mode: "slide",
    cssEasing: 'ease',
    speed: 500, //ms'
    auto: true,
    loop: true,
    pauseOnHover: true
  }); 
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
