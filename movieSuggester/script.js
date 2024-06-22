document.getElementById('flip-coin').addEventListener('click', suggestMovie);

async function suggestMovie() {
    const movie = await fetchRandomMovie();
    flipCoin(movie.Title);
}

async function fetchRandomMovie() {
    const apiKey = '52148c1e'; // Replace with your OMDb API key
    const randomId = Math.floor(Math.random() * 1000000) + 1; 
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

    const maxFontSize = 2; 
    const minFontSize = 0.8; 
    const maxLength = 30; 
    const fontSize = Math.max(minFontSize, maxFontSize - (movieTitle.length / maxLength));

    coinText.style.fontSize = `${fontSize}em`;

    
    setTimeout(() => {
        coinText.innerText = movieTitle;
    }, 500);
}
suggestMovie();