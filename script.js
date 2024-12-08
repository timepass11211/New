let play = document.querySelector('#btn')
let music = document.querySelector('#dd');
let icon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let currentTimeDisplay = document.getElementById('current-time');
let h = document.getElementById('h');


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

    if (volume == 0) {icon.className = "fa fa-volume-mute";

 
    let aa = h.textContent;


h.textContent = "V-Mute"; 


setTimeout(() => {
    h.textContent = "Music"; 

}, 2000);
 
    }
   

    else if (volume <= 0.5) {icon.className = "fa fa-volume-down"; 
       
        let bb = h.textContent;
        h.textContent = "V-normal";

        setTimeout((volume) => {
            h.textContent = 'Music';
        },2000);
       
    

    }

    else {icon.className = "fa fa-volume-up";
    let cc = h.textContent;
        h.textContent = "V-Max";

        setTimeout(() => {
            h.textContent = 'Music';
        },2000);

    }
    
       icon.style.opacity = vol.value > 0 ? 1 : 0.5;

});


music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTimeDisplay.textContent = `${minutes}:${seconds}`;
});
