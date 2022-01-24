import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithSubjectComponent } from './counter-with-subject/counter-with-subject.component';
import { RouterModule, Routes } from '@angular/router';
import { MainCounterComponent } from './counter-with-subject/main-counter/main-counter.component';
import { CountLogComponent } from './counter-with-subject/count-log/count-log.component';
import { CounterInputComponent } from './counter-with-subject/counter-input/counter-input.component';
import { TimerLogComponent } from './counter-with-subject/timer-log/timer-log.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CounterWithSubjectComponent
  }
];

@NgModule({
  declarations: [
    CounterWithSubjectComponent,
    MainCounterComponent,
    CountLogComponent,
    CounterInputComponent,
    TimerLogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    // CounterWithSubjectComponent
  ]
})
export class Case4Module { }
