const oldImg = document.getElementById('oldImg');
const divider = document.getElementById('divider');
const container = document.querySelector('.slider-container');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  divider.style.left = x + 'px';
  oldImg.style.clipPath = `inset(0 0 0 ${x}px)`;
});
