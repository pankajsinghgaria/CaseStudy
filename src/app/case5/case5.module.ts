import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkSheetComponent } from './mark-sheet/mark-sheet.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MarkSheetComponent
  }
];

@NgModule({
  declarations: [
    MarkSheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // MarkSheetComponent
  ]
})
export class Case5Module { }
