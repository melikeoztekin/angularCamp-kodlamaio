import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private _toastrService: ToastrService,
    private _router: Router
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
      this._toastrService.warning('Fill in the blank fields.', 'Warning');
      return;
    }

    const customer: Customer = {
      ...this.registerForm.value,
    };

    this._customersService.add(customer).subscribe((response) => {
      this._toastrService.success('Registration successful.', 'Successful');
      setTimeout(() => {
        this.registerForm = this._formBuilder.group({
          companyName: [''],
          contactName: [''],
          contactTitle: [''],
          street: [''],
          city: [''],
          region: [''],
          postalCode: [''],
          country: [''],
          phone: [''],
          customerKey: [''],
        });
        //this._router.navigate(['customers']);
      }, 2000);
    });
  }
}
