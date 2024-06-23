document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const imageUrl = params.get('url') || 'potato/1.png';
    const image = document.getElementById('image');
    const title = document.getElementById('title');

    if (imageUrl) {
        image.src = imageUrl;
        image.style.display = 'block';
        image.style.width = '200px';
        image.style.height = '200px';
        title.style.fontSize = '1.5em';

        image.addEventListener('click', function() {
            const currentWidth = image.clientWidth;
            const currentHeight = image.clientHeight;

            const newWidth = currentWidth * 1.1;
            const newHeight = currentHeight * 1.1;

            if (newHeight >= window.innerHeight) {
                image.style.width = '200px';
                image.style.height = '200px';
                title.style.fontSize = '1.5em';
            } else {
                image.style.width = newWidth + 'px';
                image.style.height = newHeight + 'px';

                const newFontSize = Math.max(0.5, 1.5 / (newHeight / 200));
                title.style.fontSize = newFontSize + 'em';
            }
        });
    }
});
