document.getElementById('generate-button').addEventListener('click', function() {
    const ingredients = [
        "Marshmallows", "Pickles", "Chocolate Sprinkles", "Bacon", 
        "Candy Corn", "Jalapenos", "Gummy Bears", "Anchovies", 
        "Peanut Butter", "Olives", "Sardines", "Whipped Cream", 
        "Banana Slices", "Hot Sauce", "Fried Insects", "Cheese", 
        "Cotton Candy", "Pepperoni", "Popcorn", "Mushrooms", 
        "Ice Cream", "Tuna", "Wasabi", "Caramel", "Mango", 
        "Sausage", "Kimchi", "Blueberries", "Tofu", "Licorice", 
        "Cucumber", "Nutella", "Salmon", "Honey", "Apple Slices", 
        "Meatballs", "Pineapple", "Cottage Cheese", "Eggplant", 
        "Jelly Beans"
    ];

    const numIngredients = parseInt(document.getElementById('num-ingredients').value);
    const randomIngredients = [];
    while (randomIngredients.length < numIngredients) {
        const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
        if (!randomIngredients.includes(randomIngredient)) {
            randomIngredients.push(randomIngredient);
        }
    }

    const recipe = `Try this bizarre combination: ${randomIngredients.join(', ')}!`;
    document.getElementById('recipe-display').innerText = recipe;
    document.getElementById('save-button').style.display = 'inline-block';
    document.getElementById('share-link').style.display = 'inline-block';

    addRecipeToHistory(recipe);
});

function addRecipeToHistory(recipe) {
    const recipeHistory = document.getElementById('recipe-history');
    const li = document.createElement('li');
    li.innerText = recipe;
    recipeHistory.appendChild(li);
}

document.getElementById('save-button').addEventListener('click', function() {
    const recipe = document.getElementById('recipe-display').innerText;
    const blob = new Blob([recipe], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recipe.txt';
    a.click();
});

document.getElementById('share-link').addEventListener('click', function() {
    const recipe = document.getElementById('recipe-display').innerText;
    const url = new URL(window.location.href);
    url.searchParams.set('recipe', encodeURIComponent(recipe));
    document.getElementById('share-link').href = url.toString();
});