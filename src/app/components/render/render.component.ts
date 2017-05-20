import {AfterContentChecked, Component, Input, ViewChild} from '@angular/core';
import {FormBase} from '../model/form-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html'
})
export class RenderComponent implements AfterContentChecked {
  @Input() field: FormBase<any>;
  @Input() form: FormGroup;
  @Input() data: any;

  get isValid() { return this.form.controls[this.field.key].valid; }

  @ViewChild('inputText') inputText;

  ngAfterContentChecked(): void{
    this.adjust(this.inputText);
  }

  adjust(element) {
    if (element) {
      element.nativeElement.style.overflow = 'hidden';
      element.nativeElement.style.width = 'auto';
      element.nativeElement.style.width = element.nativeElement.scrollWidth + 'px';
    }
  }
}