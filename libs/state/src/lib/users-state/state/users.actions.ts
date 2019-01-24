import { User } from '@ng-users/api';
import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  UsersLoaded = '[Users] Users Loaded',
  UsersLoadError = '[Users] Users Load Error',
  SelectUser = '[Users] Select user'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
}

export class UsersLoadError implements Action {
  readonly type = UsersActionTypes.UsersLoadError;
  constructor(public payload: any) {}
}

export class UsersLoaded implements Action {
  readonly type = UsersActionTypes.UsersLoaded;
  constructor(public payload: User[]) {}
}

export class SelectUser implements Action {
  readonly type = UsersActionTypes.SelectUser;
  constructor(public payload: number | null) {}
}

export type UsersAction = LoadUsers | UsersLoaded | UsersLoadError | SelectUser;

export const fromUsersActions = {
  LoadUsers,
  UsersLoaded,
  UsersLoadError,
  SelectUser
};
