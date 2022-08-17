import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/features/products/models/product';
import { ProductsService } from 'src/app/features/products/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  data!: number;
  selectProduct!: Product;

  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService,
    private _toastrService: ToastrService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else {
        this.createProductForm();
      }
    });
  }

  getProductById(id: number) {
    this._productsService.getById(id).subscribe((data) => {
      this.selectProduct = data;
      this.createProductForm();
    });
  }

  createProductForm(): void {
    this.productForm = this._formBuilder.group({
      supplierId: [this.selectProduct?.supplierId || '', Validators.required],
      categoryId: [this.selectProduct?.categoryId || '', Validators.required],
      quantityPerUnit: [
        this.selectProduct?.quantityPerUnit || '',
        Validators.required,
      ],
      unitPrice: [this.selectProduct?.unitPrice || '', Validators.required],
      unitsInStock: [
        this.selectProduct?.unitsInStock || '',
        Validators.required,
      ],
      unitsOnOrder: [
        this.selectProduct?.unitsOnOrder || '',
        Validators.required,
      ],
      reorderLevel: [
        this.selectProduct?.reorderLevel || '',
        Validators.required,
      ],
      discontinued: [
        this.selectProduct?.discontinued || '',
        Validators.required,
      ],
      name: [this.selectProduct?.name || '', Validators.required],
    });
  }

  save() {
    if (this.selectProduct !== undefined) {
      this.update();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    if (this.productForm.invalid) {
      this._toastrService.warning('Fill in the blank fields.', 'Warning');
      return;
    }

    const product: Product = {
      ...this.productForm.value,
    };

    this._productsService.add(product).subscribe((response) => {
      this._toastrService.success('Registration successful.', 'Successful');
      setTimeout(() => {
        this.productForm.reset();
      }, 2000);
    });
  }

  update() {
    if (!this.productForm.valid) {
      return;
    }

    let selectProduct: Product = {
      id: this.selectProduct.id,
      ...this.productForm.value,
    };
    this._productsService.update(selectProduct).subscribe(() => {
      this._toastrService.success(
        'Customer information successfully updated.',
        'Successful'
      );
      setTimeout(() => {
        this._router.navigate(['homepage']);
      }, 2000);
    });
  }
}
