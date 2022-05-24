const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  switchVideo();
});

function switchVideo() {
  switchBtn.addEventListener("click", () => {
    if (!switchBtn.classList.contains("slide")) {
      switchBtn.classList.toggle("slide");
      video.pause();
    } else {
      switchBtn.classList.toggle("slide");
      video.play();
    }
  });
}
