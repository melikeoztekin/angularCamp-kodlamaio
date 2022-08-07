import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
})
export class WelcomeDirective {
  @Input('appWelcomeThen') thenTemplateRef!: TemplateRef<any>;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}
  @Input() set appWelcome(msValue: number) {
    console.log(msValue);

    if (msValue) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      setTimeout(() => {
        this._viewContainerRef.clear();
        this._viewContainerRef.createEmbeddedView(this.thenTemplateRef);
      }, msValue);
    }
  }
}
