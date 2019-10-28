using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Dtos
{
    public class ProjectsListDto
    {
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }
        public int CustomerID { get; set; }
        public CustomersListDto Customer { get; set; }
    }
}
