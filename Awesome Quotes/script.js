document.getElementById('quote-button').addEventListener('click', function() {
    var loader = document.getElementById('loader');
    var overlay = document.getElementById('overlay');
    var quoteElement = document.getElementById('quote');
    var authorElement = document.getElementById('author');

    overlay.style.display = 'block'; // Show the overlay
    loader.style.display = 'block'; // Show the loader
    quoteElement.style.visibility = 'hidden'; // Hide quote during loading
    authorElement.style.visibility = 'hidden'; // Hide author during loading

    fetch('https://api.quotable.io/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quoteElement.textContent = '"' + data.content + '"';
            authorElement.textContent = '— ' + data.author;

            var baseFontSize = 24;
            var adjustedFontSize = Math.max(baseFontSize - (data.content.length / 20), 14);
            quoteElement.style.fontSize = adjustedFontSize + 'px';
            quoteElement.style.color = getRandomColor();

            overlay.style.display = 'none'; // Hide the overlay
            loader.style.display = 'none'; // Hide the loader
            quoteElement.style.visibility = 'visible'; // Show quote
            authorElement.style.visibility = 'visible'; // Show author
        })
        .catch(function(error) {
            console.error('Error fetching quote:', error);
            overlay.style.display = 'none';
            loader.style.display = 'none';
            quoteElement.style.visibility = 'visible';
            authorElement.style.visibility = 'visible';
        });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
