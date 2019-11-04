import { Component, OnInit } from '@angular/core';
import { Expense } from '../../_model/expense';
import { ExpenseService } from '../../_services/expense.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  expenses: Expense[];
  constructor( private expenseService: ExpenseService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.expenses = data.expenses;
    });
  }
}
