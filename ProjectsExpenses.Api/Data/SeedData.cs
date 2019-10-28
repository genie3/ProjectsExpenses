using Newtonsoft.Json;
using ProjectsExpenses.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Data
{
    public class SeedData
    {
        public static void SeedCustomers(DataContext context)
        {
            if(!context.Customers.Any())
            {
                var customersData = System.IO.File.ReadAllText("Data/CustomersSeedData.json");
                var customers = JsonConvert.DeserializeObject<List<Customer>>(customersData);
                foreach (var customer in customers)
                {
                    context.Customers.Add(customer);
                }
                context.SaveChanges();
            }
        }
    }
}
