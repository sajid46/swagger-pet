import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { IPet } from '../shared/model/pet.model';
import { PetService } from '../shared/service/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  @Input() pets$: Observable<IPet[]>;
  @Output() petDetailEvent = new EventEmitter<IPet[]>();

  constructor() {}

  viewDetails(event: IPet[]): void {
    this.petDetailEvent.emit(event);
  }
}
