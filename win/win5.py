from tkinter import *
from tkinter.ttk import *

root = Tk()
root.geometry("500x400")
root.title("Src")


spin = Spinbox(root, from_=1, to=20)
spin.pack()


root.mainloop()

