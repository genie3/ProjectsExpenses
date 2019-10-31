using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ProjectsExpenses.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Data
{
    public class SeedData
    {
        public static void SeedAllData(DataContext context, UserManager<ApplicationUser> userManager)
        {
            SeedCustomers(context);
            SeedUsers(userManager);
        }
        public static void SeedCustomers(DataContext context)
        {
            if(!context.Customers.Any())
            {
                var customersData = System.IO.File.ReadAllText("Data/CustomersInitialData.json");
                var customers = JsonConvert.DeserializeObject<List<Customer>>(customersData);
                foreach (var customer in customers)
                {
                    context.Customers.Add(customer);
                }
                context.SaveChanges();
            }
        }

        public static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var usersData = System.IO.File.ReadAllText("Data/UsersInitialData.json");
                var users = JsonConvert.DeserializeObject<List<ApplicationUser>>(usersData);
                foreach (var user in users)
                {
                    userManager.CreateAsync(user, "password");
                }
             }

        }
    }
}
