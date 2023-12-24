const playButton = document.querySelector(".btn-play");
const video = document.querySelector(".video");
let isCompletedVideo = false;

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  video.style.display = "block";
  video.play();
});
