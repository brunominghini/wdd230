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


const currentDate = new Date();
const currentDay = currentDate.getDay();

function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

document.getElementById("currentYear").innerText = getCurrentYear();

function getLastModifiedDate() {
    const lastModified = document.lastModified;
    return lastModified;
}

function getLastModifiedDate() {
    const lastModified = document.lastModified;
    return lastModified;
}
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`


document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();

    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);

        const timeDifference = currentDate - lastVisitDate;

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            displayMessage("Welcome! Let us know if you have any questions.");
        } else if (daysDifference === 1) {
            displayMessage("You last visited 1 day ago.");
        } else {
            displayMessage(`You last visited ${daysDifference} days ago.`);
        }
    } else {
        displayMessage("Welcome! Let us know if you have any questions.");
    }
    localStorage.setItem("lastVisit", currentDate);
});
function displayMessage(message) {
    const sidebar = document.querySelector(".sidebar");
    const messageElement = document.createElement("p");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    sidebar.insertBefore(messageElement, sidebar.firstChild);
}

var timestampInput = document.getElementById("timestamp");

timestampInput.value = Date.now();
s