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