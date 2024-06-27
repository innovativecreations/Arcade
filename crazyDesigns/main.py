# import tkinter as tk
# from tkinter import messagebox
# import subprocess

# def run_script(script_name):
#     try:
#         subprocess.run(["python", script_name])
#     except Exception as e:
#         messagebox.showerror("Error", f"An error occurred while running {script_name}:\n{e}")

# root = tk.Tk()
# root.title("Crazy Designs")
# root.geometry("400x300")
# root.configure(bg="#f0f0f0")


# title_label = tk.Label(root, text="Crazy Designs", font=("Arial", 18), bg="#f0f0f0")
# title_label.pack(pady=20)

# btn_circles = tk.Button(root, text="Draw Circles", command=lambda: run_script("circles.py"), width=25)
# btn_circles.pack(pady=10)

# btn_hirst_painting = tk.Button(root, text="Hirst Painting", command=lambda: run_script("hirst-painting.py"), width=25)
# btn_hirst_painting.pack(pady=10)

# btn_polygons = tk.Button(root, text="Polygons", command=lambda: run_script("polygons.py"), width=25)
# btn_polygons.pack(pady=10)

# btn_random_draw = tk.Button(root, text="Random Draw", command=lambda: run_script("randomDraw.py"), width=25)
# btn_random_draw.pack(pady=10)

# root.mainloop()

        
import tkinter as tk
from tkinter import messagebox
import subprocess

def run_script(script_name):
    try:
        subprocess.run(["python", script_name])
    except Exception as e:
        messagebox.showerror("Error", f"An error occurred while running {script_name}:\n{e}")

def on_enter(e, button):
    button['background'] = '#2e7d32'

def on_leave(e, button):
    button['background'] = '#43a047'

root = tk.Tk()
root.title("Crazy Design")
root.geometry("500x400")
root.configure(bg="#e0f7fa")

title_label = tk.Label(root, text="Crazy Design", font=("Helvetica", 24, "bold"), bg="#e0f7fa", fg="#004d40")
title_label.pack(pady=20)

def create_button(root, text, command):
    button = tk.Button(root, text=text, command=command, width=30, height=2, bg="#43a047", fg="white", font=("Helvetica", 12, "bold"), relief="flat", borderwidth=0, highlightthickness=0)
    button.bind("<Enter>", lambda e: on_enter(e, button))
    button.bind("<Leave>", lambda e: on_leave(e, button))
    button.pack(pady=10)
    return button

frame = tk.Frame(root, bg="#e0f7fa")
frame.pack(pady=20)

btn_circles = create_button(frame, "Draw Circles", lambda: run_script("circles.py"))
btn_hirst_painting = create_button(frame, "Hirst Painting", lambda: run_script("hirst-painting.py"))
btn_polygons = create_button(frame, "Polygons", lambda: run_script("polygons.py"))
btn_random_draw = create_button(frame, "Random Draw", lambda: run_script("randomDraw.py"))

root.mainloop()