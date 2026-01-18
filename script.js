

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
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// typing text animation
var typed = new Typed(".typing", {
  strings: ["Front-end Developer", "Back-End Developer", "AI enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Angular",
    "Spring Boot",
    "PostgreSQL",
    "Elasticsearch",
    "RabbitMQ",
    "gRPC",
    "Chart.js",
    "Spring AI",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

document.getElementById("resume").addEventListener("click", (e) => {
  window.open(
    "https://drive.google.com/file/d/13WUszt64kI_B_-GMVfko5YyZfmScVQ0t/view?usp=sharing",
    "_blank"
  );
});
document.getElementById("resume2").addEventListener("click", (e) => {
  window.open(
    "https://drive.google.com/file/d/13WUszt64kI_B_-GMVfko5YyZfmScVQ0t/view?usp=sharing",
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

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // stop default redirect

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xovnvvwp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        document.getElementById("status").innerText =
          "✅ Message sent successfully!";
        form.reset();
      } else {
        document.getElementById("status").innerText =
          "❌ Oops! Something went wrong.";
      }
    } catch (err) {
      document.getElementById("status").innerText =
        "⚠️ Network error. Try again.";
    }

    // Auto-hide after 20 seconds
    setTimeout(() => {
      document.getElementById("status").innerText = "";
    }, 20000);
  });

const cursor = document.querySelector(".cursor");
const clickSound = document.getElementById("clickSound");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("click", () => {
  clickSound.currentTime = 0; // rewind if clicked rapidly
  clickSound.play();
});
