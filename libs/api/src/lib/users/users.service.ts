import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { User } from './User';

@Injectable()
export class UsersService {
  constructor(private readonly apiService: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('/users');
  }
}
