import { createAction, props } from '@ngrx/store';
import { IUser } from '../model/user.model';

export const saveUser = createAction(
  '[User] Save user',
  props<{ user: IUser }>()
);

export const saveUserSuccess = createAction(
  '[Pets] Save user success',
  props<{ user: IUser }>()
);

export const saveUserFail = createAction(
  '[Pets] Save user fail',
  props<{ user: IUser }>()
);
