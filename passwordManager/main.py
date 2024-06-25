from tkinter import *
from tkinter import messagebox
from random import randint, choice, shuffle
import pyperclip
import json

# ---------------------------- search data ------------------------------- #

def search():
    website = website_entry.get()
    try:
        with open("Secret data.json", mode="r") as data_f:
            data = json.load(data_f)
        searched_d = data[website]
    except FileNotFoundError:
        messagebox.showinfo(title="Error", message="There is no registered data")
    except KeyError:
        messagebox.showinfo(title="Error", message="Sorry please enter right website name")
    else:
        messagebox.showinfo(title=website, message=f"Email/ Username: {searched_d['Email/ Username']}\nPassword: {searched_d['Password']}")

# ---------------------------- PASSWORD GENERATOR ------------------------------- #
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
           'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
           'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']


def gen_pass():

    char_list = [choice(letters) for char in range(randint(8, 10))]
    symbols_list = [choice(symbols) for char in range(randint(2, 4))]
    no_list = [choice(numbers) for char in range(randint(2, 4))]

    password_list = char_list + symbols_list + no_list

    shuffle(password_list)

    password = "".join(password_list)

    pass_entry.delete(0, END)
    pass_entry.insert(END, password)
    pyperclip.copy(password)

# print(f"Your password is: {password}")
# ---------------------------- SAVE PASSWORD ------------------------------- #

def save_all():
    website = website_entry.get()
    contact = contact_entry.get()
    password = pass_entry.get()
    new_data = {
        website: {
            "Email/ Username": contact,
            "Password": password
        }
    }
    data = new_data
    if len(website) < 1 or len(contact) < 1 or len(password) < 1:
        messagebox.showinfo(title="Error", message="Don't leave any checkbox empty")
    else:
        confirmation = messagebox.askokcancel(title="Confirm", message=f"Do you confirm the entry:"
                                                                       f"\n{website}\n{contact}\n{password}")
        if confirmation:
            try:
                with open("Secret data.json", mode="r") as data_f:
                    data = json.load(data_f)
                    data.update(new_data)
            except FileNotFoundError:
                pass
            finally:
                with open("Secret data.json", mode="w") as data_f:
                    json.dump(data, data_f, indent=4)
                    website_entry.delete(0, END)
                    pass_entry.delete(0, END)


# ---------------------------- UI SETUP ------------------------------- #


window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)

image_source = PhotoImage(file="logo.png")
canva = Canvas(width=200, height=200, highlightthickness=0)
canva.create_image(100, 100, image=image_source)
canva.grid(column=1, row=0)

website_l = Label(text="Website:")
website_l.grid(column=0, row=1)
website_l.focus()

contact_l = Label(text="Email/Username:")
contact_l.grid(column=0, row=2)

pass_l = Label(text="Password:")
pass_l.grid(column=0, row=3)

website_entry = Entry()
website_entry.grid(column=1, row=1, sticky="EW")

contact_entry = Entry(width=35)
contact_entry.grid(column=1, row=2, columnspan=2, sticky="EW")
contact_entry.insert(END, "innovativecreations195@gmail.com")

pass_entry = Entry(width=21)
pass_entry.grid(column=1, row=3, sticky="EW")

search_b = Button(text="Search", command= search)
search_b.grid(column=2, row=1, sticky="EW")

generate_b = Button(text="Generate Password", command=gen_pass)
generate_b.grid(column=2, row=3)

add_b = Button(text="Add", width=36, command=save_all)
add_b.grid(column=1, row=4, columnspan=2, sticky="EW")

window.mainloop()
