import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as AppState from '../../../shared/state/app.state';
import { IPet } from '../shared/model/pet.model';
import * as PetActions from './pet.actions';

export interface PetState extends AppState.state {
  pets: IPet[];
  error: string;
}

const initialState = {
  pets: [],
  error: '',
};

const getPetFeatureState = createFeatureSelector<PetState>('pets');
export const getSelPets = createSelector(
  getPetFeatureState,
  (state) => state.pets
);

export const PetReducer = createReducer<PetState>(
  initialState,
  on(
    PetActions.loadPetsSuccess,
    (state, action): PetState => {
      return {
        ...state,
        pets: action.pets,
      };
    }
  ),
  on(
    PetActions.loadPetsFail,
    (state, action): PetState => {
      return {
        ...state,
        pets: [],
        error: action.error,
      };
    }
  )
);
