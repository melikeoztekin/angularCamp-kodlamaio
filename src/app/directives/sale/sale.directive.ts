import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appOnSale]',
})
export class SaleDirective {
  @Input() onSaleColor: string = 'yellow';
  @Input() onSaleText: string = 'On sale!';
  @Input() isOnSale: boolean = true;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.isOnSale) return;
    this.changeBackgroundColor('green');
    this.addSaleText();
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isOnSale) return;
    this.changeBackgroundColor(this.onSaleColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isOnSale) return;
    this.changeBackgroundColor('green');
  }

  changeBackgroundColor(color: string) {
    this._elementRef.nativeElement.style.color = color;
  }

  addSaleText() {
    const saleTextElement: HTMLElement = this._renderer.createElement('span');
    saleTextElement.innerText = this.onSaleText;
    // saleTextElement=<p>İndirim !!!</p>
    this._renderer.appendChild(this._elementRef.nativeElement, saleTextElement);
  }
}
