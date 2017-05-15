import { FormBase } from '../model/form-base';

/**
 * Select
 */
export class Select extends FormBase<string> {
  controlType = 'select';
  options: {key: string, value: string}[] = [];
  fields: any;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.fields = options['fields'] || [];
  }
}