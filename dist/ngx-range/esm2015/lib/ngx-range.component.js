import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
function NgxRangeComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.name);
} }
function NgxRangeComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.name);
} }
const PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useClass: forwardRef(() => NgxRangeComponent),
    multi: true
};
export class NgxRangeComponent {
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
NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
NgxRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], inputs: { formControlName: "formControlName", selectOptions: "selectOptions", value: "value" }, features: [i0.ɵɵProvidersFeature([PROVIDER])], decls: 7, vars: 3, consts: [["role", "group", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-select", 2);
        i0.ɵɵtemplate(3, NgxRangeComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 1);
        i0.ɵɵelementStart(5, "mat-select", 4);
        i0.ɵɵtemplate(6, NgxRangeComponent_mat_option_6_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.rangeGroup);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4.NgForOf, i5.MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeComponent, [{
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
    }], function () { return [{ type: i1.FormBuilder }]; }, { formControlName: [{
            type: Input
        }], selectOptions: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1yYW5nZS9zcmMvbGliL25neC1yYW5nZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQTZELGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lBaUJwRyxxQ0FBcUY7SUFBQSxZQUFlO0lBQUEsaUJBQWE7OztJQUFuRCx1Q0FBc0I7SUFBQyxlQUFlO0lBQWYsb0NBQWU7OztJQUtwRyxxQ0FBc0Y7SUFBQSxZQUFlO0lBQUEsaUJBQWE7OztJQUFuRCx1Q0FBc0I7SUFBQyxlQUFlO0lBQWYsb0NBQWU7O0FBcEIvRyxNQUFNLFFBQVEsR0FBRztJQUNmLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUE2QkYsTUFBTSxPQUFPLGlCQUFpQjtJQTJDNUIsWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ0QsSUFDSSxlQUFlLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQ0ksYUFBYSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFDSSxLQUFLLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQWNELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVztJQUNYLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztrRkFuRVUsaUJBQWlCO3NEQUFqQixpQkFBaUIsK0pBSGpCLENBQUMsUUFBUSxDQUFDO1FBbEJwQiw4QkFBMkM7UUFDMUMseUNBQWtDO1FBQzlCLHFDQUEwQztRQUN4QyxnRkFBaUg7UUFDbkgsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIseUNBQWtDO1FBQ2hDLHFDQUEyQztRQUN6QyxnRkFBa0g7UUFDcEgsaUJBQWE7UUFDZixpQkFBaUI7UUFDckIsaUJBQU07O1FBWGEsMENBQXdCO1FBR0osZUFBNkI7UUFBN0Isd0RBQTZCO1FBSzdCLGVBQThCO1FBQTlCLHlEQUE4Qjs7dUZBYTFELGlCQUFpQjtjQXhCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Q0FhWDtnQkFDQyxNQUFNLEVBQUU7b0JBQ047O01BRUU7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs4REFpQkssZUFBZTtrQkFEbEIsS0FBSztZQVVGLGFBQWE7a0JBRGhCLEtBQUs7WUFVRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBQUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUNsYXNzOiBmb3J3YXJkUmVmKCgpID0+IE5neFJhbmdlQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbnR5cGUgc2VsZWN0T3B0aW9ucyA9IHsgZmlyc3RPcHRpb25zOiBbe3ZhbHVlOiB1bmtub3duLCBuYW1lOiBzdHJpbmd9XSwgc2Vjb25kT3B0aW9uczogW10gfTtcbnR5cGUgc2VsZWN0VmFsdWVzID0geyBmaXJzdFNlbGVjdFZhbHVlOiB1bmtub3duLCBzZWNvbmRTZWxlY3RWYWx1ZTogdW5rbm93biB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmFuZ2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgPGRpdiByb2xlPVwiZ3JvdXBcIiBbZm9ybUdyb3VwXT0ncmFuZ2VHcm91cCc+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInNlbGVjdEZpcnN0XCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RPcHRpb25zLmZpcnN0T3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57e29wdGlvbi5uYW1lfX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2VsZWN0U2Vjb25kXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RPcHRpb25zLnNlY29uZE9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3tvcHRpb24ubmFtZX19PC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cbmAsXG4gIHN0eWxlczogW1xuICAgIGBkaXZ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1gXG4gIF0sXG4gIHByb3ZpZGVyczogW1BST1ZJREVSXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4UmFuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8vIHN0YXRpYyBuZXh0SWQgPSAwO1xuICAvLyBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtcmFuZ2UtJHtOZ3hSYW5nZUNvbXBvbmVudC5uZXh0SWQrK31gO1xuXG4gIC8vIHByaXZhdGUgX2Zvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGZvcm1Db250cm9sKHZhbHVlKSB7XG4gIC8vICAgdGhpcy5fZm9ybUNvbnRyb2wgPSB2YWx1ZTtcbiAgLy8gfVxuICAvLyBnZXQgZm9ybUNvbnRyb2woKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBfZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtQ29udHJvbE5hbWUodmFsdWUpIHtcbiAgICB0aGlzLl9mb3JtQ29udHJvbE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZm9ybUNvbnRyb2xOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RPcHRpb25zOiBzZWxlY3RPcHRpb25zO1xuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0T3B0aW9ucyh2YWx1ZSkge1xuICAgIHRoaXMuX3NlbGVjdE9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2VsZWN0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0T3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiBzZWxlY3RWYWx1ZXM7XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHJhbmdlR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLnJhbmdlR3JvdXAgPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBzZWxlY3RGaXJzdDogbnVsbCxcbiAgICAgIHNlbGVjdFNlY29uZDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgb25DaGFuZ2U7XG4gIG9uVG91Y2hlZDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=