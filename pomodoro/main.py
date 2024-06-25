import math
from tkinter import *
import math as m
# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
reps = 0
timer = None

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #

def count_time(count):
    global timer
    min = m.floor(count/60)
    sec = count % 60
    if sec < 10:
        sec = f"0{sec}"

    canvas.itemconfig(timer_text, text=f"{min}:{sec}")
    if count > 0:
        timer = window.after

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Tamatar")
window.config(padx=100, pady=50, bg = YELLOW)

image_source = PhotoImage(file="tomato.png")

canvas = Canvas(width=200, height= 224, bg=YELLOW, highlightthickness=0)
canvas.create_image(100, 112, image= image_source)
timer_text = canvas.create_text(100, 130, text="00:00", fill="white",font=(FONT_NAME, 35, "bold"))
canvas.grid(column= 1,row=1)

timer_l = Label(text= "Timer", bg=YELLOW, fg= GREEN, font=(FONT_NAME, 50))
timer_l.grid(column=1, row=0)

start_b = Button(text= "Start", bg=YELLOW, highlightthickness=0)
start_b.grid(column=0, row=2)

stop_b = Button(text= "Stop", bg=YELLOW, highlightthickness=0)
stop_b.grid(column=2, row=2)

checkmark_l = Label(bg=YELLOW, fg= GREEN, font=(FONT_NAME, 8, "bold"))
checkmark_l.grid(column=1, row=3)


window.mainloop()

