using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Dtos
{
    public class ProjectsListDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public int CustomerId { get; set; }
        public CustomersListDto Customer { get; set; }
    }
}
