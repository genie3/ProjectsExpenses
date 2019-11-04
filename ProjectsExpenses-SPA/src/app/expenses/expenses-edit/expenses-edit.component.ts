import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/_model/expense';
import { Customer } from 'src/app/_model/customer';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_model/project';
import { CustomerService } from 'src/app/_services/customer.service';
import { ProjectService } from 'src/app/_services/project.service';
import { formatDate } from '@angular/common';
import { toInteger } from 'src/app/_helpers/ng-utils';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {
  expense: Expense;
  customers: Customer[];
  customersProjects: Project[];
  startDate: any;
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
    this.setStartDate();
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

  setStartDate() {
    const date = formatDate(this.expense.expenseDate, 'yyyy/MM/dd', 'en_US');
    const dateParts = date.toString().trim().split('/');
    this.startDate = { year: toInteger(dateParts[0]) , month: toInteger(dateParts[1]), day: toInteger(dateParts[2])};

  }
updateExpense() {
  console.log(this.expense);
}

}
