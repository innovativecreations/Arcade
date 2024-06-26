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

    const randomIngredients = [];
    while (randomIngredients.length < 3) {
        const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
        if (!randomIngredients.includes(randomIngredient)) {
            randomIngredients.push(randomIngredient);
        }
    }

    const recipe = `Try this bizarre combination: ${randomIngredients.join(', ')}!`;
    document.getElementById('recipe-display').innerText = recipe;
});
