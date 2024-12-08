let play = document.querySelector('#btn')
let music = document.querySelector('#dd');
let icon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let currentTimeDisplay = document.getElementById('current-time');


play.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        play.style.fontSize = '26px'
       
    }

    else {
        music.pause();
        play.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';
        play.style.fontSize = '22px'
     
    }

});


vol.addEventListener('input', (event) => {

    let volume = event.target.value
    music.volume = volume;

    if (volume == 0) {icon.className = "fa fa-volume-mute";}

    else if (volume <= 0.5) {icon.className = "fa fa-volume-down"; }

    else {icon.className = "fa fa-volume-up";}

});


music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTimeDisplay.textContent = `${minutes}:${seconds}`;
});
