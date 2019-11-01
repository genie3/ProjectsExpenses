import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Expense } from '../../_model/expense';
import { ExpenseService } from '../../_services/expense.service';


@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
