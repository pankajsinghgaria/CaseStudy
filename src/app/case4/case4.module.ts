import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithSubjectComponent } from './counter-with-subject/counter-with-subject.component';



@NgModule({
  declarations: [
    CounterWithSubjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterWithSubjectComponent
  ]
})
export class Case4Module { }
