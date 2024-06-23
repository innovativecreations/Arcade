document.getElementById('submit-button').addEventListener('click', function() {
    let imageUrl = document.getElementById('image-url').value;
    if (!imageUrl) {
        imageUrl = 'potato/1.png';
    }

    window.open('resize.html?url=' + encodeURIComponent(imageUrl), '_blank');
});
