import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeSelectModule } from '@shared/modules/mat-tree-select/mat-tree-select.module';
import { ExpandCollapseModule } from '@shared/modules/expand-collapse/expand-collapse.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    MatTreeSelectModule,
    ExpandCollapseModule,
    SearchInputModule
  ]
  
})
export class HomeModule { }
