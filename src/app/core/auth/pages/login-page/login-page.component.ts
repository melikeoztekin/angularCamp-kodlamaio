import { UserForLoginModel } from './../../models/user-for-login-model';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userForLoginModel: UserForLoginModel = {
      ...this.loginForm.value,
    };
    this._authService.login(userForLoginModel).subscribe((response) => {
      this._authService.saveAuth(response);
    });
    console.log(this.loginForm.value);
  }
}
