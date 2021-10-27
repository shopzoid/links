$(document).ready(function () {

  const menu = document.querySelector(".menu");

  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");

  $(".loader_bg").delay(3000).fadeOut("slow");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
    menu.classList.remove("active");
  });

  const mq = window.matchMedia("(max-width: 1080px)");
  if (mq.matches) {
    $(".sub-btn").click(function () {
      $(this).next(".sub-menu").slideToggle();
    });

    $(".more-btn").click(function () {
      $(this).next(".more-menu").slideToggle();
    });
  }

  // screenshot carousel
  $("").owlCarousel({
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(".screenshots-carousel").owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
