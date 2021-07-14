import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './env.service';
import{AuthService} from './auth.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Donations_info } from 'src/app/models/donations';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  headers = new HttpHeaders();
  isLoggedIn = false;

  constructor(
    private http : HttpClient,
    private env: EnvService,
    private authService: AuthService,
    private storage: NativeStorage,
    ) { }

  makeGet(endpoint: string): Observable<any> {
    // let options = {headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //  })  };
    return this.http.get<any>(this.env.API_URL +endpoint)
      .pipe(
        tap(data => console.log(this.env.API_URL +endpoint)),
        catchError(this.handleError('getData', []))
      );
  }
  makePost(endpoint: string, clothes:String, furniture: String): Observable<any> {
    // let options = {headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //  })  };
    return this.http.post<any>(this.env.API_URL +endpoint,{ clothes:clothes, furniture:furniture})
    .pipe(
      tap(data => console.log(this.env.API_URL +endpoint))
    )
  }
  post(endpoint: string, data: any): Observable<any> {
    // let options = {headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //  })  };
    return this.http.post<any>(this.env.API_URL +endpoint,data)
    .pipe(
      tap(data => console.log(this.env.API_URL +endpoint))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }



    // token = this.authService.token;
  //   token=this.storage.getItem('token')

  // public makePost( endpoint : string, data : any) {
  //   let options = {headers: new HttpHeaders({ 
  //    // 'Authorization': "Bearer "+ this.storage.getItem('token'),
  //    'Authorization': "Bearer "+ this.authService.token.access_token,
  //     'Content-Type': 'application/json',
  //    })  };
  //   return this.http.post(endpoint,
  //   data, options).pipe(tap(
  //    res =>{
  //      console.log(res);
  //    },
  //    err => {
  //      console.log(err.message);
  //    }
  //   )
  //  );
  // }
  
  

  // public makeGet( endpoint : string) {
  //   const headers = new HttpHeaders({
  //    // 'Authorization': "Bearer "+this.token
  //   });
  //   return this.http.get<any>(this.env.API_URL + endpoint, { headers: headers })  
  //   .pipe(
  //     tap(
  //       data => {
  //       return data
  //       }
  //     )
  //   )
  // }


  // public getHeaders(authenticated : boolean){
  //   let headers = new Headers();
  //   let token = localStorage.getItem('token');
  //   headers.append( 'Content-Type', 'application/json' );
  //   if ( authenticated ) {
  //     headers.append( 'Authorization', token);
  //   }
  //   return headers;
  // }
}
