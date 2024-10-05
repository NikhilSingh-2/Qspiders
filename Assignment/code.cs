using System;
using System.Linq;
using System.Xml.Linq;

class Program
{
    static void Main()
    {
        // Create XML data
        XElement students = new XElement("Students",
            new XElement("Student",
                new XElement("SRollno", 1),
                new XElement("SName", "John"),
                new XElement("SAddress", "123 Main St"),
                new XElement("SFees", 1000)
            ),
            new XElement("Student",
                new XElement("SRollno", 2),
                new XElement("SName", "Alice"),
                new XElement("SAddress", "456 Elm St"),
                new XElement("SFees", 1500)
            )
        );

        Console.WriteLine(students);
    }
}
