
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //STOP FUNCTION
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); //add class for key animation
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  }
  console.log(e.propertyName);
  console.log("this", this);
  this.classList.remove('playing');
  console.log("transitioned removed");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

