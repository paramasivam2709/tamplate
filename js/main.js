// message summation for contact form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  setTimeout(function() {
    document.getElementById('form-success').style.display = 'none';
  }, 3000); // Hide after 3 seconds
  this.reset();
});