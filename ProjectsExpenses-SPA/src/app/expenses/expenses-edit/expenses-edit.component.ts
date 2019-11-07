import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Expense } from 'src/app/_model/expense';
import { Customer } from 'src/app/_model/customer';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_model/project';
import { CustomerService } from 'src/app/_services/customer.service';
import { ProjectService } from 'src/app/_services/project.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ExpenseService } from 'src/app/_services/expense.service';
import { AlertifyService } from 'src/app/_services/alertify.service';



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

  @ViewChild('editForm', { static: true }) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }


  constructor(
    private route: ActivatedRoute,
    private expenseServie: ExpenseService,
    private customerServive: CustomerService,
    private projectService: ProjectService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.expense = data.expense;
    });
    this.loadCustomers();
    this.loadCustomersProject(this.expense.project.customerId);
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'MM/DD/YYYY'
      };
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
     this.expense.projectId = this.expense.project.id;
     this.expense.project.customerId = customerId;
     this.editForm.control.markAsDirty();
    }

updateExpense() {
  // this.expenseServie.updateExpense(this.route.snapshot.params.id, this.expense).subscribe(next => {
  //   this.alertify.success('Expense updated succesfully');
  //   this.editForm.reset(this.expense);
  // }, error => {
  //   this.alertify.error(error);
  // });
  console.log(this.expense);
  this.editForm.reset(this.expense);
}

}
