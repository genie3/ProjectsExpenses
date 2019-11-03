import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Expense } from '../_model/expense';
import { ExpenseService } from '../_services/expense.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()

export class ExpensesListResolver implements Resolve<Expense[]> {

    constructor( private expenseService: ExpenseService,
                 private alertify: AlertifyService,
                 private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Expense[]> {
        return this.expenseService.getExpenses().pipe(
            catchError( () => {
                this.alertify.error('Problem Retrieving Data');
                this.router.navigate(['/expenses']);
                return of(null);
            })
        );
    }
}
