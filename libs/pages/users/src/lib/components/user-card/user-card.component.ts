import { Component, Input } from '@angular/core';
import { User } from '@ng-users/api';

@Component({
  selector: 'ng-users-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: User | null = null;
  attrs = ['id', 'name', 'email'];
}
