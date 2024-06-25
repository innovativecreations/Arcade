from turtle import Turtle, Screen
import random

colours = ["red", "orange", "yellow", "green", "blue", "purple"]
ordinates = [-100, -60, -20, 20, 60, 100]
screen = Screen()
screen.setup(width=500, height=400)
prediction = screen.textinput(title="Make your bet", prompt="Which turtle will win the game? Type the colour")
sara_kachua = []


for i in range(0, 6):
    tim = Turtle(shape="turtle")
    tim.color(colours[i])
    tim.penup()
    tim.goto(x=-230, y=ordinates[i])
    sara_kachua.append(tim)

if prediction in colours:
    not_game_over = True
else:
    print("You had entered wrong command. Please try again")
while not_game_over:
    for i in range(0, 6):
        kachua = sara_kachua[i]
        distance = random.randint(0, 10)
        kachua.forward(distance)



screen.exitonclick()
