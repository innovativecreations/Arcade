// script.js
document.getElementById('flip-coin').addEventListener('click', suggestMovie);

async function suggestMovie() {
    const movie = await fetchRandomMovie();
    flipCoin(movie.Title);
}

async function fetchRandomMovie() {
    const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your OMDb API key
    const randomId = Math.floor(Math.random() * 1000000) + 1; // Generate a random movie ID
    const response = await fetch(`http://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}`);
    const movie = await response.json();
    return movie;
}

function flipCoin(movieTitle) {
    const coin = document.getElementById('coin');
    const coinText = document.getElementById('coin-text');
    

    coinText.innerText = "";

    
    coin.classList.remove('flip');
    void coin.offsetWidth; 
    coin.classList.add('flip');

    
    setTimeout(() => {
        coinText.innerText = movieTitle;
        adjustCoinSize(movieTitle);
    }, 500); 
}

function adjustCoinSize(text) {
    const coin = document.getElementById('coin');
    const coinText = document.getElementById('coin-text');
    
    const baseSize = 150; 
    const maxFontSize = 1.2; 
    const minFontSize = 0.5; 

   
    const textLength = text.length;
    const newFontSize = Math.max(minFontSize, maxFontSize - (textLength * 0.02));
    
    coinText.style.fontSize = `${newFontSize}em`;
    
    
    const newSize = baseSize + (textLength * 2); 
    coin.style.width = `${newSize}px`;
    coin.style.height = `${newSize}px`;
}
