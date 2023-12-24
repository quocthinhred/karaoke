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
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const step = [
  "START",
  "VIDEO",
  "QUESTION1",
  "QUESTION2",
  "END"
]

let currentStep = "START";

const displayBlock = (element) => {
  element.style.display = "block";
}

const displayFlex = (element) => {
  element.style.display = "flex";
}

const displayNone = (element) => {
  element.style.display = "none";
}

const changeStep = (step) => {
  switch(step) {
    case "START":
      displayBlock(playButton);
      displayNone(video);
      displayNone(question1);
      displayNone(question2);
      displayNone(thanks);
      currentStep = "START";
      displayNone(prevBtn);
      displayNone(questionWrapper);
      displayNone(nextBtn);
      break;
    case "VIDEO":
      displayNone(playButton);
      displayBlock(video);
      video.play();
      displayNone(question1);
      displayNone(question2);
      displayNone(thanks);
      displayBlock(prevBtn);
      displayBlock(nextBtn);
      displayNone(questionWrapper);
      currentStep = "VIDEO";
      break;
    case "QUESTION1":
      displayNone(playButton);
      displayNone(video);
      displayFlex(question1);
      displayNone(question2);
      displayNone(thanks);
      displayBlock(prevBtn);
      displayBlock(nextBtn);
      displayBlock(questionWrapper);
      currentStep = "QUESTION1";
      break;
    case "QUESTION2":
      displayNone(playButton);
      displayNone(video);
      displayNone(question1);
      displayFlex(question2);
      displayNone(thanks);
      displayBlock(prevBtn);
      displayBlock(questionWrapper);
      displayBlock(nextBtn);
      currentStep = "QUESTION2";
      break;
    case "END":
      displayNone(playButton);
      displayNone(video);
      displayNone(question1);
      displayNone(question2);
      displayNone(nextBtn);
      displayBlock(thanks);
      displayBlock(prevBtn);
      currentStep = "END";
      break;
  }
}

const handleNext = () => {
  changeStep(step[step.indexOf(currentStep) + 1]);
}

const handlePrev = () => {
  changeStep(step[step.indexOf(currentStep) - 1]);
}

nextBtn.addEventListener('click', () => {
  handleNext();
})

prevBtn.addEventListener('click', () => {
  handlePrev();
})

let isCompletedVideo = false;

playButton.addEventListener("click", () => {
  changeStep(step[1]);
  video.play();
  setTimeout(() => {
    changeStep(step[2])
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
          changeStep(step[3]);
        } else if (question2.style.display === 'flex') {
          changeStep(step[4]);
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
          changeStep(step[3]);
        } else if (question2.style.display === 'flex') {
          changeStep(step[4]);
        }
      }, 1000)
    }, 3000)
  })
})
