import { FormBase } from '../model/form-base';

export class Button extends FormBase<string> {
  controlType = 'button';
  type: string;
  fields: any;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.fields = options['fields'] || [];
  }
}