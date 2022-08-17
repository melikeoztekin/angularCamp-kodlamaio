import { Observable } from 'rxjs';
import { UserForLoginModel } from './../models/user-for-login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLoginResponseModel } from '../models/user-login-response-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(private _httpClient: HttpClient) {}

  login(userForLoginModel: UserForLoginModel):Observable<UserLoginResponseModel>{
    return this._httpClient.post<UserLoginResponseModel>(`${this.apiControllerUrl}/login`,userForLoginModel)
  }
}
