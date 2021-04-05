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

export const loadPet = createAction('[Pets] Load Pet', props<{ id: number }>());
export const loadPetSuccess = createAction(
  '[Pets] Load Pet Success',
  props<{ pet: IPet[] }>()
);

export const loadPetFail = createAction(
  '[Pets] Load Pet Failed',
  props<{ error: string }>()
);
// export const loadPendingPets = createAction('[Pets] Load Pending Pets');

// export const loadPendingPetsSuccess = createAction(
//   '[Pets] Load Pending Pets Success',
//   props<{ pets: IPet[] }>()
// );

// export const loadPendingPetsFail = createAction(
//   '[Pets] Load Pending Pets Failed',
//   props<{ error: string }>()
// );

// export const loadSoldPets = createAction('[Pets] Load Sold Pets');

// export const loadSoldPetsSuccess = createAction(
//   '[Pets] Load Sold Pets Success',
//   props<{ pets: IPet[] }>()
// );

// export const loadSoldPetsFail = createAction(
//   '[Pets] Load Sold Pets Failed',
//   props<{ error: string }>()
// );
