import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

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
    console.log(this.loginForm.value);
  }
}
