document.addEventListener("DOMContentLoaded", () => {
const target = document.querySelector('.profileCardWrapper');
      const sound = document.getElementById('larry'); 

      target.addEventListener('mouseenter', () => {
        sound.play();
      });

      target.addEventListener('mouseleave', () => {
        sound.pause();
        sound.currentTime = 0;
      });
    });