import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()                   
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        private alertService: AlertService,
        public loadingController: LoadingController,
        private authService:AuthService,
        private storage: NativeStorage,

    ) {}
    loaderToShow: any;
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
        if (token) {
            request = request.clone({
            setHeaders: {
                'Authorization': "Bearer "+token 
            }
            // headers: new HttpHeaders({'Authorization': token})
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
            setHeaders: {
                'content-type': 'application/json'
            }
            });
        }
        request = request.clone({
            headers: request.headers.set('content-type', 'application/json')
        });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
                console.log(request);
            }
            return event;
            }),
            catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                if (error.error.success === false) {
                this.alertService.presentToast('خطأ في تسجيل الدخول');
                } else {
                this.router.navigate(['login']);
                }
            }
            return throwError(error);
            }));
    }
    showLoader() {
        this.loaderToShow = this.loadingController.create({
          message: 'Processing Server Request'
        }).then((res) => {
          res.present();
    
          res.onDidDismiss().then((dis) => {
            console.log('Loading dismissed!');
          });
        });
        this.hideLoader();
      }
    
      hideLoader() {
          this.loadingController.dismiss();
      }
    
}
