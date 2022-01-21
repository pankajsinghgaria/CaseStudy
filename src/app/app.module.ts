import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Case1Module } from './case1/case1.module';
import { Case2Module } from './case2/case2.module'
import { Case3Module } from './case3/case3.module'
import { Case4Module } from './case4/case4.module'
import { Case5Module } from './case5/case5.module'
import { Case6Module } from './case6/case6.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Case1Module,
    Case2Module,
    Case3Module,
    Case4Module,
    Case5Module,
    Case6Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
