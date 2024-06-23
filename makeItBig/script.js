document.getElementById('submit-button').addEventListener('click', function() {
    const imageUrl = document.getElementById('image-url').value;
    if (imageUrl) {
        // Open new page with the image
        window.open('resize.html?url=' + encodeURIComponent(imageUrl), '_blank');
    }
});
