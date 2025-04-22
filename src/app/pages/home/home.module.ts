import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeSelectModule } from '@shared/modules/mat-tree-select/mat-tree-select.module';
import { ExpandCollapseModule } from '@shared/modules/expand-collapse/expand-collapse.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    MatTreeSelectModule,
    ExpandCollapseModule
  ]
  
})
export class HomeModule { }
