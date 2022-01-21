import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FloatingBannerComponent
  }
];

@NgModule({
  declarations: [
    FloatingBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // FloatingBannerComponent
  ]
})
export class Case1Module { }
