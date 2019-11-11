import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Expense } from '../_model/expense';
import { ExpenseService } from '../_services/expense.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { Project } from '../_model/project';
import { ProjectService } from '../_services/project.service';

@Injectable()

export class ProjectsListResolver implements Resolve<Project[]> {

    constructor( private projectService: ProjectService,
                 private alertify: AlertifyService,
                 private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Project[]> {
        return this.projectService.getProjects().pipe(
            catchError( () => {
                this.alertify.error('Problem Retrieving Data');
                this.router.navigate(['/projects']);
                return of(null);
            })
        );
    }
}
