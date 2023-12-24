const playButton = document.querySelector(".btn-play");
const video = document.querySelector(".video");
const congratsGif = document.querySelector(".congrats-gif");
const wrongGif = document.querySelector(".wrong-gif");
const questionWrapper = document.querySelector(".question-wrapper");
const question1 = document.querySelector(".question-1");
const question2 = document.querySelector(".question-2");
const correctAnswers = document.querySelectorAll(".correct-answer");
const wrongAnswers = document.querySelectorAll(".wrong-answer");
const congratsAudio = document.querySelector(".congrats-audio");
const wrongAudio = document.querySelector(".wrong-audio");
const thanks = document.querySelector(".thanks");

let isCompletedVideo = false;

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  video.style.display = "block";
  video.play();
  setTimeout(() => {
    video.style.display = 'none';
    question1.style.display = 'flex';
    questionWrapper.style.display = 'block';
  }, video.duration * 1000 + 1000)
});

correctAnswers.forEach(item => {
  item.addEventListener('click', () => {
    congratsGif.style.display = "flex";
    congratsAudio.play();
    setTimeout(() => {
      congratsGif.style.animation = "slide-top-out 2s ease-in";
      setTimeout(() => {
        congratsGif.style.display= "none";
        congratsGif.style.animation = "slide-top-in 1s ease-in";
        if (question1.style.display === 'flex') {
          question1.style.display = 'none';
          question2.style.display = 'flex';
        } else if (question2.style.display === 'flex') {
          question2.style.display = 'none';
          thanks.style.display = 'block';
        }
      }, 1000)
    }, 6000)
  })
})

wrongAnswers.forEach(item => {
  item.addEventListener('click', () => {
    wrongGif.style.display = "flex";
    wrongAudio.play();
    setTimeout(() => {
      wrongGif.style.animation = "slide-top-out 2s ease-in";
      setTimeout(() => {
        wrongGif.style.display= "none";
        wrongGif.style.animation = "slide-top-in 1s ease-in";
        if (question1.style.display === 'flex') {
          question1.style.display = 'none';
          question2.style.display = 'flex';
        } else if (question2.style.display === 'flex') {
          question2.style.display = 'none';
          thanks.style.display = 'block';
        }
      }, 1000)
    }, 3000)
  })
})
