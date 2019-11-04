import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/_model/expense';
import { Customer } from 'src/app/_model/customer';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_model/project';
import { CustomerService } from 'src/app/_services/customer.service';
import { ProjectService } from 'src/app/_services/project.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {
  expense: Expense;
  customers: Customer[];
  customersProjects: Project[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private route: ActivatedRoute,
    private customerServive: CustomerService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.expense = data.expense;
    });
    this.loadCustomers();
    this.loadCustomersProject(this.expense.project.customerId);
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'MM/DD/YYYY',
      value: this.expense.expenseDate
    };
    console.log(this.bsConfig);
  }
  loadCustomers() {
    this.customerServive.getCustomers().subscribe(result => {
      this.customers = result;
    });
  }

  loadCustomersProject(customerId: number) {
    this.projectService.getCustomerProjects(customerId).subscribe(result => {
      this.customersProjects = result;
    });
  }

  reloadProjects(customerId: number) {
    this.loadCustomersProject(customerId);
  }

updateExpense() {
  console.log(this.expense);
}

}
