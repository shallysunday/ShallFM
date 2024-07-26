// scripts.js

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 500) { // Adjust the value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
