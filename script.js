const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(slider => {
  const oldImg = slider.querySelector('.old');
  const divider = slider.querySelector('.divider');

  function moveSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    let x = clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));

    divider.style.left = `${x}px`;
    oldImg.style.clipPath = `inset(0 0 0 ${x}px)`;
  }

  // Desktop hover (keep as is)
  slider.addEventListener('mousemove', (e) => {
    moveSlider(e.clientX);
  });

  // Mobile tap
  slider.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    moveSlider(touch.clientX);
  });

  // Mobile drag (optional but enables smooth follow)
  slider.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    moveSlider(touch.clientX);
  });
});
