import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data{
  users:User[], total:number, skip:number, limit:number
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Data> {
    let users:User[]=[];
    return this.http.get<Data>(`${this.baseUrl}/users`);
  }
}
