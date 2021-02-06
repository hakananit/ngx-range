import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵhostProperty, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵtextInterpolate2, ɵɵpureFunction1, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Self, Optional, HostBinding, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, NgControl, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgForOf, CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

function NgxRangeComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r2.name);
} }
function NgxRangeComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("value", option_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r3.name);
} }
const _c0 = function (a0) { return { error: a0 }; };
class NgxRangeComponent {
    constructor(_fb, ngControl) {
        this._fb = _fb;
        this.ngControl = ngControl;
        this.id = `ngx-range-${NgxRangeComponent.nextId++}`;
        if (ngControl !== null) {
            this.ngControl.valueAccessor = this;
            this.rangeGroup = this._fb.group({
                selectFirst: this.ngControl.value,
                selectSecond: null
            });
        }
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
        this.rangeGroup.valueChanges.pipe(debounceTime(300)).subscribe(formValues => {
            if (formValues.selectFirst !== null && formValues.selectSecond !== null) {
                this.onChange(formValues);
            }
        });
    }
    ngOnDestroy() {
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes.value) === null || _a === void 0 ? void 0 : _a.previousValue) !== ((_b = changes.value) === null || _b === void 0 ? void 0 : _b.currentValue)) {
            debugger;
            this.rangeGroup.patchValue(changes.value.currentValue);
        }
    }
    get invalid() {
        return this.ngControl.control.errors;
    }
    writeValue(obj) {
        this.value = obj;
        if (obj === null || obj === void 0 ? void 0 : obj.selectFirst) {
            this.rangeGroup.patchValue({
                selectFirst: obj.selectFirst
            });
        }
        if (obj === null || obj === void 0 ? void 0 : obj.selectSecond) {
            this.rangeGroup.patchValue({
                selectSecond: obj.selectSecond
            });
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        isDisabled ? this.rangeGroup.disable() : this.rangeGroup.enable();
    }
}
NgxRangeComponent.nextId = 0;
NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(NgControl, 10)); };
NgxRangeComponent.ɵcmp = ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], hostVars: 1, hostBindings: function NgxRangeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵhostProperty("id", ctx.id);
    } }, inputs: { selectOptions: "selectOptions", value: "value" }, features: [ɵɵNgOnChangesFeature], decls: 8, vars: 8, consts: [["role", "group", 3, "formGroup", "ngClass"], ["appearance", "outline"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "select-second"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtext(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "mat-form-field", 1);
        ɵɵelementStart(3, "mat-select", 2);
        ɵɵtemplate(4, NgxRangeComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field", 4);
        ɵɵelementStart(6, "mat-select", 5);
        ɵɵtemplate(7, NgxRangeComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵtextInterpolate2(" varm\u0131", ctx.rangeGroup.errors == null ? null : ctx.rangeGroup.errors.length, " ", ctx.invalid, " ");
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.rangeGroup)("ngClass", ɵɵpureFunction1(6, _c0, ctx.invalid));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgClass, MatFormField, MatSelect, NgControlStatus, FormControlName, NgForOf, MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }\n    .select-second[_ngcontent-%COMP%]{\n      padding-left: 5px;\n    }\n    .error[_ngcontent-%COMP%]{\n      color: red;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxRangeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-range',
                template: `
   varmı{{
    rangeGroup.errors?.length

   }}

   {{invalid}}
   <div role="group" [formGroup]='rangeGroup' [ngClass]="{error: invalid}">
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
            }]
    }], function () { return [{ type: FormBuilder }, { type: NgControl, decorators: [{
                type: Self
            }, {
                type: Optional
            }] }]; }, { id: [{
            type: HostBinding
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

class RangeValidators {
    static largerSecond(control) {
        return RangeValidators.compare('largerSecond')(control);
    }
    static largerFirst(control) {
        return RangeValidators.compare('largerFirst')(control);
    }
    static compare(type) {
        return (control) => {
            var _a, _b, _c, _d;
            if (type === 'largerSecond') {
                debugger;
                if (((_a = control.value) === null || _a === void 0 ? void 0 : _a.firstValue) > ((_b = control.value) === null || _b === void 0 ? void 0 : _b.secondValue)) {
                    debugger;
                    return { largerSecond: true };
                }
            }
            else if (type === 'largerFirst') {
                if (((_c = control.value) === null || _c === void 0 ? void 0 : _c.secondValue) > ((_d = control.value) === null || _d === void 0 ? void 0 : _d.firstValue)) {
                    return { largerFirst: true };
                }
            }
            return null;
        };
    }
}

/*
 * Public API Surface of ngx-range
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxRangeComponent, NgxRangeModule, RangeValidators };
//# sourceMappingURL=ngx-range.js.map
