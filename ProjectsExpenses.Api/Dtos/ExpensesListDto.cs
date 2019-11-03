using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Dtos
{
    public class ExpensesListDto
    {

        public int Id { get; set; }

        public string Name { get; set; }

        [DataType(DataType.Date)]
        public string ExpenseDate { get; set; }

        public int ProjectId { get; set; }

        public ProjectsListDto Project { get; set; }

        [DataType(DataType.Currency)]
        public float Amount { get; set; }


    }
}
