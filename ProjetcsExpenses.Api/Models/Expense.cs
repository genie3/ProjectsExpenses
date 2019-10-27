using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetsExpenses.API.Models
{
    public class Expense
    {
        public int ID { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
       
        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = false)]
        public DateTime ExpenseDate { get; set; }
        
        [Required]
        [Range(0,double.MaxValue)]
        public float Amount { get; set; }
        
        [StringLength(350)]
        public string Description { get; set; }
        
        [Required]
        public int ProjectID { get; set; }
        public Project Project { get; set; }
    }
}
