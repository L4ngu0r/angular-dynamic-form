import { Injectable, Type } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(container: Type<any> ) {
    const group: any = {};
    if(container) {
      const forms = container['data'].fields;
      forms.forEach(form => {
        group[form.key] = form.required ? new FormControl(form.value || '', Validators.required)
          : new FormControl(form.value || '');
      });
    }

    return new FormGroup(group);
  }
}