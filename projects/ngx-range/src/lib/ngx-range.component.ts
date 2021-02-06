import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

type selectOptions = { firstOptions: [{ value: unknown, name: string }], secondOptions: [{ value: unknown, name: string }] };
type selectValues = { selectFirst: unknown, selectSecond: unknown };

@Component({
  selector: 'ngx-range',
  template: `
   <span *ngIf='rangeGroup?.errors?.largerFirst' class="error">First value should be smaller than the second!</span>
   <span *ngIf='rangeGroup?.errors?.largerSecond' class="error">Second value should be smaller than the first!</span>


   varmı{{
    rangeGroup.errors?.length

   }}<div role="group" [formGroup]='rangeGroup' [ngClass]="{error: rangeGroup.errors?.length>0}">
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRangeComponent implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {

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

  constructor(private _fb: FormBuilder, @Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    this.rangeGroup = this._fb.group({
      selectFirst: null,
      selectSecond: null
    });
  }

  onChange;
  onTouched;

  ngOnInit(): void {
    this.rangeGroup.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(formValues => {
      if (formValues.selectFirst !== null && formValues.selectSecond !== null) {
        this.onChange(formValues);
      }
    });
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

  ngOnChanges(changes: SimpleChanges): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.rangeGroup.disable : this.rangeGroup.enable;
  }
}
