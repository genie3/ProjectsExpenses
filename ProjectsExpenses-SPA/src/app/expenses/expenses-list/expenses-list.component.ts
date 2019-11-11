import { Component, OnInit } from '@angular/core';
import { Expense } from '../../_model/expense';
import { ExpenseService } from '../../_services/expense.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[];
  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private alertify: AlertifyService
  ) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.expenses = data.expenses;
    });
  }

  deleteExpense(expense: Expense) {
    this.alertify.confirm(
      'Are you sure you want to delete expense: \n' + expense.name + '?',
      () => {
        this.expenseService.deleteExpense(expense.id).subscribe(() => {
          this.alertify.success(expense.name + ' has successfully been deleted');
          this.expenses = this.expenses.filter( e => e !== expense);
        }, () => {
          this.alertify.error('An error occurrd while deleting the expense');
        });
      }
    );
  }
}
