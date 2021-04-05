import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PetSnackBarComponent } from 'src/app/shared/components/pet-snack-bar/pet-snack-bar.component';
import { IPet } from '../../shared/model/pet.model';
import { PetService } from '../../shared/service/pet.service';
import { PetFacade } from '../../state/pet.facade';

export interface DialogData extends IPet {}

@Component({
  selector: 'app-pet-detail-dialog',
  templateUrl: './pet-detail-dialog.component.html',
  styleUrls: ['./pet-detail-dialog.component.scss'],
})
export class PetDetailDialogComponent implements OnInit {
  selectedFile: File;
  imageUrl: any;
  ShowUploadButton: boolean;
  pets$: Observable<IPet[]>;

  constructor(
    private http: HttpClient,
    private petService: PetService,
    public dialogRef: MatDialogRef<PetDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private petFacade: PetFacade
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.data.photoUrls[0];
  }

  closeDialog(): void {
    this.dialogRef.close();
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

  onUpload(id: number): void {
    // const uploadData = new FormData();
    // uploadData.append('image', this.selectedFile, this.selectedFile.name);
    // this.petService.uploadImage(uploadData, id);
    if (this.imageUrl) {
      var r = this.imageUrl;
      this.ShowUploadButton = false;
      const uploaded = this.petService.uploadImage(
        this.data,
        this.imageUrl,
        id
      );

      if (uploaded == true) {
        this.openSnackBar();
        this.petFacade.loadPets();
        this.pets$ = this.petFacade.pets$;
        this.closeDialog();
      }
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PetSnackBarComponent, {
      duration: 5000,
    });
  }
}
