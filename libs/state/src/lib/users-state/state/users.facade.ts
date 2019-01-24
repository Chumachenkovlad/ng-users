import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LoadUsers } from './users.actions';
import { UsersPartialState } from './users.reducer';
import { usersQuery } from './users.selectors';

@Injectable()
export class UsersFacade {
  loaded$ = this.store.pipe(select(usersQuery.getLoaded));
  allUsers$ = this.store.pipe(select(usersQuery.getAllUsers));

  constructor(private store: Store<UsersPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadUsers());
  }

  getUserById(id: number) {
    return this.store.pipe(select(usersQuery.getUserById, id));
  }
}
