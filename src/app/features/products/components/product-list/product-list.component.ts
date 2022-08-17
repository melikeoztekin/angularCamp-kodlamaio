import { ProductsService } from '../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  cartItems: any[] = [];
  dataLoaded = false;
  filterText: string = '';
  status: string = 'init';

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _toastrService: ToastrService
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
    this.status = 'loading';
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
      this.dataLoaded = true;
      setTimeout(() => (this.status = 'loaded'), 1000);
    });
  }

  addToCart(product: Product) {
    let itemToFind = this.cartItems.find((c) => c == name);
    if (!itemToFind) {
      this.cartItems.push(name);
    }
  }

  deleteProductById(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this._productsService.delete(id).subscribe((response) => {
        this._toastrService.error('Product information deleted.');
        this.getProducts();
      });
    }
  }
}
