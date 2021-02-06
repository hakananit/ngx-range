import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RangeValidators } from 'projects/ngx-range/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  ranges;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      range: ['', RangeValidators.largerSecond],
      name: [''],
      lastname: [''],
      range2: ['', RangeValidators.largerFirst],
      range3: [ {selectFirst: 12, selectSecond: 35}]
    });
    const values = [];
    for (let index = 0; index < 100; index++) {
      values.push({ value: index, name: index });
    }
    this.ranges = { firstOptions: values, secondOptions: values };
  }

  get value() {
    return JSON.stringify(this.form.value);
  }
}
