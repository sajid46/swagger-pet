import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { IPet } from '../shared/model/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  @Input() pets$: Observable<IPet[]>;
  @Output() petDetailEvent = new EventEmitter<IPet[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pets2$: Observable<any[]>;

  constructor() {}

  viewDetails(event: IPet[]): void {
    this.petDetailEvent.emit(event);
  }
}
