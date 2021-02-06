(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/common'), require('@angular/material/core')) :
  typeof define === 'function' && define.amd ? define('ngx-range', ['exports', '@angular/core', '@angular/forms', '@angular/material/form-field', '@angular/material/select', '@angular/common', '@angular/material/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-range'] = {}, global.ng.core, global.ng.forms, global.ng.material.formField, global.ng.material.select, global.ng.common, global.ng.material.core));
}(this, (function (exports, i0, i1, i2, i3, i4, i5) { 'use strict';

  function NgxRangeComponent_mat_option_3_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-option", 5);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var option_r2 = ctx.$implicit;
          i0.ɵɵproperty("value", option_r2.value);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate(option_r2.name);
      }
  }
  function NgxRangeComponent_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-option", 5);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
      }
      if (rf & 2) {
          var option_r3 = ctx.$implicit;
          i0.ɵɵproperty("value", option_r3.value);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate(option_r3.name);
      }
  }
  var PROVIDER = {
      provide: i1.NG_VALUE_ACCESSOR,
      useClass: i0.forwardRef(function () { return NgxRangeComponent; }),
      multi: true
  };
  var NgxRangeComponent = /** @class */ (function () {
      function NgxRangeComponent(_fb) {
          this._fb = _fb;
          this.rangeGroup = this._fb.group({
              selectFirst: null,
              selectSecond: null
          });
      }
      Object.defineProperty(NgxRangeComponent.prototype, "formControlName", {
          get: function () {
              return this._formControlName;
          },
          set: function (value) {
              this._formControlName = value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NgxRangeComponent.prototype, "selectOptions", {
          get: function () {
              return this._selectOptions;
          },
          set: function (value) {
              this._selectOptions = value;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NgxRangeComponent.prototype, "value", {
          get: function () {
              return this._value;
          },
          set: function (value) {
              this._value = value;
          },
          enumerable: false,
          configurable: true
      });
      NgxRangeComponent.prototype.ngOnInit = function () {
      };
      NgxRangeComponent.prototype.ngOnDestroy = function () {
      };
      NgxRangeComponent.prototype.writeValue = function (obj) {
          this.value = obj;
      };
      NgxRangeComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NgxRangeComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      return NgxRangeComponent;
  }());
  NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
  NgxRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], inputs: { formControlName: "formControlName", selectOptions: "selectOptions", value: "value" }, features: [i0.ɵɵProvidersFeature([PROVIDER])], decls: 7, vars: 3, consts: [["role", "group", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
          if (rf & 2) {
              i0.ɵɵproperty("formGroup", ctx.rangeGroup);
              i0.ɵɵadvance(3);
              i0.ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
              i0.ɵɵadvance(3);
              i0.ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
          }
      }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i3.MatSelect, i1.NgControlStatus, i1.FormControlName, i4.NgForOf, i5.MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }"], changeDetection: 0 });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'ngx-range',
                      template: "\n   <div role=\"group\" [formGroup]='rangeGroup'>\n    <mat-form-field appearance=\"fill\">\n        <mat-select formControlName=\"selectFirst\">\n          <mat-option *ngFor=\"let option of selectOptions.firstOptions\" [value]=\"option.value\">{{option.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field appearance=\"fill\">\n        <mat-select formControlName=\"selectSecond\">\n          <mat-option *ngFor=\"let option of selectOptions.secondOptions\" [value]=\"option.value\">{{option.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n  </div>\n",
                      styles: [
                          "div{\n      display: flex;\n    }"
                      ],
                      providers: [PROVIDER],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush
                  }]
          }], function () { return [{ type: i1.FormBuilder }]; }, { formControlName: [{
                  type: i0.Input
              }], selectOptions: [{
                  type: i0.Input
              }], value: [{
                  type: i0.Input
              }] });
  })();

  var NgxRangeModule = /** @class */ (function () {
      function NgxRangeModule() {
      }
      return NgxRangeModule;
  }());
  NgxRangeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRangeModule });
  NgxRangeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRangeModule_Factory(t) { return new (t || NgxRangeModule)(); }, imports: [[
              i1.FormsModule,
              i1.ReactiveFormsModule,
              i3.MatSelectModule,
              i4.CommonModule
          ]] });
  (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRangeModule, { declarations: [NgxRangeComponent], imports: [i1.FormsModule,
              i1.ReactiveFormsModule,
              i3.MatSelectModule,
              i4.CommonModule], exports: [NgxRangeComponent] });
  })();
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [NgxRangeComponent],
                      imports: [
                          i1.FormsModule,
                          i1.ReactiveFormsModule,
                          i3.MatSelectModule,
                          i4.CommonModule
                      ],
                      exports: [NgxRangeComponent]
                  }]
          }], null, null);
  })();

  /*
   * Public API Surface of ngx-range
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NgxRangeComponent = NgxRangeComponent;
  exports.NgxRangeModule = NgxRangeModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-range.umd.js.map
