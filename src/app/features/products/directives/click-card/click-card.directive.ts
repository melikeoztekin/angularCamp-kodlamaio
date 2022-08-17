import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickCard]',
})
export class ClickCardDirective {
  constructor(private _elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    this._elementRef.nativeElement.style.opacity = '0.5';
  }
}
