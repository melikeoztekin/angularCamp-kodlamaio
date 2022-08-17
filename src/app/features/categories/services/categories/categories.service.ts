import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/features/categories/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiControllerUrl: string = `${environment.apiUrl}/categories`;

  constructor(private _httpClient: HttpClient) {}

  getList(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(this.apiControllerUrl);
  }
}
