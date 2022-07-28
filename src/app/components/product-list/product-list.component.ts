import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: any[];
  cartItems: any[] = [];

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._httpClient
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((response) => {
        this.productList = response;
        console.log(this.productList);
      });
  }

  addToCart(productName: string) {
    let itemToFind = this.cartItems.find((c) => c == productName);
    if (!itemToFind) {
      this.cartItems.push(productName);
    }
  }
}
