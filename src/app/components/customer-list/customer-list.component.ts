import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList!: Customer[];
  deleteId = 0;
  constructor(private _customersService: CustomersService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this._customersService.getList().subscribe((response) => {
      this.customerList = response;
    });
  }
}
