
// document.getElementById('suggest-movie').addEventListener('click', suggestMovie);

// async function suggestMovie() {
//     const movie = await fetchRandomMovie();
//     console.log(movie.Title);
//     document.getElementById("movie-title").innerText = movie.Title;
// }

// async function fetchRandomMovie() {
//     const apiKey = '52148c1e';
//     const randomId = Math.floor(Math.random() * 1000000) + 1; 
//     const response = await fetch(`http://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}`);
//     const movie = await response.json();
//     return movie;
// }

// const coinIcon = document.getElementById('coin');
// const tossBtn =
//     document.getElementById('toss-button');
// const result =
//     document.querySelector('.title');
// coinIcon.insertAdjacentElement('afterend', result);
// tossBtn.addEventListener('click', () => {
//     tossBtn.disabled = true;
//     tossCoinFunction();
// });
// function tossCoinFunction() {
//     const randomVal = Math.random();
//     const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails';
//     const imageUrl = faceCoin === 'Heads' ?
//         'coin.png' :
//         'coin.png';

//     coinIcon.classList.add('flip');
//     setTimeout(() => {
//         coinIcon.innerHTML =
//             `<img src="${imageUrl}" alt="${faceCoin}">`;
//         coinIcon.classList.remove('flip');
//         setTimeout(() => {
//             result.textContent = faceCoin;
//             result.style.opacity = 1;
//             tossBtn.disabled = false;
//         }, 500);
//     }, 1000);
// }
// script.js
// script.js
// script.js
document.getElementById('flip-coin').addEventListener('click', flipCoin);

function flipCoin() {
    const coin = document.getElementById('coin');
    const coinText = document.getElementById('coin-text');
    
    // Clear the text on the coin
    coinText.innerText = "";

    // Reset the animation
    coin.classList.remove('flip');
    void coin.offsetWidth; // Trigger reflow
    coin.classList.add('flip');

    // Set the text on the coin after the flip animation
    setTimeout(() => {
        coinText.innerText = "Mayank";
    }, 500); // Adjust the timing to match the midpoint of the animation
}
