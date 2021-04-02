import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPet } from '../model/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://petstore.swagger.io/';
  }

  loadPets(): Observable<IPet[]> {
    var pets = this.http.get<IPet[]>(
      `${this.baseUrl}v2/pet/findByStatus?status=available`
    );
    return pets;
  }

  loadPendingPets(): Observable<IPet[]> {
    var pets = this.http.get<IPet[]>(
      `${this.baseUrl}v2/pet/findByStatus?status=pending`
    );
    return pets;
  }
  loadSoldPets(): Observable<IPet[]> {
    var pets = this.http.get<IPet[]>(
      `${this.baseUrl}v2/pet/findByStatus?status=sold`
    );
    return pets;
  }

  loadPet(id: number): Observable<IPet[]> {
    var pets = this.http.get<IPet[]>(`${this.baseUrl}v2/pet/${id}`);
    return pets;
  }
}
