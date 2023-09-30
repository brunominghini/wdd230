
const menuToggle = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

