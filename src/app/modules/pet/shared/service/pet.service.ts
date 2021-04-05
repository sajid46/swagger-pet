import { DialogData } from './../../dialog/pet-detail/pet-detail-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IPet } from '../model/pet.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  // });

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://petstore.swagger.io/v2/pet/';
  }

  loadPets(): Observable<IPet[]> {
    var pets = this.http.get<IPet[]>(
      `${this.baseUrl}findByStatus?status=available`
    );
    return pets.pipe(
      map((messages) =>
        messages.sort((a1: IPet, a2: IPet) => {
          if (a1.id < a2.id) return -1;
          if (a1.id > a2.id) return 1;
          return 0;
        })
      )
    );
  }

  // loadPendingPets(): Observable<IPet[]> {
  //   var pets = this.http.get<IPet[]>(
  //     `${this.baseUrl}findByStatus?status=pending`
  //   );
  //   return pets;
  // }
  // loadSoldPets(): Observable<IPet[]> {
  //   var pets = this.http.get<IPet[]>(`${this.baseUrl}findByStatus?status=sold`);
  //   return pets;
  // }

  loadPet(id: number): Observable<IPet[]> {
    return this.http.get<IPet[]>(`${this.baseUrl}${id}`);
  }

  uploadImage(pet: DialogData, image: string, petId: number): boolean {
    var body = {
      id: petId,
      category: {
        id:
          pet.category == null || pet.category.id == null
            ? '1'
            : pet.category.id.toString(),
        name:
          pet.category == null || pet.category.name == null
            ? 'string'
            : pet.category.name,
      },
      name: pet.name,
      photoUrls: [image],
      tags: [
        {
          id:
            pet.tags == null || pet.tags.id == null
              ? '1'
              : pet.tags[0].id.toString(),
          name:
            pet.tags == null || pet.tags.name == null
              ? 'string'
              : pet.tags[0].name,
        },
      ],
      status: pet.status,
    };

    try {
      this.http.put(`${this.baseUrl}`, body).subscribe((event) => {
        console.log(event);
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  addNewPet(pet): boolean {
    {
      var body = {
        id: pet.id,
        category: {
          id: '1',
          name: 'string',
        },
        name: pet.name,
        photoUrls: [pet.image],
        tags: [
          {
            id: '1',
            name: 'string',
          },
        ],
        status: pet.status,
      };
      try {
        this.http.post(`${this.baseUrl}`, body).subscribe((event) => {
          console.log(event);
        });
        return true;
      } catch (error) {
        return false;
      }
    }
  }
}
