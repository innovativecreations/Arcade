document.getElementById('generate-btn').addEventListener('click', generateTopping);
document.getElementById('save-btn').addEventListener('click', saveFavorite);
document.getElementById('background-music').play();

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
