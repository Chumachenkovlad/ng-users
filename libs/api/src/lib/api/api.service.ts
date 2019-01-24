import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  // could be get from environment in realworld app
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, query: any = {}): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`, {
      params: new HttpParams({ fromObject: query })
    });
  }
}
