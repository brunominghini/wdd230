
// JavaScript code
// Function to show the banner on specific days (Mon, Tue, Wed, Sat)
function showOrHideBanner() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const banner = document.getElementById('banner');

    // Show banner only on Mon (1), Tue (2), Wed (3), and Sat (6)
    if ([0, 1, 2, 3,].includes(currentDay)) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Close the banner when the close button is clicked
document.getElementById('closeBanner').addEventListener('click', function () {
    document.getElementById('banner').style.display = 'none';
});

// Call the function initially to show or hide the banner
showOrHideBanner();
