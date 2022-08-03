import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
})
export class CustomerCardComponent implements OnInit {
  @Input() customer!: Customer;
  @Output() onBtnClickDelete: any = new EventEmitter();
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteCustomerEvent(id: number) {
    this.onBtnClickDelete.emit(this.customer);
  }
}
