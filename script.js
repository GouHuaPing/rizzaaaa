// Add smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
  // Fade in the page content
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 0.5s ease';
  }, 100);

  // Log website load
  console.log('Website loaded successfully!');
});