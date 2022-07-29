import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  constructor(private _httpClient: HttpClient) {}

  add(customer: Customer): Observable<Customer> {
    return this._httpClient.post<Customer>(this.apiControllerUrl, customer);
  }
}
