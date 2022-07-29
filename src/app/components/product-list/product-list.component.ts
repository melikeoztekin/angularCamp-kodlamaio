import { ProductsService } from './../../services/products/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: Product[];
  cartItems: any[] = [];
  dataLoaded = false;

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 5000);
  }

  getProducts() {
    this._productsService.getList().subscribe((response) => {
      this.productList = response;
      this.dataLoaded = true;
    });
  }

  addToCart(product: Product) {
    let itemToFind = this.cartItems.find((c) => c == name);
    if (!itemToFind) {
      this.cartItems.push(name);
    }
  }
}
