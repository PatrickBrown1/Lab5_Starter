// explore.js

window.addEventListener('DOMContentLoaded', init);
let synth = window.speechSynthesis;

let voices = [];
let speechText = "";
let selectedVoice = ""
function init() {
  // initialize accents
  let dropdown = document.getElementById('voice-select');
  
  // wait on voices to be loaded before fetching list
  window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    // once voices are fetched fill list with options
    voices.forEach(v => {
      let opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      dropdown.appendChild(opt);
    })
  };

  // update selectedVoice on text area change
  dropdown.addEventListener('change', (e) => {selectedVoice = e.target.value});
  
  // update speechText on text area change
  let textArea = document.getElementById('text-to-speak');
  textArea.addEventListener('change', (e) => {speechText = e.target.value});

  let button = document.querySelector('button');
  button.addEventListener('click', (e) => handleSpeech());
}

function handleSpeech() {
  // add event listener to speechSynthesis to change face
  let face = document.querySelector('img');
  
  let utterance = new SpeechSynthesisUtterance(speechText);
  utterance.voice = voices.find((v) => v.name == selectedVoice);
  face.src = "./assets/images/smiling-open.png";

  utterance.onend = function () {
    face.src = "./assets/images/smiling.png";
  }

  speechSynthesis.speak(utterance);
}