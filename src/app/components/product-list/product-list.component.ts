import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  cartItems: any[] = [];
  dataLoaded = false;

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getProductsByCategory();
      this.dataLoaded = true;
    }, 2000);
  }

  getProducts() {
    this._productsService.getList().subscribe((response) => {
      this.productList = response;
      this.dataLoaded = true;
    });
  }

  //* kategori id ye göre ürünleri listeleme
  getProductsByCategory() {
    this._productsService.getList().subscribe((data) => {
      this._activatedRoute.params.subscribe((param) => {
        if (param['id']) {
          this.productList = data.filter(
            (item) => item.categoryId == param['id']
          );
        } else {
          this.productList = data;
        }
      });
    });
  }

  addToCart(product: Product) {
    let itemToFind = this.cartItems.find((c) => c == name);
    if (!itemToFind) {
      this.cartItems.push(name);
    }
  }
}
