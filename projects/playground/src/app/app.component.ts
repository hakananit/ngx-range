import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test: FormGroup;
  ranges;

  constructor(private _fb: FormBuilder) {
    this.test = this._fb.group({ range: null, name: null, lastname: null });
    let values = [];
    for (let index = 0; index < 100; index++) {
      values.push({ value: index, name: index });
    }
    this.ranges = { firstOptions: values, secondOptions: values };
  }

  get value() {
    return JSON.stringify(this.test.value);
  }
}
