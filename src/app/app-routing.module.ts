import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/case1', pathMatch: 'full' },
  { path: 'case1', loadChildren: () => import('./case1/case1.module').then(m => m.Case1Module) },
  { path: 'case2', loadChildren: () => import('./case2/case2.module').then(m => m.Case2Module) },
  { path: 'case3', loadChildren: () => import('./case3/case3.module').then(m => m.Case3Module) },
  { path: 'case4', loadChildren: () => import('./case4/case4.module').then(m => m.Case4Module) },
  { path: 'case5', loadChildren: () => import('./case5/case5.module').then(m => m.Case5Module) },
  { path: 'case6', loadChildren: () => import('./case6/case6.module').then(m => m.Case6Module) }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
