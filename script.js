// path/filename: script.js
const messages = [
  "Oops, missclicked!", 
  "Thanks but no thanks", 
  "No but actually Yes"
];
let opacity = 1;

document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('inputContainer').style.display = 'flex';
});

document.getElementById('noBtn').addEventListener('click', function(event) {
  const noButton = event.target;
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noButton.style.position = 'fixed';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  
  const randomMessageIndex = Math.floor(Math.random() * messages.length);
  this.textContent = messages[randomMessageIndex];  
  opacity -= 0.2;
  noButton.style.opacity = opacity.toString();
  if (opacity <= .21) {
    // this.disabled = true;
    document.getElementById('yesBtn').textContent = "Just say yes for god's sake";
  }
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
  this.style.backgroundColor = "rgb(86, 255, 92)"
  this.textContent = "U're not gonna regret it love :D";
  this.disabled = true;
});
