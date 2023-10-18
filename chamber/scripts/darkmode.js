const modeButton = document.querySelector("#change-theme");

modeButton.addEventListener("change", (e) => {
    document.body.classList.toogle("dark", e.target.checked)

});