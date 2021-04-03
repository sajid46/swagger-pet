import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  AppDateAdapter,
  DATE_FORMAT_GB,
} from 'src/app/shared/helper/date-format';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_GB },
  ],
})
export class PetCreateComponent implements OnInit {
  contactForm: FormGroup;
  @Output() hideCreateForm = new EventEmitter();
  checked: boolean;
  selectedFile: File;
  startDate: Date = new Date();

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.createFormGroup();
    this.checked = true;
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      available: new FormControl(),
    });
  }

  onSubmit(): void {
    // this.hideCreateForm.emit();
  }
  cancel(): void {
    this.hideCreateForm.emit();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http
      .post('my-backend.com/file-upload', uploadData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        console.log(event); // handle event here
      });
  }
}
