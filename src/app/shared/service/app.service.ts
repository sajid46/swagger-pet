import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://petstore.swagger.io/v2/user/';
  }

  saveUser(newUser: IUser) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //this.http.post(`${this.baseUrl}`, user);
    return this.http.post(this.baseUrl, newUser).pipe(
      tap((data) => console.log('Create User: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
