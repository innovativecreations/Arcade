document.getElementById('quote-button').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const quoteText = data.content;
            const quoteElement = document.getElementById('quote');
            quoteElement.textContent = '"' + quoteText + '"';
            document.getElementById('author').textContent = '— ' + data.author;
            
            // Dynamic font sizing based on quote length
            const baseFontSize = 24; // Base font size for average length quotes
            const adjustedFontSize = Math.max(baseFontSize - (quoteText.length / 20), 14); // Ensures font size doesn't get too small
            quoteElement.style.fontSize = adjustedFontSize + 'px';

            // Change color randomly each time the quote changes
            quoteElement.style.color = getRandomColor();
        })
        .catch(function(error) {
            console.error('Error fetching quote:', error);
        });
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
