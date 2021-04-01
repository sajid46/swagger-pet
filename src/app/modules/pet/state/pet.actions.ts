import { createAction, props } from '@ngrx/store';
import { IPet } from '../shared/model/pets.model';

export const loadPets = createAction('[Pets] Load Pets');

export const loadPetsSuccess = createAction(
  '[Pets] Load Pets Success',
  props<{ pets: any[] }>()
);

export const loadPetsFail = createAction(
  '[Pets] Load Pets Failed',
  props<{ error: string }>()
);
