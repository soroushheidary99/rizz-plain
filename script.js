// document.getElementById('yes').addEventListener('mouseover', function() {
//     document.getElementById('question').textContent = "Happy Soroush Noises *-*";
// });

// document.getElementById('yes').addEventListener('mouseleave', function() {
//     document.getElementById('question').textContent = "will u go out with me?";
// });

// document.getElementById('no').addEventListener('mouseover', function() {
//     document.getElementById('question').textContent = "Sad Soroush Noises T-T";
// });

// document.getElementById('no').addEventListener('mouseleave', function() {
//     document.getElementById('question').textContent = "will u go out with me?";
// });

document.getElementById('no').addEventListener('click', function(event) {
    const noButton = event.target;
    const newX = Math.random() * window.innerWidth * 0.8;
    const newY = Math.random() * window.innerHeight * 0.8;
    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    // Shrink the button by reducing its font size and padding
    noButton.style.width = (parseFloat(getComputedStyle(noButton).width) * 0.7) + "px";
    noButton.style.height = (parseFloat(getComputedStyle(noButton).height) * 0.8) + "px";
    noButton.style.padding = (parseFloat(getComputedStyle(noButton).padding) * 0.8) + "px";
    noButton.style.fontSize = (parseFloat(getComputedStyle(noButton).fontSize) * 0.8) + "px";
});


document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('question').textContent = "Glad you're in love with me :D please enter your phone number and prefered day for a date";
    document.getElementById('question').style.backgroundColor = "rgb(121, 0, 0)";
    document.getElementById('question').style.color = "rgb(255, 255, 255)";
    document.getElementById('yes').removeEventListener()
});