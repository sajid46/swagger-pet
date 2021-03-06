import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BaseComponent } from './shared/components/base/base.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetSnackBarComponent } from './shared/components/pet-snack-bar/pet-snack-bar.component';
import { UserLoginComponent } from './shared/components/user-login/user-login.component';
import { UserSignupComponent } from './shared/components/user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseComponent,
    PetSnackBarComponent,
    UserLoginComponent,
    UserSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Pets App',
      maxAge: 45,
      logOnly: environment.production,
    }),

    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
