import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  startTime: number;

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.startTime = Date.now();
    console.log('Request URL: ' + req.url);

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Response: ' + JSON.stringify(event.body));
          console.log('Duration: ' + (Date.now() - this.startTime) + 'ms');
          return event;
        }
      })
    );
  }
}
