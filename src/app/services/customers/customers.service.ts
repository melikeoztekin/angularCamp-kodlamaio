import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private _httpClient: HttpClient) {}
  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  getList(): Observable<Customer[]> {
    return this._httpClient.get<Customer[]>(this.apiControllerUrl);
  }

  add(customer: Customer): Observable<Customer> {
    return this._httpClient.post<Customer>(this.apiControllerUrl, customer);
  }

  delete(id: number): Observable<Customer> {
    return this._httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`);
  }

  update(customer: Customer): Observable<Customer> {
    return this._httpClient.put<Customer>(
      `${this.apiControllerUrl}/${customer.id}`,
      customer
    );
  }

  getById(id: number): Observable<Customer> {
    return this._httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`);
  }
}
