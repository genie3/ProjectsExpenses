using System;
using System.ComponentModel.DataAnnotations;

namespace ProjectsExpenses.API.Dtos
{
    public class ExpenseDetailDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
       
        [DataType(DataType.Date)]
        [Required]
        public DateTime ExpenseDate { get; set; }
        
        [DataType(DataType.Currency)]
        [Required]
        public float Amount { get; set; }
        
        [StringLength(350)]
        [Required]
        public string Description { get; set; }
        
        [Required]
        public int ProjectId { get; set; }

        public virtual ProjectsListDto Project { get; set; }
    }
}