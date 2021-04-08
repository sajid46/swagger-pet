import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  newUserLoginForm: FormGroup;
  isUserExistNo: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newUserLoginForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(): void {
    this.isUserExistNo = true;
    this.router.navigate(['pet']);
  }
  saveUser() {}

  cancel(): void {
    // this.newUserLoginForm.reset();
  }

  inputChane(): void {
    this.isUserExistNo = false;
  }

  openSignup(): void {
    this.router.navigate(['/signup']);
  }
}
