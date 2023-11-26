

function showOrHideBanner() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const banner = document.getElementById('banner');

    if ([/*0,sunday for test*/ 1, 2, 3,].includes(currentDay)) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}


document.getElementById('closeBanner').addEventListener('click', function () {
    document.getElementById('banner').style.display = 'none';
});

showOrHideBanner();
