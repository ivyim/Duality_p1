const container = document.querySelector('.container');
const title = document.getElementById('title');
const intro = document.getElementById('intro');

// Mouse move event to handle background and text change
document.addEventListener('mousemove', (e) => {
  const screenWidth = window.innerWidth;
  const mouseX = e.clientX;

  if (mouseX < screenWidth / 2) {
    container.classList.add('black-background');
    container.classList.remove('white-background');
    title.classList.add('black-text');
    title.classList.remove('white-text');
    intro.classList.add('black-text');
    intro.classList.remove('white-text');
  } else {
    container.classList.add('white-background');
    container.classList.remove('black-background');
    title.classList.add('white-text');
    title.classList.remove('black-text');
    intro.classList.add('white-text');
    intro.classList.remove('black-text');
  }
});

// Click event to navigate to entry1
title.addEventListener('click', () => {
  window.location.href = 'entry1/entry1.html';
});
