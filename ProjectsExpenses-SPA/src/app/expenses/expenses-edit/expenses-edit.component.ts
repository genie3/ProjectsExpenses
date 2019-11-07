import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Expense } from 'src/app/_model/expense';
import { Customer } from 'src/app/_model/customer';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_model/project';
import { CustomerService } from 'src/app/_services/customer.service';
import { ProjectService } from 'src/app/_services/project.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  editForm: FormGroup;

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
    private alertify: AlertifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.expense = data.expense;
    });
    this.loadCustomers();
    this.loadCustomersProject(this.expense.project.customerId);
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'MM/DD/YYYY',
      };
    this.editForm = this.formBuilder.group({
        id: this.expense.id,
        expenseDate: [new Date(this.expense.expenseDate), Validators.required],
        customerId: [this.expense.project.customerId, Validators.required],
        projectId: [this.expense.projectId, Validators.required],
        name: [this.expense.name, Validators.required],
        amount: [this.expense.amount, Validators.required],
        description: [this.expense.description, Validators.required]
      });

    this.onChange();
  }

  onChange() {
    this.editForm.get('customerId').valueChanges.subscribe( value => {
      this.loadCustomersProject(value);
    });
  }
  loadCustomers() {
    this.customerServive.getCustomers().subscribe(result => {
      this.customers = result;
     });
  }

  loadCustomersProject(customerId: number) {
    this.projectService.getCustomerProjects(customerId).subscribe(result => {
      this.customersProjects = result;
    }, () => { },
    () => {
      this.editForm.controls.projectId.patchValue(this.customersProjects[0].id);

    }
    );
  }

updateExpense() {
  // this.expenseServie.updateExpense(this.route.snapshot.params.id, this.expense).subscribe(next => {
  //   this.alertify.success('Expense updated succesfully');
  //   this.editForm.reset(this.expense);
  // }, error => {
  //   this.alertify.error(error);
  // });
  this.editForm.controls.customerId.disable();
  this.expense = new Expense(this.editForm.value);
  this.editForm.controls.customerId.enable();
  console.log(this.expense);
  // this.editForm.reset(this.expense);
}

unsavedChanges() {
  return this.editForm.dirty;
}
}
