import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithDecoratersComponent } from './counter-with-decoraters/counter-with-decoraters.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CounterWithDecoratersComponent
  }
];

@NgModule({
  declarations: [
    CounterWithDecoratersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // CounterWithDecoratersComponent
  ]
})
export class Case3Module { }
