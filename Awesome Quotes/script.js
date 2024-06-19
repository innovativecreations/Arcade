document.getElementById('quote-button').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var quoteElement = document.getElementById('quote');
    var authorElement = document.getElementById('author');

    overlay.style.display = 'block';
    quoteElement.style.visibility = 'hidden';
    authorElement.style.visibility = 'hidden';

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

            overlay.style.display = 'none';
            quoteElement.style.visibility = 'visible';
            authorElement.style.visibility = 'visible';
        })
        .catch(function(error) {
            console.error('Error fetching quote:', error);
            overlay.style.display = 'none';
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
