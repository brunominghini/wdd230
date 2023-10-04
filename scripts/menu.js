document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList("show")
        menuToggle.classList.toggle('show');
    });
});