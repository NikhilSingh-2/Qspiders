from tkinter import *
from tkinter.ttk import *

root = Tk()
root.geometry("500x400")
root.title("Src")


def showInfo():
    print("dkfkdhfkdhfkdhfkdf")



frame1 = Frame(root)
frame2 = Frame(root)


frame1.pack(side = TOP)
frame2.pack(side = BOTTOM)


Button(frame1, text = "submit 1", command=showInfo).pack(side = LEFT)
Button(frame1, text = "submit 2", command=showInfo).pack(side = LEFT)
Button(frame1, text = "submit 3", command=showInfo).pack(side = RIGHT)


Button(frame2, text = "submit 1", command=showInfo).pack()
Button(frame2, text = "submit 2", command=showInfo).pack()
Button(frame2, text = "submit 3", command=showInfo).pack()


root.mainloop()

