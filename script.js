$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    //scroll-up button show/hide
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // owl carousel script
  // $(".carousel").owlCarousel({
  //   margin: 20,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000, // ✅ fixed spelling
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: { items: 1 },
  //     600: { items: 2 },
  //     1000: { items: 3 },
  //   },
  // });
});

$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// lightslider script

// typing text animation
var typed = new Typed(".typing", {
  strings: ["Front-end Developer", "Back-End Developer", "Dreamer"],
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

document.getElementById("resume").addEventListener("click", (e) => {
  window.open(
    "https://drive.google.com/file/d/1zNs5p_fSuewthjtj2X001pauDclCCbkI/view?usp=sharing",
    "_blank"
  );
});
document.getElementById("resume2").addEventListener("click", (e) => {
  window.open(
    "https://drive.google.com/file/d/1zNs5p_fSuewthjtj2X001pauDclCCbkI/view?usp=sharing",
    "_blank"
  );
});

// Generate stars for space background
const space = document.getElementById("space");
const stars = 120; // number of stars
for (let i = 0; i < stars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 1 + Math.random() * 3 + "s";
  star.style.opacity = Math.random();
  space.appendChild(star);
}
