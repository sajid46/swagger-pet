import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: string;
  saveUser(user: IUser) {
    // this.http.post(`${this.baseUrl}`, user);
  }

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://petstore.swagger.io/v2/user/';
  }
}
