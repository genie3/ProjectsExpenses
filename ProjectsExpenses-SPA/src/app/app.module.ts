import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExpenseService} from './_services/expense.service';
import { AuthService } from './_services/auth.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpensesDetailComponent } from './expenses/expenses-detail/expenses-detail.component';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { ExpensesListResolver } from './_resolvers/expenses-list.resolver';
import { ExpensesDetailResolver } from './_resolvers/expenses-detail.resolver';
import { ExpensesEditResolver } from './_resolvers/expenses-edit.resolver';






export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      ExpensesListComponent,
      ExpensesDetailComponent,
      ExpensesEditComponent,
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
      })
   ],
   providers: [
      ExpenseService,
      AuthService,
      ExpensesListResolver,
      ExpensesDetailResolver,
      ExpensesEditResolver,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
