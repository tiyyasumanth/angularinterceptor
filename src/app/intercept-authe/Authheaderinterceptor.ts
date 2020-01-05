import { Injectable } from "@angular/core";
import {HttpInterceptor, HttpErrorResponse} from "@angular/common/http"
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

//Here every request will be attached with headers.


@Injectable()
export class Authheader implements HttpInterceptor{
    intercept(req: import("@angular/common/http").HttpRequest<any>, 
    next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        //intercept code
        //Add headers to all http request
        const authed="test heder";
        const requ=req.clone({setHeaders:{Authorization:authed}})
        
        //handeling global error
        return next.handle(requ).pipe(catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse){
        console.log(error);
        return throwError(error);
       }
   
}