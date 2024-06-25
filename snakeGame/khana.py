from turtle import Turtle, Screen
import random

# screen = Screen()


class Khana(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_wid=0.5, stretch_len=0.5)
        self.color("blue")
        self.speed("fastest")
        self.pakwan()


    def pakwan(self):
        xcor = random.randint(-270, 270)
        ycor = random.randint(-270, 270)
        self.goto(xcor, ycor)

 # screen.exitonclick()