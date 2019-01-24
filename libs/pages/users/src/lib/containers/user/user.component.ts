import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersFacade } from '@ng-users/state';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ng-users-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public user$ = this.route.params.pipe(
    pluck('id'),
    map(Number),
    switchMap(id => this.usersFacade.getUserById(id))
  );

  constructor(
    private readonly usersFacade: UsersFacade,
    private route: ActivatedRoute
  ) {}
}
