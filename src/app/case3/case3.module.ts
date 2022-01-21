import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithDecoratersComponent } from './counter-with-decoraters/counter-with-decoraters.component';



@NgModule({
  declarations: [
    CounterWithDecoratersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterWithDecoratersComponent
  ]
})
export class Case3Module { }
