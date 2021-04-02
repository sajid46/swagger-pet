import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/shared/service/image.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
})
export class PetCreateComponent implements OnInit {
  contactForm: FormGroup;
  @Output() hideCreateForm = new EventEmitter();
  checked: boolean;
  selectedFile: File;

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
