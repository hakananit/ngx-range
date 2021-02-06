import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      range: [{ selectFirst: 55, selectSecond: 35 }, RangeValidators.largerSecond],
      name: [null],
      lastname: ['', Validators.required],
      range2: [null, RangeValidators.largerFirst],
      range3: { selectFirst: 12, selectSecond: 35 },
      range4: { value: { selectFirst: 4, selectSecond: 5 }, disabled: true }
    });
    const values = [];
    for (let index = 0; index < 100; index++) {
      values.push({ value: index, name: index });
    }
    this.ranges = { firstOptions: values, secondOptions: values };
  }

  get value() {
    return this.form.value;
  }
}
