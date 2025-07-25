import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    //const xsrfToken = sessionStorage.getItem('xsrf-token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
         // 'X-XSRF-TOKEN': xsrfToken ? JSON.parse(xsrfToken) : ''
        }
      });
    }
    return next.handle(req);
  }
}
