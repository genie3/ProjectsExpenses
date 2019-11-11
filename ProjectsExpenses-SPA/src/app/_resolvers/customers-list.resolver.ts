import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { Customer } from '../_model/customer';
import { CustomerService } from '../_services/customer.service';

@Injectable()

export class CustomersListResolver implements Resolve<Customer[]> {

    constructor( private customerService: CustomerService,
                 private alertify: AlertifyService,
                 private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Customer[]> {
        return this.customerService.getCustomers().pipe(
            catchError( () => {
                this.alertify.error('Problem Retrieving Data');
                this.router.navigate(['/customers']);
                return of(null);
            })
        );
    }
}
