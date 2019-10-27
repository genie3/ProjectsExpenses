using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjetsExpenses.API.Dtos
{
    public class ExpensesListDTO
    {

        public int Id { get; set; }

        [DataType(DataType.Date)]
        public string ExpenseDate { get; set; }
        public string Customer { get; set; }
        public string Project { get; set; }
        public float Amount { get; set; }


    }
}
