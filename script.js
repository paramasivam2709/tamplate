const phrases = ["a Web Designer", "a Developer", "a Freelancer"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typed = document.getElementById("typed-text");

function loop() {
  typed.innerHTML = "I'm " + currentPhrase.join('');

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 60 : 120);
}

loop();
