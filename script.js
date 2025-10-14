// --- Musik Control ---
const music = document.getElementById('bg-music');
const toggle = document.getElementById('music-toggle');

toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '🔊 Matikan Musik';
  } else {
    music.pause();
    toggle.textContent = '🔇 Nyalakan Musik';
  }
});
