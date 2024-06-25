from turtle import Turtle

FONT = ("courier", 24, "normal")
FONT_ALIGN = "center"

class Ankh(Turtle):

    def __init__(self):
        super().__init__()

        self.tera_aukaat = 0

        with open("score.txt", mode="r") as l:
            self.tera_aukaat = int(l.read())

        self.sankhya = 0
        self.color("white")
        self.hideturtle()
        self.penup()
        self.goto(0, 260)
        self.chapoh()


    def chapoh(self):
        self.clear()
        self.write(arg=f"Score: {self.sankhya}  High Score: {self.tera_aukaat}", align=FONT_ALIGN, font=FONT)

    def ghar_jaao(self):
        self.goto(0,0)
        self.write(arg="Khel khatam, paisa hajam", align=FONT_ALIGN, font=FONT)

    def ginoh(self):
        self.sankhya += 1
        self.clear()
        self.chapoh()

    def aukaat_bada_kya(self):
        if self.sankhya > self.tera_aukaat:
            self.tera_aukaat = self.sankhya
            with open("score.txt", mode="w") as l:
                l.write(str(self.tera_aukaat))
        self.sankhya = 0
        self.chapoh()



# cla = ankh()
# time.sleep(5)