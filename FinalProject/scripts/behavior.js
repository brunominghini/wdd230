const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

