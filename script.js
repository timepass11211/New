let play = document.querySelector('#btn')
let music = document.querySelector('#dd');
let icon = document.querySelector('#vol-icon')
let vol = document.querySelector('#vol')
let currentTimeDisplay = document.querySelector('#current-time');
let h = document.getElementById('h');
let m = document.getElementById('mm');


play.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        play.style.fontSize = '26px';
       
        m.style.transform = "scale(1.2)"; // transform image 
        m.style.transition = 'all 0.9s ease-in-out' //effect transition
        
       
    }

    else {
        music.pause();
        play.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';
        play.style.fontSize = '22px'

        m.style.transform = "scale(1)"; // revert image
        m.style.transition = 'all 0.9s ease-in-out'; // revert transition
        m.style.transform = 'rotate(20deg)'; 

     
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
