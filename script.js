

  $(document).ready(function() {

  // ...seu código de envelope...
       var envelope = $("#envelope"),
        btnOpen   = $("#open"),
        btnReset  = $("#reset");
    function openEnv() { envelope.addClass("open").removeClass("close"); }
    function closeEnv(){ envelope.addClass("close").removeClass("open"); }
    envelope.click(openEnv);
    btnOpen.click(openEnv);
    btnReset.click(closeEnv);
    
  // Controles de áudio
  const audio = document.getElementById('bg-music');
  const btnPlayPause = document.getElementById('play-pause-btn');
  const volumeSlider = document.getElementById('volume-slider');

  // Altera entre play e pause
  btnPlayPause.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btnPlayPause.textContent = '⏸️ Pausar Música';
    } else {
      audio.pause();
      btnPlayPause.textContent = '▶️ Tocar Música';
    }
  });

  // Ajusta o volume conforme o slider
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });
});

