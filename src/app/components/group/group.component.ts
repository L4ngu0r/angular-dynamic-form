import { Component, Input, OnInit, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../../services/form/form-control.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group.component.html',
  providers: [ FormControlService ]
})
export class GroupComponent implements OnInit {
  @Input() item: any;
  form: FormGroup;
  payLoad = '';

  constructor(private formControlService: FormControlService) {  }

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(this.item);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}