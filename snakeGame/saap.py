from turtle import Turtle, Screen

position = [(0,0), (-20, 0), (-40, 0)]
snake_size = 3
abscissa = 0
ordinate = 0
speed = 20

RIGHT = 0
UP = 90
LEFT = 180
DOWN = 270

class Snake:

    def __init__(self):
        self.saap_ka_sariirr = []
        self.saap_ka_nirman()
        self.saap_ka_muh = self.saap_ka_sariirr[0]

    def saap_ka_nirman(self):
        for i in position:
            self.sarrir_ka_ansh(i)

    def sarrir_ka_ansh(self, i):
        snake = Turtle(shape="square")
        snake.color("white")
        snake.penup()
        snake.goto(i)
        self.saap_ka_sariirr.append(snake)

    def motapa(self):
        self.sarrir_ka_ansh(self.saap_ka_sariirr[-1].position())

    def saap_hiil(self):
        for i in range(len(self.saap_ka_sariirr) - 1, 0, -1):
            print(i)
            fx = self.saap_ka_sariirr[i - 1].xcor()
            fy = self.saap_ka_sariirr[i - 1].ycor()
            self.saap_ka_sariirr[i].goto(x=fx, y=fy)
        self.saap_ka_sariirr[0].forward(speed)
        self.saap_ka_muh = self.saap_ka_sariirr[0]

    def left(self):
        if self.saap_ka_muh.heading() != RIGHT:
            self.saap_ka_muh.setheading(LEFT)

    def right(self):
        if self.saap_ka_muh.heading() != LEFT:
            self.saap_ka_muh.setheading(RIGHT)

    def up(self):
        if self.saap_ka_muh.heading() != DOWN:
            self.saap_ka_muh.setheading(UP)

    def down(self):
        if self.saap_ka_muh.heading() != UP:
            self.saap_ka_muh.setheading(DOWN)

    def waapsi(self):
        for i in self.saap_ka_sariirr:
            i.goto(5000, 5000)
        self.saap_ka_sariirr.clear()
        self.saap_ka_nirman()
