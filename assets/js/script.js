const $arrow = document.querySelector('.arrow');

$arrow.animate([{ top: '0' }, { top: '10px' }, { top: '0' }], {
  duration: 700,
  iterations: Infinity,
});
