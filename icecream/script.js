document.getElementById('generate-btn').addEventListener('click', () => {
    document.getElementById('background-music').play();
    generateTopping();
});
document.getElementById('save-btn').addEventListener('click', saveFavorite);

const toppings = [
    { name: 'Sprinkles', image: 'images/sprinkles.png' },
    { name: 'Chocolate Chips', image: 'images/chocolate_chips.png' },
    { name: 'Caramel Sauce', image: 'images/caramel_sauce.png' },
    { name: 'Cherries', image: 'images/cherries.png' },
    { name: 'Whipped Cream', image: 'images/whipped_cream.png' },
    { name: 'Oreo Crumbles', image: 'images/oreo_crumbles.png' },
    { name: 'Marshmallows', image: 'images/marshmallows.png' },
    { name: 'Peanut Butter', image: 'images/peanut_butter.png' },
    { name: 'Gummy Bears', image: 'images/gummy_bears.png' },
    { name: 'Strawberries', image: 'images/strawberries.png' },
    { name: 'Blueberries', image: 'images/blueberries.png' },
    { name: 'Banana Slices', image: 'images/banana_slices.png' },
    { name: 'Hot Fudge', image: 'images/hot_fudge.png' },
    { name: 'Coconut Flakes', image: 'images/coconut_flakes.png' },
    { name: 'Nuts', image: 'images/nuts.png' }
];

function generateTopping() {
    const randomIndex = Math.floor(Math.random() * toppings.length);
    const selectedTopping = toppings[randomIndex];

    const toppingDisplay = document.getElementById('topping-display');
    const toppingImage = document.getElementById('topping-image');

    toppingDisplay.innerText = selectedTopping.name;
    toppingImage.src = selectedTopping.image;
    toppingImage.style.display = 'block';

    toppingDisplay.style.animation = 'none';
    setTimeout(() => {
        toppingDisplay.style.animation = '';
    }, 10);
}

function saveFavorite() {
    const toppingDisplay = document.getElementById('topping-display').innerText;
    if (toppingDisplay) {
        const favoritesList = document.getElementById('favorites-list');
        const listItem = document.createElement('li');
        listItem.innerText = toppingDisplay;
        favoritesList.appendChild(listItem);
    }
}

function displayWeather(weather) {
    if (weather && weather.main && weather.weather) {
        const weatherDisplay = document.getElementById('weather-display');
        weatherDisplay.innerText = `Current weather: ${weather.main.temp}°C, ${weather.weather[0].description}`;
    } else {
        console.error('Invalid weather data:', weather);
    }
}

function getWeather(latitude, longitude) {
    const apiKey = '6ccd2f99eff4683534864afc9b83e822'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            getWeather(latitude, longitude);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

document.addEventListener('DOMContentLoaded', getLocation);
