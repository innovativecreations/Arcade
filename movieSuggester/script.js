// script.js
document.getElementById('suggest-movie').addEventListener('click', suggestMovie);

async function suggestMovie() {
    const movie = await fetchRandomMovie();
    console.log(movie.Title);
}

async function fetchRandomMovie() {
    const apiKey = '52148c1e';
    const randomId = Math.floor(Math.random() * 1000000) + 1; // Generate a random movie ID
    const response = await fetch(`http://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}`);
    const movie = await response.json();
    return movie;
}

