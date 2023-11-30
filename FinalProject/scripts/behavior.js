const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#262238";
        body.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#eee";
        body.style.color = "#262238";
        modeButton.textContent = "🕶️";
    }
});

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {

    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}