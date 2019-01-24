import { Component } from '@angular/core';
import { UsersFacade } from '@ng-users/state';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users$ = this.usersFacade.allUsers$;
  constructor(private readonly usersFacade: UsersFacade) {}
}
