import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeSelectComponent } from './mat-tree-select.component';
import { ExpandCollapseModule } from '../expand-collapse/expand-collapse.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from "../icon/icon.module";



@NgModule({
  declarations: [
    MatTreeSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ExpandCollapseModule,
    MatTreeModule,
    MatIconModule,
    IconModule
],
  exports: [
    MatTreeSelectComponent
  ]
})
export class MatTreeSelectModule { }
