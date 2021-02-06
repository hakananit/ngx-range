import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxRangeComponent } from './ngx-range.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxRangeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [NgxRangeComponent]
})
export class NgxRangeModule { }
