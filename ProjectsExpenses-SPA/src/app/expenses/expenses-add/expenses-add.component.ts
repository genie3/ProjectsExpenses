import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_model/customer';
import { Project } from 'src/app/_model/project';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from 'src/app/_services/expense.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { ProjectService } from 'src/app/_services/project.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Expense } from 'src/app/_model/expense';

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html',
  styleUrls: ['./expenses-add.component.css']
})
export class ExpensesAddComponent implements OnInit {
  customers: Customer[];
  customersProjects: Project[];
  bsConfig: Partial<BsDatepickerConfig>;
  addForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseServie: ExpenseService,
    private customerServive: CustomerService,
    private projectService: ProjectService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadCustomers();
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'MM/DD/YYYY'
    };
    this.addForm = this.formBuilder.group({
      expenseDate: [new Date(), Validators.required],
      customerId: [null, Validators.required],
      projectId: [null, Validators.required],
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      description: ['', Validators.required]
    });

    this.onChange();
  }

  onChange() {
    this.addForm.get('customerId').valueChanges.subscribe(value => {
      this.loadCustomersProject(value);
    });
  }
  loadCustomers() {
    this.customerServive.getCustomers().subscribe(result => {
      this.customers = result;
    });
  }

  loadCustomersProject(customerId: number) {
      this.projectService.getCustomerProjects(customerId).subscribe(
        result => {
          this.customersProjects = result;
        },
        () => {},
        () => {
          this.addForm.controls.projectId.patchValue(
            this.customersProjects[0].id
          );
        }
      );
  }

  addExpense() {
    this.addForm.controls.customerId.disable();
    const expense = new Expense(this.addForm.value);
    this.expenseServie.addExpense(expense).subscribe(
      () => {
        this.alertify.success('Expense created succesfully');
        this.addForm.controls.customerId.enable();
        this.addForm.markAsUntouched();
        this.addForm.markAsPristine();
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/expenses/']);
      }
    );
  }
}
