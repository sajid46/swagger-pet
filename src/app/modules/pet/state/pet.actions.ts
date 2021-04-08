import { FormGroup } from '@angular/forms';
import { createAction, props } from '@ngrx/store';
import { IPet } from '../shared/model/pet.model';

export const loadPets = createAction('[Pets] Load Pets');

export const loadPetsSuccess = createAction(
  '[Pets] Load Pets Success',
  props<{ pets: IPet[] }>()
);

export const loadPetsFail = createAction(
  '[Pets] Load Pets Failed',
  props<{ error: string }>()
);

export const saveUser = createAction(
  '[Pets] Load Pets Failed',
  props<{ newUserForm: FormGroup }>()
);
