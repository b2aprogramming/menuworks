import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeSelectInputComponent } from './mat-tree-select-input.component';
import { MatTreeSelectInputControlService } from './mat-tree-select-input-control.service';
import { MatTreeModule } from '@angular/material/tree';
import { IconModule } from '../icon/icon.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    MatTreeSelectInputComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    IconModule
  ],
  exports: [
    MatTreeSelectInputComponent
  ],
  providers: [
    MatTreeSelectInputControlService
  ]
})
export class MatTreeSelectInputModule { }
