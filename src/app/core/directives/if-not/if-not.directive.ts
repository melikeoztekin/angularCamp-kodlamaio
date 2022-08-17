import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]',
})
export class IfNotDirective {
  @Input('ngIfNotElse') elseTemplateRef!: TemplateRef<any>;

  private hasView: boolean = false;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}

  @Input() set ngIfNot(condition: boolean) {
    if (condition === false && !this.hasView) {
      this._viewContainerRef.clear();
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      this.hasView = true;
    } else if (condition === true && this.hasView) {
      this._viewContainerRef.clear();
      this._viewContainerRef.createEmbeddedView(this.elseTemplateRef);
      this.hasView = false;
    }
  }
}
