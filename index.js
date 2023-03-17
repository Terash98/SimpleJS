$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
    items: 3,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1.4,
        margin: 10,
      },
      500: {
        items: 2.4,
      },
      // breakpoint from 480 up
      620: {
        items: 2.2,
      },
      // breakpoint from 768 up
      1001: {
        items: 2.5,
      },
    },
  });
});

const videoBtn = document.querySelector("#video-btn");
const videoPick = document.querySelector(".video__video-img");
const videoOverlay = document.querySelector(".video__item");
const video = document.querySelector("#video-file");
videoBtn.addEventListener("click", function () {
  videoPick.classList.add("none");
  videoOverlay.classList.remove("video__item-overlay");
  videoBtn.classList.add("none");
  if (video.paused) {
    video.play();
  }
});

video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    videoBtn.classList.remove("none");
    videoOverlay.classList.add("video__item-overlay");
    video.pause();
  }
});
const mobileNav = document.querySelector("#mobileNav");
const openMobileNav = document.querySelector("#openMobileNav");
const closeMobileNav = document.querySelector("#closeMobileNav");
const main = document.querySelector("#main");
openMobileNav.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
  main.classList.add("none");
};
closeMobileNav.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
