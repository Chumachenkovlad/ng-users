import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '@ng-users/api';

@Component({
  selector: 'ng-users-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent {
  @Input() dataSource: User[];
  displayedColumns = ['id', 'name', 'email', 'details'];
}
