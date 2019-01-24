import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiService } from './api/api.service';
import { UsersService } from './users/users.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ApiService, UsersService]
})
export class ApiModule {}
