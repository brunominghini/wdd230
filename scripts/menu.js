const menuToggle = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuToggle.classList.toggle('open');
});
