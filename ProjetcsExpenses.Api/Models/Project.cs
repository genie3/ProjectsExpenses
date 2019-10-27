using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetsExpenses.API.Models
{
    public class Project
    {
        public int ID { get; set; }
       
        [Required]
        public string Name { get; set; }

        public int CustomerID { get; set; }

        public Customer Customer { get; set; }

        public IEnumerable<Expense> Expenses { get; set; }
    }
}
