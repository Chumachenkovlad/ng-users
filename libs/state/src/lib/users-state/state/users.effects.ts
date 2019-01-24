import { Injectable } from '@angular/core';
import { UsersService } from '@ng-users/api';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, startWith, switchMapTo } from 'rxjs/operators';

import { fromUsersActions, UsersActionTypes } from './users.actions';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    startWith(new fromUsersActions.LoadUsers()),
    ofType(UsersActionTypes.LoadUsers),
    switchMapTo(this.userService.getUsers()),
    map(users => new fromUsersActions.UsersLoaded(users)),
    catchError(error => of(new fromUsersActions.UsersLoadError(error)))
  );

  constructor(private actions$: Actions, private userService: UsersService) {}
}
