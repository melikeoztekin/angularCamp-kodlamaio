import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
})
export class MultipleDirective {
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}
  @Input() set appMultiple(value: number) {
    console.log(value);
    for (let i = 0; i < value; i++) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }
}
