from turtle import Turtle, Screen

tim = Turtle()
screen = Screen()


def move_forwards():
    tim.forward(10)


def move_backward():
    tim.backward(10)


def change_left_angle():
    tim.left(2)


def change_right_angle():
    tim.right(2)


def reset():
    tim.goto(0,0)
    tim.clear()


screen.listen()
screen.onkey(key="w", fun=move_forwards)
screen.onkey(key="s", fun=move_backward)
screen.onkey(key="a", fun=change_left_angle)
screen.onkey(key="d", fun=change_right_angle)
screen.onkey(key="c", fun=reset)
screen.exitonclick()
