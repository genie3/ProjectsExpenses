import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          return throwError(error.statusText);
        }
        if (error instanceof HttpErrorResponse) {
          const appError = error.headers.get('Application-Error');
          if (appError) {
            return throwError(appError);
          }
          const srvError = error.error;
          let modalStateErrors = '';
          if (srvError.errors && typeof srvError.errors === 'object') {
            for (const key in srvError.errors) {
              if (srvError.errors[key]) {
                modalStateErrors += srvError.errors[key] + '\n';
              }
            }
          }
          return throwError(modalStateErrors || srvError || 'Server Error');
        }
      })
    );
  }
}
export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
