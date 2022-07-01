import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authUrl = 'http://localhost:3000/auth';
  token = '';

  public authUser(email: string, password: string): Observable<any> {
    const body = JSON.stringify({email, password});

    return this.http.request('POST', this.authUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    }).pipe(
      tap((res:any) => {
      const authToken = res.token;
      this.userService.saveToken(authToken);
    }))
  }

}