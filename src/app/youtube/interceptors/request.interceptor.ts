import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const modified: HttpRequest<unknown> = request.clone({
            setParams: { key: environment.api_key}
        });
        return next.handle(modified)
            .pipe(
                retry(3),
                catchError((error: HttpErrorResponse) => {
                    console.log('error ocured');
                    return throwError(error);
                })
            );
    }
}
