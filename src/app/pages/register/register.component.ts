import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _customersService: CustomersService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this._formBuilder.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', Validators.required],
      contactTitle: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      customerKey: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this._toastrService.warning('Boş alanları doldurunuz.');
      return;
    }

    const customer: Customer = {
      ...this.registerForm.value,
      city: this.registerForm.value.city.toUpperCase(),
    };

    this._customersService.add(customer).subscribe((response) => {
      console.info(response);
    });
    this._toastrService.success('Kayıt işlemi başarılı');
  }
}
