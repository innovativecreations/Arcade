from turtle import Screen
import time as t
from saap import Snake
from khana import Khana
from points import Ankh

saap_ka_size = 3

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Saap_ka_khel")
screen.tracer(0)

khana = Khana()
saap = Snake()
ankh = Ankh()

screen.listen()
screen.onkey(saap.up, "Up")
screen.onkey(saap.down, "Down")
screen.onkey(saap.right, "Right")
screen.onkey(saap.left, "Left")

# saap_ka_sariir = saap.saap_ka_nirman

screen.update()

khel_chalu = True
while khel_chalu:
    screen.update()
    t.sleep(0.1)

    saap.saap_hiil()

    #khana thus raha hai
    if saap.saap_ka_muh.distance(khana) < 15:
        khana.pakwan()
        ankh.ginoh()
        saap.motapa()

    #diwal se thuk gaya
    if saap.saap_ka_muh.xcor() > 280 or saap.saap_ka_muh.xcor() < -280 or saap.saap_ka_muh.ycor() > 280 or \
            saap.saap_ka_muh.ycor() < -280:
        ankh.aukaat_bada_kya()
        saap.waapsi()

    #paer par kulhadi
    for i in saap.saap_ka_sariirr[1:]:
        if saap.saap_ka_muh.distance(i) < 1:
            ankh.aukaat_bada_kya()
            saap.waapsi()




ankh.ghar_jaao()


screen.exitonclick()
