import { Routes } from '@angular/router';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ExpensesDetailComponent } from './expenses/expenses-detail/expenses-detail.component';
import { ExpensesDetailResolver } from './_resolvers/expenses-detail.resolver';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';
import { ExpensesEditResolver } from './_resolvers/expenses-edit.resolver';
import { ExpensesListResolver } from './_resolvers/expenses-list.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'expenses', component: ExpensesListComponent,
            resolve: {expenses: ExpensesListResolver}},
        {path: 'expenses/:id', component: ExpensesDetailComponent,
            resolve: {expense: ExpensesDetailResolver}},
        {path: 'expenses/edit/:id', component: ExpensesEditComponent,
            resolve: {expense: ExpensesEditResolver},
            canDeactivate: [PreventUnsavedChanges]},
        {path: 'customers', component: CustomersListComponent},
        {path: 'projects', component: ProjectsListComponent},
    ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
