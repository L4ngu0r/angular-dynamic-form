import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContainerHost]',
})
export class ContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}