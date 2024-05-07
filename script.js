document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('changeBtn');
    button.classList.remove('neon-red');
    button.classList.add('neon-green');
});

document.getElementById('changeBtn').addEventListener('click', function() {
    var image = document.getElementById('image');
    var container = document.querySelector('.container');
    var button = document.getElementById('changeBtn');
    if (image.src.includes('smiley.png')) {
        image.src = 'sad.png';
        container.classList.add('light-red-bg');
        container.classList.remove('green-bg');
        button.classList.remove('neon-green');
        button.classList.add('neon-red');
    } else {
        image.src = 'smiley.png';
        container.classList.add('green-bg');
        container.classList.remove('light-red-bg');
        button.classList.remove('neon-red');
        button.classList.add('neon-green');
    }
});
