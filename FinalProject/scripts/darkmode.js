
document.addEventListener("DOMContentLoaded", function() {
    const modeButton = document.querySelector("#mode");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    
    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            body.style.background = "#262238";
            body.style.color = "#d3d3d3";
            footer.style.background = "#080808";
            modeButton.textContent = "🔆";
        } else {
            body.style.background = "#d3d3d3";
            body.style.color = "#262238";
            modeButton.textContent = "🕶️";
            footer.style.background = "#fff";
        }
    });
    });