import { PetFacade } from './../state/pet.facade';
import { PetService } from './../shared/service/pet.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  AppDateAdapter,
  DATE_FORMAT_GB,
} from 'src/app/shared/helper/date-format';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetSnackBarComponent } from 'src/app/shared/components/pet-snack-bar/pet-snack-bar.component';
import { IPet } from '../shared/model/pet.model';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_GB },
  ],
})
export class PetCreateComponent extends BaseComponent implements OnInit {
  newPetForm: FormGroup;
  @Output() hideCreateForm = new EventEmitter();
  checked: boolean;
  selectedFile: File;
  startDate: Date = new Date();
  imageUrl: any;
  ShowUploadButton: boolean;
  data: { id: number; name: string; image: string; status: string };
  pets$: Observable<IPet[]>;
  id: number;
  pet$: Observable<IPet[]>;
  petFoundError: Observable<string>;
  petname: string;
  petsLength: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private _snackBar: MatSnackBar,
    private petFacade: PetFacade
  ) {
    super();
  }

  ngOnInit(): void {
    this.newPetForm = this.createFormGroup();
    this.checked = true;
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      dob: new FormControl(new Date()),
      status: new FormControl('true'),
      imageUrl: new FormControl(),
    });
  }

  onSubmit(): void {
    this.saveNewPet();
  }
  cancel(): void {
    this.hideCreateForm.emit();
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];

    if (event.target.files) {
      var freader = new FileReader();
      freader.readAsDataURL(event.target.files[0]);
      freader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.ShowUploadButton = true;
      };
    }
  }

  saveNewPet(): void {
    var r = this.imageUrl;
    this.ShowUploadButton = false;
    this.id = Math.floor(Math.random() * 10000000);

    this.petFacade.loadPets();

    do {
      this.pets$ = this.petFacade.pets$.pipe(
        takeUntil(this.unsubscribe$),
        map((pets) => pets.filter((pet) => pet.id === this.id))
      );

      this.pets$.subscribe((p) => (this.petsLength = p.length));
    } while (this.petsLength !== 0);

    this.data = {
      id: this.id,
      name: this.newPetForm.value['name'],
      image: this.imageUrl,
      status: this.newPetForm.value['status'] == 'true' ? 'available' : 'sold',
    };

    if (this.petsLength === 0) {
      const added = this.petService.addNewPet(this.data);
      if (added == true) {
        this.openSnackBar();
        this.petFacade.loadPets();
        this.pets$ = this.petFacade.pets$;
        this.hideCreateForm.emit();
      }
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PetSnackBarComponent, {
      duration: 5000,
    });
  }
}
