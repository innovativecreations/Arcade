import turtle as t
import random

tim = t.Turtle()

colours = ["CornflowerBlue", "DarkOrchid", "IndianRed", "DeepSkyBlue", "LightSeaGreen", "wheat", "SlateGray", "SeaGreen"]
angles = [0, 90, 180, 270]
t.colormode(255)
tim.shape("turtle")
def color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    rgb = (r, g, b)
    tim.color(rgb)
# tim.speed("fastest")
tim.pensize(10)
for i in range(270):
    tim.forward(30)
    tim.right(random.choice(angles))
    color()