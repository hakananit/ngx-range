import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RangeValidators } from './range-validator';

type selectOptions = { firstOptions: [{ value: unknown, name: string }], secondOptions: [{ value: unknown, name: string }] };
type selectValues = { firstSelectValue: unknown, secondSelectValue: unknown };

@Component({
  selector: 'ngx-range',
  template: `
   <span *ngIf='rangeGroup?.errors?.range' class="error">First value should be smaller than the second!</span>
   <div role="group" [formGroup]='rangeGroup'>
    <mat-form-field appearance="outline">
        <mat-select formControlName="selectFirst">
          <mat-option *ngFor="let option of selectOptions.firstOptions" [value]="option.value">{{option.name}}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="select-second">
        <mat-select formControlName="selectSecond">
          <mat-option *ngFor="let option of selectOptions.secondOptions" [value]="option.value">{{option.name}}</mat-option>
        </mat-select>
      </mat-form-field>
  </div>
`,
  styles: [
    `div{
      display: flex;
    }
    .select-second{
      padding-left: 5px;
    }
    .error{
      color: red;
    }
    `
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useClass: NgxRangeComponent,
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRangeComponent implements OnInit, OnDestroy, ControlValueAccessor {

  static nextId = 0;

  @HostBinding()
  id = `ngx-range-${NgxRangeComponent.nextId++}`;

  private _formControl: FormControl;
  @Input()
  set formControl(value) {
    this._formControl = value;
  }
  get formControl() {
    return this._formControl;
  }

  private _formControlName: string;
  @Input()
  set formControlName(value) {
    this._formControlName = value;
  }
  get formControlName() {
    return this._formControlName;
  }

  private _selectOptions: selectOptions;
  @Input()
  set selectOptions(value) {
    this._selectOptions = value;
  }
  get selectOptions() {
    return this._selectOptions;
  }

  private _value: selectValues;
  @Input()
  set value(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  rangeGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.rangeGroup = this._fb.group({
      selectFirst: null,
      selectSecond: null
    });
    this.rangeGroup.setValidators(RangeValidators.largerSecond);
  }

  onChange;
  onTouched;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
