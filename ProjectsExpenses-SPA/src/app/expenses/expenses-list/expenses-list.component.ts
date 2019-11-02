import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Expense } from '../../_model/expense';
import { ExpenseService } from '../../_services/expense.service';
import { AlertifyService } from 'src/app/_services/alertify.service';


@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  expenses: Expense[];
  constructor( private expenseService: ExpenseService, private alertify: AlertifyService) { }
  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe((result: Expense[]) => {
      this.expenses = result;
    }, error => {
      this.alertify.error(error);
    });
  }

}
