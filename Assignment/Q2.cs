using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Define the class representing the table
        class Product
        {
            public string PID { get; set; }
            public string PName { get; set; }
            public int PPrice { get; set; }
            public int PWeight { get; set; }
        }

        // Create a list of products
        List<Product> products = new List<Product>
        {
            new Product { PID = "1001", PName = "Product 1", PPrice = 50, PWeight = 10 },
            new Product { PID = "1002", PName = "Product 2", PPrice = 70, PWeight = 15 },
            new Product { PID = "1003", PName = "Product 3", PPrice = 100, PWeight = 20 }
        };

        // LINQ query to select all products
        var query = from product in products
                    select product;

        // Display results
        Console.WriteLine("Product Information:");
        foreach (var product in query)
        {
            Console.WriteLine($"PID: {product.PID}, Name: {product.PName}, Price: {product.PPrice}, Weight: {product.PWeight}");
        }
    }
}
