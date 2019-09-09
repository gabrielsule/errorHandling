  import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
  } from '@angular/common/http';
  import {
    Observable,
    throwError
  } from 'rxjs';
  import {
    Injectable
  } from '@angular/core';
  import {
    retry,
    catchError
  } from 'rxjs/operators';

  @Injectable({
    providedIn: 'root'
  })

  export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

      console.log('Interceptado');

      return next.handle(req)
        .pipe(
          retry(3),
          catchError((err: HttpErrorResponse) => {

            let errorMessage = '';

            if (err.error instanceof ErrorEvent) {
              errorMessage = `Error: ${err.message}`;
            } else {
              errorMessage = `Error Code: ${err.status} Message: ${err.message}`;
            }
            console.log(errorMessage);
            return throwError(errorMessage);
          })
        );
    }
  }
