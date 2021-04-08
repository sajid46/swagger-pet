import { UserSignupComponent } from './shared/components/user-signup/user-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './shared/components/user-login/user-login.component';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./modules/pet/pet.module').then((m) => m.PetModule),
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
  },
  { path: 'signup', component: UserSignupComponent },
  {
    path: 'pet',
    loadChildren: () =>
      import('./modules/pet/pet.module').then((m) => m.PetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
