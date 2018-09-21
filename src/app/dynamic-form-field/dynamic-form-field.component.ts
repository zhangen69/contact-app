import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  selectionList: Array<any>;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      selectionList?: Array<any>
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.selectionList = options.selectionList || [];
  }
}

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
