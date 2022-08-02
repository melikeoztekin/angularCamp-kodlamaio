import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  dataLoaded = false;

  constructor(
    public _customersService: CustomersService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getCustomers();
      this.dataLoaded = true;
    }, 2000);
  }

  getCustomers() {
    this._customersService.getList().subscribe((response) => {
      this.customerList = response;
      this.dataLoaded = true;
    });
  }

  deleteCustomerById(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this._customersService.delete(id).subscribe((response) => {
        this._toastrService.error('Customer information deleted.');
        this.getCustomers();
      });
    }
  }
}
