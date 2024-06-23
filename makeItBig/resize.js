document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const imageUrl = params.get('url');
    const image = document.getElementById('image');

    if (imageUrl) {
        image.src = imageUrl;
        image.style.display = 'block';
        image.style.width = '200px';
        image.style.height = '200px';

        image.addEventListener('click', function() {
            const currentWidth = image.clientWidth;
            const currentHeight = image.clientHeight;
            const newWidth = currentWidth * 1.1;
            const newHeight = currentHeight * 1.1;

            image.style.width = newWidth + 'px';
            image.style.height = newHeight + 'px';
        });
    }
});
