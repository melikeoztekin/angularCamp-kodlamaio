import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiControllerUrl: string = `${environment.apiUrl}/products`;
  constructor(private _httpClient: HttpClient) {}

  getList(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.apiControllerUrl);
  }

  add(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(this.apiControllerUrl, product);
  }

  getById(id: number): Observable<Product> {
    return this._httpClient.get<Product>(`${this.apiControllerUrl}/${id}`);
  }
}
