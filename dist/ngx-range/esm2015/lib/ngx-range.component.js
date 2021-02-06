import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional, Self } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
function NgxRangeComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.name);
} }
function NgxRangeComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.name);
} }
const _c0 = function (a0) { return { error: a0 }; };
export class NgxRangeComponent {
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
NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
NgxRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], hostVars: 1, hostBindings: function NgxRangeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
    } }, inputs: { selectOptions: "selectOptions", value: "value" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 8, consts: [["role", "group", 3, "formGroup", "ngClass"], ["appearance", "outline"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "select-second"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "mat-form-field", 1);
        i0.ɵɵelementStart(3, "mat-select", 2);
        i0.ɵɵtemplate(4, NgxRangeComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 4);
        i0.ɵɵelementStart(6, "mat-select", 5);
        i0.ɵɵtemplate(7, NgxRangeComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵtextInterpolate2(" varm\u0131", ctx.rangeGroup.errors == null ? null : ctx.rangeGroup.errors.length, " ", ctx.invalid, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.rangeGroup)("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx.invalid));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgClass, i3.MatFormField, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }\n    .select-second[_ngcontent-%COMP%]{\n      padding-left: 5px;\n    }\n    .error[_ngcontent-%COMP%]{\n      color: red;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeComponent, [{
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
    }], function () { return [{ type: i1.FormBuilder }, { type: i1.NgControl, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1yYW5nZS9zcmMvbGliL25neC1yYW5nZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxFQUFnQyxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVoSyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lBaUJwQyxxQ0FBcUY7SUFBQSxZQUFlO0lBQUEsaUJBQWE7OztJQUFuRCx1Q0FBc0I7SUFBQyxlQUFlO0lBQWYsb0NBQWU7OztJQUtwRyxxQ0FBc0Y7SUFBQSxZQUFlO0lBQUEsaUJBQWE7OztJQUFuRCx1Q0FBc0I7SUFBQyxlQUFlO0lBQWYsb0NBQWU7OztBQW1CL0csTUFBTSxPQUFPLGlCQUFpQjtJQW9DNUIsWUFBb0IsR0FBZ0IsRUFBNkIsU0FBb0I7UUFBakUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUE2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBL0JyRixPQUFFLEdBQUcsYUFBYSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBZ0M3QyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQ2pDLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQztJQTVCRCxJQUNJLGFBQWEsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFD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QU0sRUFBRTtvQkFDTjs7Ozs7Ozs7O0tBU0M7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQXFDd0MsSUFBSTs7c0JBQUksUUFBUTt3QkEvQnZELEVBQUU7a0JBREQsV0FBVztZQWNSLGFBQWE7a0JBRGhCLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBTZWxmLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxudHlwZSBzZWxlY3RPcHRpb25zID0geyBmaXJzdE9wdGlvbnM6IFt7IHZhbHVlOiB1bmtub3duLCBuYW1lOiBzdHJpbmcgfV0sIHNlY29uZE9wdGlvbnM6IFt7IHZhbHVlOiB1bmtub3duLCBuYW1lOiBzdHJpbmcgfV0gfTtcbnR5cGUgc2VsZWN0VmFsdWVzID0geyBzZWxlY3RGaXJzdDogdW5rbm93biwgc2VsZWN0U2Vjb25kOiB1bmtub3duIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yYW5nZScsXG4gIHRlbXBsYXRlOiBgXG4gICB2YXJtxLF7e1xuICAgIHJhbmdlR3JvdXAuZXJyb3JzPy5sZW5ndGhcblxuICAgfX1cblxuICAge3tpbnZhbGlkfX1cbiAgIDxkaXYgcm9sZT1cImdyb3VwXCIgW2Zvcm1Hcm91cF09J3JhbmdlR3JvdXAnIFtuZ0NsYXNzXT1cIntlcnJvcjogaW52YWxpZH1cIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2VsZWN0Rmlyc3RcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdE9wdGlvbnMuZmlyc3RPcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7b3B0aW9uLm5hbWV9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwic2VsZWN0LXNlY29uZFwiPlxuICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJzZWxlY3RTZWNvbmRcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdE9wdGlvbnMuc2Vjb25kT3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57e29wdGlvbi5uYW1lfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXG4gICAgYGRpdntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zZWxlY3Qtc2Vjb25ke1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5lcnJvcntcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAgIGBcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4UmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cbiAgc3RhdGljIG5leHRJZCA9IDA7XG5cbiAgQEhvc3RCaW5kaW5nKClcbiAgaWQgPSBgbmd4LXJhbmdlLSR7Tmd4UmFuZ2VDb21wb25lbnQubmV4dElkKyt9YDtcblxuICAvLyBwcml2YXRlIF9mb3JtQ29udHJvbE5hbWU6IHN0cmluZztcbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGZvcm1Db250cm9sTmFtZSh2YWx1ZSkge1xuICAvLyAgIHRoaXMuX2Zvcm1Db250cm9sTmFtZSA9IHZhbHVlO1xuICAvLyB9XG4gIC8vIGdldCBmb3JtQ29udHJvbE5hbWUoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sTmFtZTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgX3NlbGVjdE9wdGlvbnM6IHNlbGVjdE9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RPcHRpb25zKHZhbHVlKSB7XG4gICAgdGhpcy5fc2VsZWN0T3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBzZWxlY3RPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RPcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHNlbGVjdFZhbHVlcztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcmFuZ2VHcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcbiAgICBpZiAobmdDb250cm9sICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICAgIHRoaXMucmFuZ2VHcm91cCA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgc2VsZWN0Rmlyc3Q6IHRoaXMubmdDb250cm9sLnZhbHVlLFxuICAgICAgICBzZWxlY3RTZWNvbmQ6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2hlZDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJhbmdlR3JvdXAudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICApLnN1YnNjcmliZShmb3JtVmFsdWVzID0+IHtcbiAgICAgIGlmIChmb3JtVmFsdWVzLnNlbGVjdEZpcnN0ICE9PSBudWxsICYmIGZvcm1WYWx1ZXMuc2VsZWN0U2Vjb25kICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoZm9ybVZhbHVlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZT8ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlcy52YWx1ZT8uY3VycmVudFZhbHVlKSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIHRoaXMucmFuZ2VHcm91cC5wYXRjaFZhbHVlKGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lcnJvcnM7XG4gIH1cblxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgIGlmIChvYmo/LnNlbGVjdEZpcnN0KSB7XG4gICAgICB0aGlzLnJhbmdlR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICAgIHNlbGVjdEZpcnN0OiBvYmouc2VsZWN0Rmlyc3R9KTtcbiAgICB9XG4gICAgaWYgKG9iaj8uc2VsZWN0U2Vjb25kKSB7XG4gICAgICB0aGlzLnJhbmdlR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICAgc2VsZWN0U2Vjb25kOiBvYmouc2VsZWN0U2Vjb25kfSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaXNEaXNhYmxlZCA/IHRoaXMucmFuZ2VHcm91cC5kaXNhYmxlKCkgOiB0aGlzLnJhbmdlR3JvdXAuZW5hYmxlKCk7XG4gIH1cbn1cbiJdfQ==