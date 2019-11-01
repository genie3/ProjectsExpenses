import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import {ExpenseService} from './_services/expense.service';
import { AuthService } from './_services/auth.service';

import { AppComponent } from './app.component';
import {ExpensesListComponent} from './expenses/expenses-list/expenses-list.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
   declarations: [
      AppComponent,
      ExpensesListComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      MatTableModule,
      MatSortModule
   ],
   providers: [
      ExpenseService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
