import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenUserModel } from 'src/app/core/auth/models/token-user-model';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  tokenUserModel$!: Observable<TokenUserModel | undefined>;

  constructor(private _authService: AuthService) {
    this.tokenUserModel$ = this._authService.tokenUserModel$;
  }

  ngOnInit(): void {}

  testAuth() {
    this._authService.test().subscribe((response) => {
      console.log(response);
    });
  }
}
