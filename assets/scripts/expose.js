// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornMenu = document.querySelector('#horn-select');
  
  let audio = document.querySelector('audio');

  hornMenu.addEventListener('change',e => {
    let menuImg = document.querySelector('img');
    
    if(hornMenu.value == 'air-horn'){
      menuImg.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(hornMenu.value == 'car-horn'){
      menuImg.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(hornMenu.value == 'party-horn'){
      menuImg.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
    console.log(audio);
  });
  
  let slider = document.querySelector('#volume');

  slider.addEventListener('input',e => {
    let volImg = document.getElementById('volume-controls').querySelector('img');
    //let audio = document.querySelector('audio');
    audio.volume = slider.value/100;
    if(slider.value == 0){
      console.log(slider.value);
      volImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(slider.value < 33){
      volImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if(slider.value <= 33 && slider.value < 67){
      volImg.src = 'assets/icons/volume-level-2.svg';
    }  
    else if(slider.value >= 67){
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
    //console.log(audio.volume);
  })

  let playSound = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  playSound.addEventListener('click',e => {
    if(hornMenu.value == 'party-horn'){
      jsConfetti.addConfetti({emojis: ['🤰']});
    }
    audio.play();
  })

}
