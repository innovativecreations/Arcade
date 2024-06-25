import random
import turtle as t
tim = t.Turtle()


colors = [(149, 75, 50), (222, 201, 136), (53, 93, 123), (170, 154, 41), (138, 31, 20), (134, 163, 184), (197, 92, 73),
          (47, 121, 86), (73, 43, 35), (145, 178, 149), (14, 98, 70), (232, 176, 165), (160, 142, 158), (54, 45, 50),
          (101, 75, 77), (183, 205, 171), (36, 60, 74), (19, 86, 89), (82, 148, 129), (147, 17, 19), (27, 68, 102),
          (12, 70, 64), (107, 127, 153), (176, 192, 208), (168, 99, 102)]

dot_no = 10

dot_space = 50

half_dot_space = dot_space/2

t.colormode(255)


def paint_dot_h():
    for i in range(dot_no):
        tim.dot(20, random.choice(colors))
        tim.penup()
        tim.forward(dot_space)
        tim.pendown()


tim.speed("fastest")

origin = int(-(((dot_space * dot_no)/2) - half_dot_space))
print(origin)
h_space = origin
tim.penup()
tim.goto(origin, origin)
tim.hideturtle()

for i in range(dot_no):

    tim.pendown()
    h_space += dot_space
    paint_dot_h()
    tim.penup()
    tim.goto(origin, h_space)


screen = t.Screen()
screen.exitonclick()



