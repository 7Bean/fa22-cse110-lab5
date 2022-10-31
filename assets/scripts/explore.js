// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  function populateVoiceList() {
    let voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('name', voices[i].name);
      option.setAttribute('value', i);
      document.getElementById("voice-select").appendChild(option);
    }
    
  }
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let speak = document.querySelector('button');
  let text = document.getElementById('text-to-speak');
  let setVoice = document.getElementById('voice-select');
  let smileyFace = document.querySelector('img');
  
  speak.addEventListener('click',e => {
    let utter = new SpeechSynthesisUtterance(text.value);
    let voices = speechSynthesis.getVoices();
    utter.voice = voices[setVoice.value];
    speechSynthesis.speak(utter);
    smileyFace.src = 'assets/images/smiling-open.png';
    utter.addEventListener('end',e => {
      smileyFace.src = 'assets/images/smiling.png';
    })
  })

  
}
