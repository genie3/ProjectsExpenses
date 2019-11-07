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
            CreateMap<Expense, ExpensesListDto>();
            CreateMap<Customer, CustomersListDto>();
            CreateMap<Project, ProjectsListDto>();
            CreateMap<Expense, ExpenseDetailDto>();
            CreateMap<ExpenseDetailDto, Expense>()
                .ForMember(src => src.Project, opt => opt.Ignore());

        }
    }
}
