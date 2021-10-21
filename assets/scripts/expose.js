// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const soundDropdown = document.getElementById("horn-select");

  console.log(soundDropdown);

  soundDropdown.addEventListener('change', (e) => handleSoundUpdate(e.target.value));
}


function handleSoundUpdate (newSound) {
  switch(newSound) {
    case "air-horn":
      updateImageSource("assets/images/air-horn.svg");
      break;
    case "car-horn":
      updateImageSource("assets/images/car-horn.svg");

      break;
    case "party-horn":
      updateImageSource("assets/images/party-horn.svg");

      break;
    default:

  }
}
function updateImageSource(newSource) {
  const image = document.querySelector("#expose > img");
  image.src = newSource;
}