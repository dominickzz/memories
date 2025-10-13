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

// --- Tambah Kenangan Baru ---
const form = document.getElementById('memory-form');
const imageInput = document.getElementById('image-input');
const textInput = document.getElementById('text-input');
const container = document.getElementById('memories-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const newMemory = document.createElement('div');
    newMemory.classList.add('memory', Math.random() > 0.5 ? 'left' : 'right');

    newMemory.innerHTML = `
      <img src="${event.target.result}" alt="New Memory">
      <p>${textInput.value}</p>
    `;

    container.prepend(newMemory);

    form.reset();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    const newMemory = document.createElement('div');
    newMemory.classList.add('memory', Math.random() > 0.5 ? 'left' : 'right');
    newMemory.innerHTML = `
      <img src="assets/images/default.jpg" alt="New Memory">
      <p>${textInput.value}</p>
    `;
    container.prepend(newMemory);
    form.reset();
  }
});
