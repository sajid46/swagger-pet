import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './modules/pet/pet.component';
import { PetListComponent } from './modules/pet/pet-list/pet-list.component';
import { PetContainerComponent } from './modules/pet/pet-container/pet-container.component';
import { PetCreateComponent } from './modules/pet/pet-create/pet-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BaseComponent } from './shared/components/base/base.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    PetContainerComponent,
    PetCreateComponent,
    NavbarComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'XeRates App',
      maxAge: 45,
      logOnly: environment.production,
    }),
    MatIconModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
