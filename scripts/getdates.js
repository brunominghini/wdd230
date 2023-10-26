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
document.getElementById("lastModified").innerText = `${document.lastModified}`



if (typeof (Storage) !== "undefined") {
    if (localStorage.visitCount) {
        localStorage.visitCount = parseInt(localStorage.visitCount) + 1;
    } else {
        localStorage.visitCount = 1;
    }
    document.getElementById("visitCount").textContent = localStorage.visitCount;
} else {
    alert("Browser not suported");
}
