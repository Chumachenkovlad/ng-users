import { User } from '@ng-users/api';

import { UsersAction, UsersActionTypes } from './users.actions';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  list: User[]; // list of Users; analogous to a sql normalized table
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: any; // last none error (if any)
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialState: UsersState = {
  list: [],
  loaded: false
};

export function usersReducer(
  state: UsersState = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActionTypes.UsersLoaded:
      return {
        ...state,
        list: action.payload,
        loaded: true
      };

    case UsersActionTypes.SelectUser:
      return {
        ...state,
        selectedId: action.payload
      };

    default:
      return state;
  }
}
