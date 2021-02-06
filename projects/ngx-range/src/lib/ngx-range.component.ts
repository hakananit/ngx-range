import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

type selectOptions = { firstOptions: [{ value: unknown, name: string }], secondOptions: [{ value: unknown, name: string }] };
type selectValues = { selectFirst: unknown, selectSecond: unknown };

@Component({
  selector: 'ngx-range',
  template: `
   <div role="group" [formGroup]='rangeGroup' [ngClass]="{error: errors}">
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
      display: inline-block;
    }
    .select-second{
      padding-left: 5px;
    }
    .error{
      border: 1px solid red;
      border-radius: 2px;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRangeComponent implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {

  static nextId = 0;

  @HostBinding()
  id = `ngx-range-${NgxRangeComponent.nextId++}`;

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

  private _destroy: Subject<null>;

  rangeGroup: FormGroup;

  constructor(private _fb: FormBuilder, @Self() @Optional() public ngControl: NgControl) {
    if (ngControl !== null) {
      this.ngControl.valueAccessor = this;
      this.rangeGroup = this._fb.group({
        selectFirst: this.ngControl.value,
        selectSecond: null
      });
    }
    this._destroy = new Subject();
  }

  onChange;
  onTouched;

  ngOnInit(): void {
    this.rangeGroup.valueChanges.pipe(
      takeUntil(this._destroy)
    ).subscribe(formValues => {
      if (formValues.selectFirst !== null && formValues.selectSecond !== null) {
        this.onChange(formValues);
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value?.previousValue !== changes.value?.currentValue) {
      this.rangeGroup.patchValue(changes.value.currentValue);
    }
  }

  get errors() {
    return !!this.ngControl.control.errors;
  }


  writeValue(obj: any): void {
    this.value = obj;
    if (obj?.selectFirst) {
      this.rangeGroup.patchValue({
        selectFirst: obj.selectFirst});
    }
    if (obj?.selectSecond) {
      this.rangeGroup.patchValue({
       selectSecond: obj.selectSecond});
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.rangeGroup.disable() : this.rangeGroup.enable();
  }
}
