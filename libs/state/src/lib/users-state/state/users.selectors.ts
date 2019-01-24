import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USERS_FEATURE_KEY, UsersState } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
const getUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

const getLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.loaded
);
const getError = createSelector(
  getUsersState,
  (state: UsersState) => state.error
);

const getAllUsers = createSelector(
  getUsersState,
  getLoaded,
  (state: UsersState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getUserById = createSelector(
  getUsersState,
  (state: UsersState, id: number) =>
    state.loaded ? state.list.find(user => user.id === id) : null
);

export const usersQuery = {
  getLoaded,
  getError,
  getAllUsers,
  getUserById
};
