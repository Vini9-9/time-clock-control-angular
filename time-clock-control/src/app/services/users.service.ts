import { User } from './../entities/users.model';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) {
      if (this.tokenService.hasToken()) {
        this.decodeJWT();
      }
     }

  userUrl = 'http://localhost:3000/users';
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

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const userDecoded = jwt_decode(token) as User;
    this.userSubject.next(userDecoded);
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }
}