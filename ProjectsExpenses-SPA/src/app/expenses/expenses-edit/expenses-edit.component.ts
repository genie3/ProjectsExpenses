import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/_model/expense';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {

  expense: Expense;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.expense = data.expense;
    });
  }

}
