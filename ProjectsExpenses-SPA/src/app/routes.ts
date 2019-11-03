import { Routes } from '@angular/router';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ExpensesDetailComponent } from './expenses/expenses-detail/expenses-detail.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'expenses', component: ExpensesListComponent},
        {path: 'expenses/:id', component: ExpensesDetailComponent},
        {path: 'customers', component: CustomersListComponent},
        {path: 'projects', component: ProjectsListComponent},
    ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
