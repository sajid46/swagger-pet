import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  id: number;
  name: string;
  status: string;
  photoUrls: string;
}

@Component({
  selector: 'app-pet-detail-dialog',
  templateUrl: './pet-detail-dialog.component.html',
  styleUrls: ['./pet-detail-dialog.component.scss'],
})
export class PetDetailDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PetDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
