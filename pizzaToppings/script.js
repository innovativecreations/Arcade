document.getElementById('generate-button').addEventListener('click', function() {
    const toppings = [
        "Marshmallow and Pickles",
        "Chocolate Sprinkles and Bacon",
        "Candy Corn and Jalapenos",
        "Gummy Bears and Anchovies",
        "Peanut Butter and Olives",
        "Sardines and Whipped Cream",
        "Banana Slices and Hot Sauce",
        "Fried Insects and Cheese",
        "Cotton Candy and Pepperoni",
        "Popcorn and Mushrooms",
        "Ice Cream and Tuna",
        "Wasabi and Caramel",
        "Mango and Sausage",
        "Kimchi and Blueberries",
        "Tofu and Licorice",
        "Cucumber and Nutella",
        "Salmon and Honey",
        "Apple Slices and Meatballs",
        "Pineapple and Cottage Cheese",
        "Eggplant and Jelly Beans",
    ];

    const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
    document.getElementById('topping-display').innerText = randomTopping;
});
