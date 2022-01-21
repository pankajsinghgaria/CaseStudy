import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';



@NgModule({
  declarations: [
    FloatingBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FloatingBannerComponent
  ]
})
export class Case1Module { }
