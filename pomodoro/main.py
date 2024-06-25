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
# ---------------------------- TIMER RESET ------------------------------- #

def reset():
    global timer, reps
    window.after_cancel(timer)
    reps = 0
    timer_l.config(text="Timer", fg=GREEN)
    canvas.itemconfig(timer_text, text="00:00")
    checkmark_l.config(text="")


# ---------------------------- TIMER MECHANISM ------------------------------- #

def start_count():
    global reps
    reps += 1
    long_break = LONG_BREAK_MIN * 60
    short_break = SHORT_BREAK_MIN * 60
    work_time = WORK_MIN * 60
    if reps % 8 == 0:
        count_time(long_break)
        timer_l.config(text="Break", fg=RED)
    elif reps % 2 == 0:
        count_time(short_break)
        timer_l.config(text="Break", fg=PINK)
    else:
        count_time(work_time)
        timer_l.config(text="Work", fg=GREEN)


# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #

def count_time(count):
    global timer
    min = m.floor(count/60)
    sec = count % 60
    if sec < 10:
        sec = f"0{sec}"

    canvas.itemconfig(timer_text, text=f"{min}:{sec}")
    if count > 0:
        timer = window.after(1000, count_time, count - 1)
    else:
        marks = ""
        start_count()
        no = math.floor(reps/2)
        for i in range(no):
            marks += "✔"
        checkmark_l.config(text=marks)

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

start_b = Button(text= "Start", bg=YELLOW, highlightthickness=0, command= start_count)
start_b.grid(column=0, row=2)

stop_b = Button(text= "Stop", bg=YELLOW, highlightthickness=0, command=reset)
stop_b.grid(column=2, row=2)

checkmark_l = Label(bg=YELLOW, fg= GREEN, font=(FONT_NAME, 8, "bold"))
checkmark_l.grid(column=1, row=3)


window.mainloop()
