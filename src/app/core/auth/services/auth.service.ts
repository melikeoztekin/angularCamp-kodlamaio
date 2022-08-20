import { UserForLoginModel } from './../models/user-for-login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLoginResponseModel } from '../models/user-login-response-model';
import { LocalStorageService } from '../../storage/services/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageResultModel } from '../../models/message-result-model';
import { TokenUserModel } from '../models/token-user-model';
import { Store } from '@ngrx/store';
import { AuthStates } from '../store/auth.reducer';
import { setTokenUserModel } from '../store/actions/auth.actions';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select((state) => state.appAuth)
    .pipe(map((state) => state.tokenUserModel));

  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private _httpClient: HttpClient,
    private _localStorageService: LocalStorageService,
    private _jwtHelperService: JwtHelperService,
    private store: Store<AuthStates>
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
    this.setTokenUserModel(
      this._jwtHelperService.decodeToken(this._jwtHelperService.tokenGetter())
    );
  }

  test(): Observable<MessageResultModel> {
    return this._httpClient.get<MessageResultModel>(
      `${this.apiControllerUrl}/test`
    );
  }

  get isAuthenticated(): boolean {
    if (!this._jwtHelperService.tokenGetter()) return false;
    if (this._jwtHelperService.isTokenExpired()) return false;
    return true;
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
    // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
  }
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
