import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhosRoutingModule } from './carrinhos-routing.module';
import { CarrinhosComponent } from './carrinhos.component';


@NgModule({
  declarations: [
    CarrinhosComponent
  ],
  imports: [
    CommonModule,
    CarrinhosRoutingModule
  ]
})
export class CarrinhosModule { }
