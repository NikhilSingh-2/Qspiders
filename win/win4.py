from tkinter import *
from tkinter.ttk import *

root = Tk()
root.geometry("500x400")
root.title("Src")

menubar = Menu(root)

def show():
    print("add new file")

file = Menu(menubar , tearoff = 0)
menubar.add_cascade(label = "File", menu = file)

file.add_command(label="New File",command=show)
file.add_command(label="Open File",command=None)
file.add_command(label="Save File",command=None)
file.add_command(label="Save As File",command=None)
file.add_checkbutton(label = "add", command=None)
file.add_radiobutton(label="select", command=None)
file.add_separator()
file.add_command(label="Exit",command=root.destroy)



edit = Menu(menubar, tearoff = 0)
menubar.add_cascade(label = "Edit", menu = edit)
edit.add_command(label = "Undo", command=None)
edit.add_command(label = "Redo", command=None)
edit.add_separator()
edit.add_command(label = "Copy", command=None)
edit.add_command(label = "Paste", command=None)
edit.add_command(label = "Cut", command=None)
edit.add_separator()
edit.add_command(label = "Find", command=None)


Search = Menu(menubar)
menubar.add_cascade(label = "Search", menu = Search)

root.config(menu = menubar)

root.mainloop()

