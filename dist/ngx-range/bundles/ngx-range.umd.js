(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('@angular/forms'), require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core')) :
  typeof define === 'function' && define.amd ? define('ngx-range', ['exports', '@angular/core', 'rxjs/operators', '@angular/forms', '@angular/common', '@angular/material/form-field', '@angular/material/select', '@angular/material/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-range'] = {}, global.ng.core, global.rxjs.operators, global.ng.forms, global.ng.common, global.ng.material.formField, global.ng.material.select, global.ng.material.core));
}(this, (function (exports, i0, operators, i1, i2, i3, i4, i5) { 'use strict';

  function NgxRangeComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-option", 6);
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
  function NgxRangeComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
          i0.ɵɵelementStart(0, "mat-option", 6);
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
  var _c0 = function (a0) { return { error: a0 }; };
  var NgxRangeComponent = /** @class */ (function () {
      function NgxRangeComponent(_fb, ngControl) {
          this._fb = _fb;
          this.ngControl = ngControl;
          this.id = "ngx-range-" + NgxRangeComponent.nextId++;
          if (ngControl !== null) {
              this.ngControl.valueAccessor = this;
              this.rangeGroup = this._fb.group({
                  selectFirst: this.ngControl.value,
                  selectSecond: null
              });
          }
      }
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
          var _this = this;
          this.rangeGroup.valueChanges.pipe(operators.debounceTime(300)).subscribe(function (formValues) {
              if (formValues.selectFirst !== null && formValues.selectSecond !== null) {
                  _this.onChange(formValues);
              }
          });
      };
      NgxRangeComponent.prototype.ngOnDestroy = function () {
      };
      NgxRangeComponent.prototype.ngOnChanges = function (changes) {
          var _a, _b;
          if (((_a = changes.value) === null || _a === void 0 ? void 0 : _a.previousValue) !== ((_b = changes.value) === null || _b === void 0 ? void 0 : _b.currentValue)) {
              debugger;
              this.rangeGroup.patchValue(changes.value.currentValue);
          }
      };
      Object.defineProperty(NgxRangeComponent.prototype, "invalid", {
          get: function () {
              return this.ngControl.control.errors;
          },
          enumerable: false,
          configurable: true
      });
      NgxRangeComponent.prototype.writeValue = function (obj) {
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
      };
      NgxRangeComponent.prototype.registerOnChange = function (fn) {
          this.onChange = fn;
      };
      NgxRangeComponent.prototype.registerOnTouched = function (fn) {
          this.onTouched = fn;
      };
      NgxRangeComponent.prototype.setDisabledState = function (isDisabled) {
          isDisabled ? this.rangeGroup.disable() : this.rangeGroup.enable();
      };
      return NgxRangeComponent;
  }());
  NgxRangeComponent.nextId = 0;
  NgxRangeComponent.ɵfac = function NgxRangeComponent_Factory(t) { return new (t || NgxRangeComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i1.NgControl, 10)); };
  NgxRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxRangeComponent, selectors: [["ngx-range"]], hostVars: 1, hostBindings: function NgxRangeComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
              i0.ɵɵhostProperty("id", ctx.id);
          }
      }, inputs: { selectOptions: "selectOptions", value: "value" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 8, consts: [["role", "group", 3, "formGroup", "ngClass"], ["appearance", "outline"], ["formControlName", "selectFirst"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "select-second"], ["formControlName", "selectSecond"], [3, "value"]], template: function NgxRangeComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
          if (rf & 2) {
              i0.ɵɵtextInterpolate2(" varm\u0131", ctx.rangeGroup.errors == null ? null : ctx.rangeGroup.errors.length, " ", ctx.invalid, " ");
              i0.ɵɵadvance(1);
              i0.ɵɵproperty("formGroup", ctx.rangeGroup)("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx.invalid));
              i0.ɵɵadvance(3);
              i0.ɵɵproperty("ngForOf", ctx.selectOptions.firstOptions);
              i0.ɵɵadvance(3);
              i0.ɵɵproperty("ngForOf", ctx.selectOptions.secondOptions);
          }
      }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgClass, i3.MatFormField, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], styles: ["div[_ngcontent-%COMP%]{\n      display: flex;\n    }\n    .select-second[_ngcontent-%COMP%]{\n      padding-left: 5px;\n    }\n    .error[_ngcontent-%COMP%]{\n      color: red;\n    }"], changeDetection: 0 });
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'ngx-range',
                      template: "\n   varm\u0131{{\n    rangeGroup.errors?.length\n\n   }}\n\n   {{invalid}}\n   <div role=\"group\" [formGroup]='rangeGroup' [ngClass]=\"{error: invalid}\">\n    <mat-form-field appearance=\"outline\">\n        <mat-select formControlName=\"selectFirst\">\n          <mat-option *ngFor=\"let option of selectOptions.firstOptions\" [value]=\"option.value\">{{option.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"select-second\">\n        <mat-select formControlName=\"selectSecond\">\n          <mat-option *ngFor=\"let option of selectOptions.secondOptions\" [value]=\"option.value\">{{option.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n  </div>\n",
                      styles: [
                          "div{\n      display: flex;\n    }\n    .select-second{\n      padding-left: 5px;\n    }\n    .error{\n      color: red;\n    }\n    "
                      ],
                      changeDetection: i0.ChangeDetectionStrategy.OnPush
                  }]
          }], function () {
          return [{ type: i1.FormBuilder }, { type: i1.NgControl, decorators: [{
                          type: i0.Self
                      }, {
                          type: i0.Optional
                      }] }];
      }, { id: [{
                  type: i0.HostBinding
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
              i4.MatSelectModule,
              i2.CommonModule
          ]] });
  (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRangeModule, { declarations: [NgxRangeComponent], imports: [i1.FormsModule,
              i1.ReactiveFormsModule,
              i4.MatSelectModule,
              i2.CommonModule], exports: [NgxRangeComponent] });
  })();
  (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [NgxRangeComponent],
                      imports: [
                          i1.FormsModule,
                          i1.ReactiveFormsModule,
                          i4.MatSelectModule,
                          i2.CommonModule
                      ],
                      exports: [NgxRangeComponent]
                  }]
          }], null, null);
  })();

  var RangeValidators = /** @class */ (function () {
      function RangeValidators() {
      }
      RangeValidators.largerSecond = function (control) {
          return RangeValidators.compare('largerSecond')(control);
      };
      RangeValidators.largerFirst = function (control) {
          return RangeValidators.compare('largerFirst')(control);
      };
      RangeValidators.compare = function (type) {
          return function (control) {
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
      };
      return RangeValidators;
  }());

  /*
   * Public API Surface of ngx-range
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NgxRangeComponent = NgxRangeComponent;
  exports.NgxRangeModule = NgxRangeModule;
  exports.RangeValidators = RangeValidators;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-range.umd.js.map
