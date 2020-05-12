const song = document.querySelector(".song");
const play = document.querySelector(".play");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
// sounds
const sounds = document.querySelectorAll(".sound-picker button");
// time display
const time_display = document.querySelector(".time_display");
const timeSelect = document.querySelectorAll(".btn");
// the outline lenght
const outlineLength = outline.getTotalLength();
// duration
let fakeDuration = 120;

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

// play the song
play.addEventListener("click", () => {
  checkPlaying(song);
});

// select the duration
timeSelect.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time");
    time_display.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )} `;
  });
});

// select the song & video
sounds.forEach((sound) => {
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
  });
});

// specific function to play and pause the song
const checkPlaying = (song) => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

// Animate circle
song.ontimeupdate = () => {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);

  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  //animate text
  time_display.textContent = `${minutes}:${seconds} `;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
