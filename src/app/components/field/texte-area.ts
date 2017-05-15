import { FormBase } from '../model/form-base';

/**
 * Textarea
 */
export class TexteArea extends FormBase<string> {
  controlType = 'textearea';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}