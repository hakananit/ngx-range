import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxRangeComponent } from './ngx-range.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class NgxRangeModule {
}
NgxRangeModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRangeModule });
NgxRangeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRangeModule_Factory(t) { return new (t || NgxRangeModule)(); }, imports: [[
            FormsModule,
            ReactiveFormsModule,
            MatSelectModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRangeModule, { declarations: [NgxRangeComponent], imports: [FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        CommonModule], exports: [NgxRangeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRangeModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJhbmdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1yYW5nZS9zcmMvbGliL25neC1yYW5nZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFZL0MsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxrQkFSaEI7WUFDUCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixZQUFZO1NBQ2I7d0ZBR1UsY0FBYyxtQkFUVixpQkFBaUIsYUFFOUIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWSxhQUVKLGlCQUFpQjt1RkFFaEIsY0FBYztjQVYxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4UmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL25neC1yYW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neFJhbmdlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTmd4UmFuZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5neFJhbmdlTW9kdWxlIHsgfVxuIl19