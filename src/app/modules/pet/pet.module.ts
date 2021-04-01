import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { PetReducer } from './state/pet.reducer';
import { PetEffects } from './state/pet.effect';
import { PetComponent } from './pet.component';
import { PetShellComponent } from './pet-shell/pet-shell.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';

const routes: Routes = [{ path: '', component: PetComponent }];

@NgModule({
  declarations: [
    PetComponent,
    PetShellComponent,
    PetListComponent,
    PetCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PetEffects]),
    StoreModule.forFeature('pets', PetReducer),
    MaterialModule,
  ],
})
export class PetModule {}
