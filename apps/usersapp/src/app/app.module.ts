import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ApiModule } from '@ng-users/api';
import { RootStateModule } from '@ng-users/state';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'users'
        },
        {
          path: 'users',
          loadChildren: '@ng-users/pages/users#PagesUsersModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    ApiModule,
    RootStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
