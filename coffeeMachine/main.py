MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

def check_materials(coffee):
    isSufficientMaterials = True
    if resources["water"] < coffee["water"]:
        print("Sorry, Not enough water")
        isSufficientMaterials = False
    elif resources["milk"] < coffee["milk"]:
        print("Sorry, Not enough milk")
        isSufficientMaterials = False
    elif resources["coffee"] < coffee["coffee"]:
        print("Sorry, Not enough coffee")
        isSufficientMaterials = False
    return isSufficientMaterials

def checkMoney(cost, totalMoneyEntered, coffee):
    if cost > totalMoneyEntered:
        print(f"Sorry that's not enough money. Your {totalMoneyEntered} money refunded")
    elif cost == totalMoneyEntered:
        print(f"Here is your {coffee}, Enjoy!")
    else:
        print(f"Here is your {coffee}, Enjoy!")
        print(f"Here is your {totalMoneyEntered - cost}, in change.")

def askForMoney(coffee_cost, coffee):
    print('Please insert coins')
    quarter = int(input("How many quarter?")) * 0.25
    dimes = int(input("How many dimes?")) * 0.1
    nickles = int(input("How many nickles?")) * 0.05
    pennies = int(input("How many pennies?")) * 0.01
    totalMoneyEntered = quarter + dimes + nickles + pennies
    checkMoney(coffee_cost, totalMoneyEntered, coffee)

while True:

    material_available = False
    select_coffee = input("What would you like? (espresso/latte/cappuccino): ")

    if select_coffee == "report":
        print(f"Water = {resources['water']}ml")
        print(f"Milk = {resources['milk']}g")
        print(f"Coffee = {resources['water']}100g")

    elif select_coffee == "cancel":
        break

    else:
        coffee = MENU[select_coffee]
        material_available = check_materials(coffee["ingredients"])
        if material_available == True:
            askForMoney(coffee["cost"], coffee)

print("Shutting Down, Have a awesome day")
