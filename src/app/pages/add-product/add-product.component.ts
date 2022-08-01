import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createAddProductForm();
  }

  createAddProductForm(): void {
    this.addProductForm = this._formBuilder.group({
      supplierId: ['', Validators.required],
      categoryId: ['', Validators.required],
      quantityPerUnit: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      unitsOnOrder: ['', Validators.required],
      reorderLevel: ['', Validators.required],
      discontinued: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  addProduct() {
    if (this.addProductForm.invalid) {
      this._toastrService.warning('Boş alanları doldurunuz.');
      return;
    }

    const product: Product = {
      ...this.addProductForm.value,
    };

    this._productsService.add(product).subscribe((response) => {
      console.info(response);
    });
    this._toastrService.success('Yeni ürün ekleme başarılı.');
  }
}
