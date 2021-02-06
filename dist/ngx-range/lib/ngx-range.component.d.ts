import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
declare type selectOptions = {
    firstOptions: [{
        value: unknown;
        name: string;
    }];
    secondOptions: [{
        value: unknown;
        name: string;
    }];
};
declare type selectValues = {
    selectFirst: unknown;
    selectSecond: unknown;
};
export declare class NgxRangeComponent implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    private _fb;
    ngControl: NgControl;
    static nextId: number;
    id: string;
    private _selectOptions;
    set selectOptions(value: selectOptions);
    get selectOptions(): selectOptions;
    private _value;
    set value(value: selectValues);
    get value(): selectValues;
    rangeGroup: FormGroup;
    constructor(_fb: FormBuilder, ngControl: NgControl);
    onChange: any;
    onTouched: any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    get invalid(): import("@angular/forms").ValidationErrors;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxRangeComponent, [null, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxRangeComponent, "ngx-range", never, { "selectOptions": "selectOptions"; "value": "value"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=ngx-range.component.d.ts.map