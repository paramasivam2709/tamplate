ocument.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-animate').forEach(section => {
      observer.observe(section);
    });
  });