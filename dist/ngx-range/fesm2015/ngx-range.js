import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, forwardRef, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormBuilder, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { NgForOf, CommonModule } from '@angular/common';
import { MatOption } from '@angular/material/core';

function NgxRangeComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r2.name);
} }
function NgxRangeComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("value", option_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r3.name);
} }
const PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useClass: forwardRef(() => NgxRangeComponent),
    multi: true
};
class NgxRangeComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.rangeGroup = this._fb.group({
            selectFirst: null,
            selectSecond: null
        });
    }
    set formControlName(value) {
        this._formControlName = value;
    }
    get formControlName() {
        return this._formControlName;
    }
    set selectOptions(value) {
        this._selectOptions = value;
    }
    get selectOptions() {
        return this._selectOptions;
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(ɵɵdirectiveInject(FormBuilder)); };
NgxRangeComponent.ɵcmp = ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], inputs: { formControlName: "formControlName", selectOptions: "selectOptions", value: "value" }, features: [ɵɵProvidersFeature([PROVIDER])], decls: 7, vars: 3, consts: [["role", "group", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-select", 2);
        ɵɵtemplate(3, NgxRangeComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-form-field", 1);
        ɵɵelementStart(5, "mat-select", 4);
        ɵɵtemplate(6, NgxRangeComponent_mat_option_6_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.rangeGroup);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, MatFormField, MatSelect, NgControlStatus, FormControlName, NgForOf, MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxRangeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-range',
                template: `
   <div role="group" [formGroup]='rangeGroup'>
    <mat-form-field appearance="fill">
        <mat-select formControlName="selectFirst">
          <mat-option *ngFor="let option of selectOptions.firstOptions" [value]="option.value">{{option.name}}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-select formControlName="selectSecond">
          <mat-option *ngFor="let option of selectOptions.secondOptions" [value]="option.value">{{option.name}}</mat-option>
        </mat-select>
      </mat-form-field>
  </div>
`,
                styles: [
                    `div{
      display: flex;
    }`
                ],
                providers: [PROVIDER],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: FormBuilder }]; }, { formControlName: [{
            type: Input
        }], selectOptions: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

class NgxRangeModule {
}
NgxRangeModule.ɵmod = ɵɵdefineNgModule({ type: NgxRangeModule });
NgxRangeModule.ɵinj = ɵɵdefineInjector({ factory: function NgxRangeModule_Factory(t) { return new (t || NgxRangeModule)(); }, imports: [[
            FormsModule,
            ReactiveFormsModule,
            MatSelectModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxRangeModule, { declarations: [NgxRangeComponent], imports: [FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        CommonModule], exports: [NgxRangeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxRangeModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxRangeComponent],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatSelectModule,
                    CommonModule
                ],
                exports: [NgxRangeComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-range
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxRangeComponent, NgxRangeModule };
//# sourceMappingURL=ngx-range.js.map
