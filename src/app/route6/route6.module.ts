import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route6-routing.module';
import { Route6Component } from './route6.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    Route6Component
  ],
  imports: [
    CommonModule,
    Route6RoutingModule,
    ScrollingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class Route6Module { }
