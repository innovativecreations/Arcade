import turtle as t
import random

tim = t.Turtle()
t.colormode(255)


def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    color = (r, g, b)
    return color
########### Challenge 5 - Spirograph ########
# tim.speed("fastest")
degree = 7
while True:
# for i in range(int(360/degree)):
    tim.circle(100)
    tim.left(degree)
    color = random_color()
    tim.color(color)

screen = t.Screen()
screen.exitonclick()