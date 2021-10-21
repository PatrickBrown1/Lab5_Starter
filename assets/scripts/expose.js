// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const soundDropdown = document.getElementById("horn-select");
  soundDropdown.addEventListener('change', (e) => handleSoundUpdate(e.target.value));

  const playButton = document.querySelector("#expose > button");
  playButton.addEventListener('click', (e) => handlePlayButtonClick());
}

let imgSrc = "";
let audioSrc = "";
let audioVolume = 0;

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
  if(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
  }
}