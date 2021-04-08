import { IUser } from './../../model/user.model';
import { PetFacade } from './../../../modules/pet/state/pet.facade';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  newUserForm: FormGroup;
  iUser: IUser;

  constructor(
    private router: Router,
    private petFacade: PetFacade,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      fname: new FormControl('Sajid'),
      sname: new FormControl('Mahmood'),
      email: new FormControl('test@test.com'),
      phone: new FormControl('0208-0000000'),
      username: new FormControl('sajidm46'),
      password: new FormControl('password'),
    });
  }

  onSubmit(): void {
    this.saveUser();
  }
  saveUser() {
    this.iUser.firstName = this.newUserForm.value.fname;
    this.iUser.lastName = this.newUserForm.value.sname;
    this.iUser.email = this.newUserForm.value.email;
    this.iUser.phone = this.newUserForm.value.phone;
    this.iUser.username = this.newUserForm.value.username;
    this.iUser.password = this.newUserForm.value.password;
    this.iUser.userstatus = 0;

    this.appService.saveUser(this.iUser);
    // this.petFacade.saveUser(this.newUserForm);
  }

  cancel(): void {
    //this.newUserForm.reset();
  }

  openLogin(): void {
    this.router.navigate(['']);
  }
}
