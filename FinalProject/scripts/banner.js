document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('banner');
    var closeBannerBtn = document.getElementById('closeBanner');

    closeBannerBtn.addEventListener('click', function () {
        banner.style.display = 'none';
    });

    banner.style.display = 'block';

    closeBannerBtn.addEventListener('click', function () {
        banner.style.display = 'none';
    });
});
