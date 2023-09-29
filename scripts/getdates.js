/*document.getElementById("currentYear").innerText = new Date().getFullYear;

document.getElementById9("lastModified").innerText = `Last Modified: ${document.lastModified}`
*/
// Function to get the current year
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

// Function to get the last modified date of the document
function getLastModifiedDate() {
    const lastModified = document.lastModified;
    return lastModified;
}

// Update the copyright year in the footer
function updateCopyrightYear() {
    const currentYear = getCurrentYear();
    const yearSpan = document.getElementById("currentYear");

    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
}

// Update the last modified date in the footer
function updateLastModifiedDate() {
    const lastModified = getLastModifiedDate();
    const lastModifiedSpan = document.getElementById("lastModified");

    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = lastModified;
    }
}

// Call the functions to update the copyright year and last modified date when the page loads
window.onload = function () {
    updateCopyrightYear();
    updateLastModifiedDate();
};

