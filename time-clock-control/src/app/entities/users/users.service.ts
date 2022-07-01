import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  userUrl = 'http://localhost:3000/users';
  authUrl = 'http://localhost:3000/auth';
  token = '';

  public getAllUsers() {
    return this.http.get<any>(this.userUrl);
  }

  public saveUser(usuario: User): Observable<any> {
    const body = JSON.stringify(usuario);

    return this.http.request('POST', this.userUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }

  public authUser(email: string, password: string): Observable<any> {
    const body = JSON.stringify({email, password});

    return this.http.request('POST', this.authUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }

}