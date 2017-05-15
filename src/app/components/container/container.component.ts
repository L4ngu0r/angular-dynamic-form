import { Component, Input, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import {ContainerItem} from './container.item';
import {ContainerDirective} from './container.directive';

@Component({
  selector: 'app-container-component',
  template: `<ng-template appContainerHost></ng-template>`
})
export class ContainerComponent implements AfterViewInit {
  @Input() field;
  @Input() form;
  @Input() container: ContainerItem;
  @ViewChild(ContainerDirective) containerHost: ContainerDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadComponents();
    });
  }

  loadComponents() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.container.component);
    const componentRef = this.containerHost.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.form = this.form;
    componentRef.instance.field = this.field;
    componentRef.instance.subComponent = this.container.data.subComponent;
    componentRef.instance.valueToDisplay = this.container.data.valueToDisplay;
  }
}
