import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatTreeSelectModule } from '@shared/modules/mat-tree-select/mat-tree-select.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTreeSelectModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
