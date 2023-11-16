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