import { httpInterceptorProviders } from './Interceptors/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
  
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule
  ],providers:[ 
  ]
})
export class SharedModule { }
