from tkinter import *

root = Tk()
root.geometry("500x400")

v1 = IntVar()
v2 = IntVar()
v3 = IntVar()

button1 = Checkbutton(root,text = "Hindi", variable = v1, onvalue = 1, offvalue=0, height=10, width=10)



button2 = Checkbutton(root,text = "Math", variable = v2, onvalue = 1, offvalue=0, height=10, width=10)


#button1.place(x = 100,y = 30)
#button2.place(x = 100,y = 60)

button1.pack(side = RIGHT)
button2.pack()

root.mainloop()

