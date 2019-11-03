using System;
using System.ComponentModel.DataAnnotations;

namespace ProjectsExpenses.API.Dtos
{
    public class ExpenseDetailDto
    {
        public int ID { get; set; }

        public string Name { get; set; }
       
        [DataType(DataType.Date)]
        public DateTime ExpenseDate { get; set; }
        
        [DataType(DataType.Currency)]
        public float Amount { get; set; }
        
        [StringLength(350)]
        public string Description { get; set; }
        
        [Required]
        public int ProjectID { get; set; }

        public virtual ProjectsListDto Project { get; set; }
    }
}