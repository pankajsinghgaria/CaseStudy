import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithDecoratersComponent } from './counter-with-decoraters/counter-with-decoraters.component';
import { RouterModule, Routes } from '@angular/router';
import { MainCounterComponent } from './counter-with-decoraters/main-counter/main-counter.component';
import { CounterInputComponent } from './counter-with-decoraters/counter-input/counter-input.component';
import { TimerLogComponent } from './counter-with-decoraters/timer-log/timer-log.component';
import { CountLogComponent } from './counter-with-decoraters/count-log/count-log.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CounterWithDecoratersComponent
  }
];

@NgModule({
  declarations: [
    CounterWithDecoratersComponent,
    MainCounterComponent,
    CounterInputComponent,
    TimerLogComponent,
    CountLogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    // CounterWithDecoratersComponent
  ]
})
export class Case3Module { }
