import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
// 
import {Connect_info } from '../models/connectinfo';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // connect_info() {
  //   throw new Error('Method not implemented.');
  // }
  isLoggedIn = true;
  token:any;
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }
  login(email: String, password: String): Observable<any>{
    return this.http.post<any>(this.env.API_URL + 'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {  
        this.storage.setItem('token.access_token', token.access_token)
        .then(
          () => {
            console.log('Token Stored');
            console.log(token)
          },
          error => console.error('Error storing item', error)
        );

        // this.token = token;
        // localStorage.setItem("token",token);
        this.isLoggedIn = true;
        console.log(token);
        return token;

      }),
    );
  }
  register(name: String, email: String, password: String, ): Observable<any> {
    return this.http.post<any>(this.env.API_URL + 'auth/register',
      {name: name, email: email, password: password,}
      ).pipe(
        tap(_ => this.log('register')),
        catchError(this.handleError('register', []))
      );
  }
  logout(): Observable<any>  {
    return this.http.get<any>(this.env.API_URL + 'auth/logout')
    .pipe(
      tap(_ => this.log('login')),
      catchError(this.handleError('login', []))
    );
  }
  // logout() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });
  //   return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
  //   .pipe(
  //     tap(data => {
  //       this.storage.remove("token");
  //       this.isLoggedIn = false;
  //       delete this.token;
  //       return data;
  //     })
  //   )
  // }
  user(): Observable<any>{
    return this.http.get<User>(this.env.API_URL + 'auth/user')
    .pipe(
      tap(user => {
        console.log(user)
        return user;
      })
    )
  }
  connect_info():Observable<any>{
    return this.http.get<Connect_info>(this.env.API_URL + 'auth/receive_infoconnect')
    .pipe(
      tap(connect_info => {
        console.log(connect_info)
        return connect_info;
      })
    )
  }
  get(endpoint: string): Observable<any> {
    // let options = {headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //  })  };
    return this.http.get<any>(this.env.API_URL +endpoint)
      .pipe(
        tap(data => console.log(this.env.API_URL +endpoint)),
        catchError(this.handleError('getData', []))
      );
  }


  post(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(this.env.API_URL +endpoint, data)
      .pipe(
        tap(data => {
          console.log(data)
        })
      )
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  reset(email: String) {
    return this.http.post(this.env.API_URL + 'password/create',
      {email: email}
    )
  }
}

  

  // register(name: String, email: String, password: String ) {
  //   return this.http.post(this.env.API_URL + 'auth/register',
  //     {name:name, email:email, password: password ,  }
    
  //     )
  // }
  // logout() {

  //   return this.http.get(this.env.API_URL + 'auth/logout')
  //   .pipe(
  //     tap(data => {
  //       this.storage.remove("token");
  //       this.isLoggedIn = false;
  //       delete this.token;
  //       return data;
  //     })
  //   )
  // }
  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });
  //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   )
  // }
  // getToken() {
  //   return this.storage.getItem('token').then(
  //     data => {
  //       this.token = data;
  //       if(this.token != null) {
  //         this.isLoggedIn=true;
  //       } else {
  //         this.isLoggedIn=false;
  //       }
  //     },
  //     error => {
  //       this.token = null;
  //       this.isLoggedIn=false;
  //     }
  //   );
  // }
