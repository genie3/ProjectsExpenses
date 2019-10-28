using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Models
{
    public class Customer
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual IEnumerable<Project> Projects { get; set; }

    }
}
