import { PetDetailDialogComponent } from './../dialog/pet-detail/pet-detail-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IPet } from '../shared/model/pet.model';
import { PetFacade } from '../state/pet.facade';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pet-shell',
  templateUrl: './pet-shell.component.html',
  styleUrls: ['./pet-shell.component.scss'],
})
export class PetShellComponent extends BaseComponent implements OnInit {
  pets$: Observable<IPet[]>;
  showPetCreate: boolean = true;

  constructor(private dialog: MatDialog, private petFacade: PetFacade) {
    super();
  }

  ngOnInit(): void {
    this.petFacade.loadPets();
    this.pets$ = this.petFacade.pets$;
  }

  onPetDetailEventListener($event: IPet[]): void {
    this.dialog.open(PetDetailDialogComponent, { data: $event });
  }

  addPet(): void {
    this.showPetCreate = true;
  }

  onHideCreateForm(): void {
    this.showPetCreate = false;
  }
}
