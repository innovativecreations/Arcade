// script.js
document.getElementById('flip-coin').addEventListener('click', suggestMovie);

async function suggestMovie() {
    const movie = await fetchRandomMovie();
    flipCoin(movie.Title);
}

async function fetchRandomMovie() {
    const apiKey = '52148c1e'; // Replace with your OMDb API key
    const randomId = Math.floor(Math.random() * 1000000) + 1; // Generate a random movie ID
    const response = await fetch(`http://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}`);
    const movie = await response.json();
    return movie;
}

function flipCoin(movieTitle) {
    const coin = document.getElementById('coin');
    const coinText = document.getElementById('coin-text');
    
    // Clear the text on the coin
    coinText.innerText = "";

    // Reset the animation
    coin.classList.remove('flip');
    void coin.offsetWidth; // Trigger reflow
    coin.classList.add('flip');

    // Dynamically adjust font size based on text length
    const maxFontSize = 2; // Maximum font size in em units
    const minFontSize = 0.8; // Minimum font size in em units
    const maxLength = 30; // Adjust as needed based on your coin size

    const fontSize = Math.max(minFontSize, maxFontSize - (movieTitle.length / maxLength));

    coinText.style.fontSize = `${fontSize}em`;

    // Set the text on the coin after the flip animation
    setTimeout(() => {
        coinText.innerText = movieTitle;
    }, 500); // Adjust the timing to match the midpoint of the animation
}
suggestMovie();