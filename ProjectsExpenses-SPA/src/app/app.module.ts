import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';

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
import { CustomerService } from './_services/customer.service';
import { ProjectService } from './_services/project.service';
import { ExpenseService } from './_services/expense.service';
import { AuthService } from './_services/auth.service';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { CustomersListResolver } from './_resolvers/customers-list.resolver';
import { ProjectsListResolver } from './_resolvers/projects-list.resolver';
import { ExpensesAddComponent } from './expenses/expenses-add/expenses-add.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    ExpensesDetailComponent,
    ExpensesEditComponent,
    ExpensesAddComponent,
    CustomersListComponent,
    ProjectsListComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
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
    CustomerService,
    ProjectService,
    ExpenseService,
    AuthService,
    ExpensesListResolver,
    ExpensesDetailResolver,
    ExpensesEditResolver,
    CustomersListResolver,
    ProjectsListResolver,
    AuthGuard,
    PreventUnsavedChanges,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
