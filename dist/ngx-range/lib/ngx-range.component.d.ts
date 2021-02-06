import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
declare type selectOptions = {
    firstOptions: [{
        value: unknown;
        name: string;
    }];
    secondOptions: [];
};
declare type selectValues = {
    firstSelectValue: unknown;
    secondSelectValue: unknown;
};
export declare class NgxRangeComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private _fb;
    private _formControlName;
    set formControlName(value: string);
    get formControlName(): string;
    private _selectOptions;
    set selectOptions(value: selectOptions);
    get selectOptions(): selectOptions;
    private _value;
    set value(value: selectValues);
    get value(): selectValues;
    rangeGroup: FormGroup;
    constructor(_fb: FormBuilder);
    onChange: any;
    onTouched: any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxRangeComponent, "ngx-range", never, { "formControlName": "formControlName"; "selectOptions": "selectOptions"; "value": "value"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=ngx-range.component.d.ts.map