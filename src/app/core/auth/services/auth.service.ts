import { Observable } from 'rxjs';
import { UserForLoginModel } from './../models/user-for-login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLoginResponseModel } from '../models/user-login-response-model';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private _httpClient: HttpClient,
    private _localStorageService: LocalStorageService,
    private _jwtHelperService: JwtHelperService
  ) {}

  login(
    userForLoginModel: UserForLoginModel
  ): Observable<UserLoginResponseModel> {
    return this._httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,
      userForLoginModel
    );
  }

  saveAuth(userLoginResponseModel: UserLoginResponseModel) {
    this._localStorageService.set('token', userLoginResponseModel.access_token);
  }

  get isAuthenticated(): boolean {
    if (!this._jwtHelperService.tokenGetter()) return false;
    if (this._jwtHelperService.isTokenExpired()) return false;
    return true;
  }
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
