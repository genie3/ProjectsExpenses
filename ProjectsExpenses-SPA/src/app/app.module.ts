import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExpenseService} from './_services/expense.service';
import { AuthService } from './_services/auth.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ExpensesDetailComponent } from './expenses/expenses-detail/expenses-detail.component';




export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      ExpensesDetailComponent,
      ExpensesListComponent,
      CustomersListComponent,
      ProjectsListComponent,
      NavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth/']
         }
      }),
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
