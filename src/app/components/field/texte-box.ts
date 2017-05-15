import { FormBase } from '../model/form-base';

/**
 * Input text
 */
export class TexteBox extends FormBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}