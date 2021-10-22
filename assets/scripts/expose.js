// expose.js
// import JSConfetti from './js-confetti.browser.js'

const jsConfetti = new JSConfetti()


window.addEventListener('DOMContentLoaded', init);

let imgSrc = "";
let audioSrc = "";
let audioVolume = 50;

function init() {
  const soundDropdown = document.getElementById("horn-select");
  soundDropdown.addEventListener('change', (e) => handleSoundUpdate(e.target.value));

  const playButton = document.querySelector("#expose > button");
  playButton.addEventListener('click', (e) => handlePlayButtonClick());

  const volumeInput = document.getElementById("volume");
  volumeInput.addEventListener('input', (e) => handleVolumeInput(e.target.value));
  
  const audio = document.querySelector("#expose > audio");
}


function handleSoundUpdate (soundName) {
  const updateImageSource = () => {
    const image = document.querySelector("#expose > img");
    image.src = imgSrc;
  }

  switch(soundName) {
    case "air-horn":
      imgSrc = "assets/images/air-horn.svg";
      audioSrc = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      imgSrc = "assets/images/car-horn.svg";
      audioSrc = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      imgSrc = "assets/images/party-horn.svg";
      audioSrc = "assets/audio/party-horn.mp3";
      break;
    default:
  }
  updateImageSource();
}


function handlePlayButtonClick() {
  // set audio 
  const audio = document.querySelector("#expose > audio");
  audio.src = audioSrc;
  if(audioSrc) {
    audio.volume = audioVolume / 100;
    audio.play();  
    if (audioSrc == "assets/audio/party-horn.mp3")
      jsConfetti.addConfetti();
  }
}

function handleVolumeInput(updatedVolume) {
  const updateVolumeImage = () => {
    const volumeImage = document.querySelector("#volume-controls > img");

    if(audioVolume == 0) {
      volumeImage.src = "./assets/icons/volume-level-0.svg";
    } else if (0 < audioVolume && audioVolume < 33) {
      volumeImage.src = "./assets/icons/volume-level-1.svg";
    } else if (33 <= audioVolume && audioVolume < 67) {
      volumeImage.src = "./assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "./assets/icons/volume-level-3.svg";
    }
  }
  audioVolume = updatedVolume;
  updateVolumeImage();
}