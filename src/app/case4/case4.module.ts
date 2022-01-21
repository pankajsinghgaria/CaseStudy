import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithSubjectComponent } from './counter-with-subject/counter-with-subject.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CounterWithSubjectComponent
  }
];

@NgModule({
  declarations: [
    CounterWithSubjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // CounterWithSubjectComponent
  ]
})
export class Case4Module { }
