document.addEventListener('DOMContentLoaded', () => {
  const parts = document.querySelectorAll('.heart-part');

  parts.forEach(part => {
    part.addEventListener('click', () => {
      part.classList.toggle('active');
    });
  });
});
