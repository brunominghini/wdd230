
document.addEventListener("DOMContentLoaded", function() {
    const modeButton = document.querySelector("#mode");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    
    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            body.style.background = "#262238";
            body.style.color = "#fff";
            footer.style.background = "#080808";
            modeButton.textContent = "🔆";
        } else {
            body.style.background = "#fff";
            body.style.color = "#262238";
            modeButton.textContent = "🕶️";
            footer.style.background = "#fff";
        }
    });
    });