// Animated counter for experience years
  document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('exp-counter');
    let count = 1;
    const target = 12;
    const duration = 1900; // ms
    const step = Math.ceil(duration / target);

    function updateCounter() {
      if (count <= target) {
        counter.textContent = count;
        count++;
        setTimeout(updateCounter, step);
      }
    }
    updateCounter();
  });