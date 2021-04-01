import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://petstore.swagger.io/';
  }

  loadPets(): Observable<any[]> {
    var pets = this.http.get<any[]>(
      `${this.baseUrl}v2/pet/findByStatus?status=available&status=sold&status=pending`
    );
    return pets;
  }

  loadPet(id: number): Observable<any[]> {
    var pets = this.http.get<any[]>(`${this.baseUrl}v2/pet/${id}`);
    return pets;
  }
}
