import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredients2Component } from './ingredients2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Ingredients2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: Ingredients2Component}
    ])
  ]
})
export class Ingredients2Module { }
