#from tkinter import *
import tkinter as tk
from tkinter import ttk

root = tk.Tk()
root.geometry("500x400")

v = tk.StringVar()

dropdown = ttk.Combobox(root, width=30, textvariable = v)
dropdown["values"] = ("jan","feb","mar","appr","may","june")

dropdown.place(x=100,y=50)
#dropdown.pack(side = LEFT)
#dropdown.grid(column = 1, row = 5)
dropdown.current(0)
root.mainloop()

