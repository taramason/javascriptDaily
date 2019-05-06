
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //STOP FUNCTION
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); //add class for key animation
}


