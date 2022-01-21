import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './ecommerce/ecommerce.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ECommerceComponent
  }
];

@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // ECommerceComponent
  ]
})
export class Case2Module { }
