import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  authUrl = 'http://localhost:3000/auth';
  token = '';

  public authUser(email: string, password: string): Observable<any> {
    const body = JSON.stringify({email, password});

    return this.http.post(this.authUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }

}