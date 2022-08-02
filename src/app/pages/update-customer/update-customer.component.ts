import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  customerUpdateForm!: FormGroup;
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
    });
  }

  getCustomerById(id: number) {
    this._customersService.getById(id).subscribe((data) => {
      this.selectCustomer = data;
      this.createCustomerUpdateForm();
    });
  }

  createCustomerUpdateForm() {
    this.customerUpdateForm = this._formBuilder.group({
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

  update() {
    if (!this.customerUpdateForm.valid) {
      return;
    }

    let selectCustomer: Customer = {
      id: this.selectCustomer.id,
      ...this.customerUpdateForm.value,
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
