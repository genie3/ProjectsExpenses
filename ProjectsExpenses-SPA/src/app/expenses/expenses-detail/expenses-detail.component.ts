import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from 'src/app/_services/expense.service';
import { Expense } from 'src/app/_model/expense';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.css']
})
export class ExpensesDetailComponent implements OnInit {
expense: Expense;
  constructor(private expenseService: ExpenseService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadExpense();
  }

  loadExpense() {
    this.expenseService.getExpense(+this.route.snapshot.params['id']).subscribe((response: Expense) => {
      this.expense = response;
    }, error => {
      this.alertify.error(error);
    });
  }

}
