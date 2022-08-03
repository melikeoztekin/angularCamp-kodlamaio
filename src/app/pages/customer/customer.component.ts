import { Customer } from '../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  data!: number;
  selectCustomer!: Customer;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _customersService: CustomersService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCustomerById(params['id']);
      else {
        this.createCustomerForm();
      }
    });
  }

  getCustomerById(id: number) {
    this._customersService.getById(id).subscribe((data) => {
      this.selectCustomer = data;
      this.createCustomerForm();
    });
  }

  createCustomerForm() {
    this.customerForm = this._formBuilder.group({
      companyName: [
        this.selectCustomer?.companyName || '',
        Validators.required,
      ],
      contactName: [
        this.selectCustomer?.contactName || '',
        Validators.required,
      ],
      contactTitle: [
        this.selectCustomer?.contactTitle || '',
        Validators.required,
      ],
      street: [this.selectCustomer?.street || '', Validators.required],
      city: [this.selectCustomer?.city || '', Validators.required],
      region: [this.selectCustomer?.region || '', Validators.required],
      postalCode: [this.selectCustomer?.postalCode || '', Validators.required],
      country: [this.selectCustomer?.country || '', Validators.required],
      phone: [this.selectCustomer?.phone || '', Validators.required],
      customerKey: [
        this.selectCustomer?.customerKey || '',
        Validators.required,
      ],
    });
  }

  save() {
    if (this.selectCustomer !== undefined) {
      this.update();
    } else {
      this.register();
    }
  }

  register() {
    if (this.customerForm.invalid) {
      this._toastrService.warning('Fill in the blank fields.', 'Warning');
      return;
    }

    const customer: Customer = {
      ...this.customerForm.value,
    };

    this._customersService.add(customer).subscribe((response) => {
      this._toastrService.success('Registration successful.', 'Successful');
      setTimeout(() => {
        this.customerForm.reset();
      }, 2000);
    });
  }

  update() {
    if (!this.customerForm.valid) {
      return;
    }

    let selectCustomer: Customer = {
      id: this.selectCustomer.id,
      ...this.customerForm.value,
    };
    this._customersService.update(selectCustomer).subscribe(() => {
      this._toastrService.success(
        'Customer information successfully updated.',
        'Successful'
      );
      setTimeout(() => {
        this._router.navigate(['customers']);
      }, 2000);
    });
  }
}
