  const music = document.getElementById('bgMusic');

    window.addEventListener('load', () => {
      music.play().catch(() => {
        document.body.addEventListener('click', () => music.play(), { once: true });
      });
    });

    function toggleAudio() {
      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }
    }