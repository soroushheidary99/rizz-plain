document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('question').textContent = "Thanks for liking it!";
});

document.getElementById('no').addEventListener('mouseover', function(event) {
    const noButton = event.target;
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});
