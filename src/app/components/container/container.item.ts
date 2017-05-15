import { Type } from '@angular/core';

export class ContainerItem {
  constructor(public component: Type<any>, public data: any) {}
}