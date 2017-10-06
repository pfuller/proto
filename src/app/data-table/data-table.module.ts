import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableInputService } from './data-table-input.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataTableComponent],
  exports: [
    CommonModule,
    DataTableComponent
  ],
  providers: [DataTableInputService]
})
export class DataTableModule { }
