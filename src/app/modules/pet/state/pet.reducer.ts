import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as AppState from '../../../state/app.state';
import { IPet } from '../shared/model/pets.model';
import * as XeRateActions from './pets.actions';

export interface XeRateState extends AppState.state {
  pets: any[];
  error: string;
}

const initialState = {
  pets: [],
  error: '',
};

const getXeRateFeatureState = createFeatureSelector<XeRateState>('pets');
export const getXERates = createSelector(
  getXeRateFeatureState,
  (state) => state.pets
);

export const XeRateReducer = createReducer<XeRateState>(
  initialState,
  on(
    XeRateActions.loadPetsSuccess,
    (state, action): XeRateState => {
      return {
        ...state,
        pets: action.pets,
      };
    }
  ),
  on(
    XeRateActions.loadPetsFail,
    (state, action): XeRateState => {
      return {
        ...state,
        pets: [],
        error: action.error,
      };
    }
  )
);
