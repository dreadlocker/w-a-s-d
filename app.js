const lettersArr = ['W', 'A', 'S', 'D'];
const letterHolder = document.getElementsByClassName('letter')[0];
const rightAnswers = document.getElementById('rightAnswers');
const song = document.getElementById('song');
document.addEventListener('keyup', () => {
  (letterHolder.innerHTML.toLowerCase() === event.key) ? playSong(): muteSong();
});

const time1 = 250;
function playSong() {
  // unmute sound
  song.muted = false;
  
  +rightAnswers.innerHTML++;
  letterHolder.classList.add('hideMe');

  setTimeout(() => {
    letterHolder.classList.remove('hideMe');
    letterHolder.innerHTML = lettersArr[Math.floor(Math.random() * 4)];
  }, time1);
}

const wrongAnswers = document.getElementById('wrongAnswers');
const time2 = 300;
function muteSong() {
  // mute sound
  song.muted = true;

  +wrongAnswers.innerHTML++;
  letterHolder.classList.add('wrongKey');

  setTimeout(() => {
    letterHolder.classList.remove('wrongKey');
  }, time2);
}