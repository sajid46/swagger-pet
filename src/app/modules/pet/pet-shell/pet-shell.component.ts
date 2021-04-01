import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IPet } from '../shared/model/pet.model';
import { PetFacade } from '../state/pet.facade';

@Component({
  selector: 'app-pet-shell',
  templateUrl: './pet-shell.component.html',
  styleUrls: ['./pet-shell.component.scss'],
})
export class PetShellComponent extends BaseComponent implements OnInit {
  pets$: Observable<IPet[]>;

  constructor(private petFacade: PetFacade) {
    super();
  }

  ngOnInit(): void {
    this.petFacade.loadPets();
    this.pets$ = this.petFacade.pets$;
  }
}
