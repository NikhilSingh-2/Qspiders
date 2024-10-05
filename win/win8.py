from cgitb import text
import string
from tkinter import *
from tkinter.ttk import *

root = Tk()
root.geometry("500x400")
root.title("Src")


n1 = StringVar()
n2 = StringVar()

Label(root, text="Number 1:-").place(x = 100,y = 20)
Label(root, text="Number 2:-").place(x = 100,y = 50)

Entry(root, width=30, textvariable=n1).place(x = 200,y=20)
Entry(root, width=30, textvariable=n2).place(x = 200,y=50)

def adddetails():
    num1 = int(n1.get())
    num2 = int(n2.get())
    sum = num1 + num2
    s = str(sum)
    Label(root, text="Total :- "+s).place(x = 200,y = 120)
    
    
Button(root, text="submit" , command=adddetails).place(x = 200, y = 90)




root.mainloop()

