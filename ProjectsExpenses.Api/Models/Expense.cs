using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectsExpenses.API.Models
{
    public class Expense
    {
        public int ID { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
       
        [Required]
        [DataType(DataType.Date)]
        public DateTime ExpenseDate { get; set; }
        
        [Required]
        [Range(0,double.MaxValue)]
        [DataType(DataType.Currency)]
        public float Amount { get; set; }
        
        [StringLength(350)]
        public string Description { get; set; }
        
        [Required]
        public int ProjectID { get; set; }
        public virtual Project Project { get; set; }
    }
}
