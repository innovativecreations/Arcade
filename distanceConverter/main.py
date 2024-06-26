from tkinter import *

window = Tk()
window.title("Converter")
window.minsize(width=300, height=200)


def converter():
    d = float(miles.get())
    km = int(d * 1.609)
    # print_ans(ans= km)
    ans_l.config(text=f"{km}")


miles = Entry(width=5)
miles.insert(END, string="0")
# miles.config(xpad= 10)
miles.grid(column=1, row=0)

l = Label(text="miles")
l.grid(column=2, row=0)

work_l = Label(text=f"is equal to")
work_l.grid(column=0, row=1)

# print_ans()
ans_l = Label(text="0")
ans_l.grid(column=1, row=1)

l2 = Label(text="miles")
l2.grid(column=2, row=1)

b = Button(text="calculate", command=converter)
b.grid(column=1, row=2)

window.mainloop()
