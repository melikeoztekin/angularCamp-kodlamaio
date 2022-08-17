import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() onBtnClickAddToCart = new EventEmitter();
  @Output() onBtnClickDelete = new EventEmitter();

  onMouseColor: string = 'blue';
  isCard: boolean = true;
  onSaleText: string = 'İndirim!!!';

  constructor() {}

  ngOnInit(): void {}

  addToCartEvent() {
    this.onBtnClickAddToCart.emit(this.product);
  }

  deleteProductEvent(id: number) {
    this.onBtnClickDelete.emit(this.product);
  }
}
