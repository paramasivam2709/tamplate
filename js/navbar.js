// Responsive Navbar Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
    navToggle.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
      }
    });
    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          navLinks.classList.remove('open');
          navToggle.classList.remove('active');
        }
      });
    });
    
  // Dropdown toggle for mobile
  document.querySelectorAll('.nav-links .dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  