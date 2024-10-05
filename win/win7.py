from cgitb import text
from tkinter import *
from tkinter.ttk import *

root = Tk()
root.geometry("500x400")
root.title("Src")


fn = StringVar()
ln = StringVar()

Label(root, text="First Name:-").place(x = 100,y = 20)
Label(root, text="Last Name:-").place(x = 100,y = 50)

Entry(root, width=30, textvariable=fn).place(x = 200,y=20)
Entry(root, width=30, textvariable=ln).place(x = 200,y=50)

def adddetails():
    Label(root, text=fn.get()).place(x = 200,y = 120)
    
Button(root, text="submit" , command=adddetails).place(x = 200, y = 90)




root.mainloop()

