from tkinter import *

root = Tk()
root.geometry("500x400")


#text_label = Label(root, text = "SRC COMPUTER EDUCATION LAXMI NAGAR")
#text_label.place(x = 100, y = 20)

Label(root, text = "SRC COMPUTER EDUCATION LAXMI NAGAR").place(x = 100, y = 20)

Button(root, text="submit").place(x=100, y = 50)

Entry(root, width="40").place(x = 100, y = 70)



v = IntVar()


Radiobutton(root, text = "Male", variable = v, value="Male").place(x=100,y=100)
Radiobutton(root, text = "Female", variable = v, value="Female").place(x=100,y=130)






root.mainloop()

