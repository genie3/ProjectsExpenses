import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import {ExpenseService} from './_services/expense.service';
import { AuthService } from './_services/auth.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { appRoutes } from './routes';






@NgModule({
   declarations: [
      AppComponent,
      ExpensesListComponent,
      CustomersListComponent,
      ProjectsListComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
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
