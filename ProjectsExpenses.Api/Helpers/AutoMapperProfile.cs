using AutoMapper;
using ProjectsExpenses.API.Dtos;
using ProjectsExpenses.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetsExpenses.API.Helpers
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Expense, ExpensesListDto>()
               //.ForMember(dest => dest.Project, opt => opt.MapFrom(src => src.Project.Name))
              // .ForMember(dest => dest.Customer, opt => opt.MapFrom(src => src.Project.Customer.Name))
               .ForMember(dest => dest.ExpenseDate, opt => opt.MapFrom(src => src.ExpenseDate.ToString("MM/dd/yyyy")));

            CreateMap<Customer, CustomersListDto>();
            CreateMap<Project, ProjectsListDto>()
                 .ForMember(dest => dest.Customer, opts => opts.Condition((src, dest, srcMember) => srcMember != null));

        }
    }
}
