import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { UsersStateModule } from '@ng-users/state';

import { COMPONENTS } from './components';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserComponent } from './containers/user/user.component';
import { UsersComponent } from './containers/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersStateModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UsersComponent },
      { path: ':id', pathMatch: 'full', component: UserComponent }
    ])
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    ...COMPONENTS,
    UserCardComponent
  ]
})
export class PagesUsersModule {}
