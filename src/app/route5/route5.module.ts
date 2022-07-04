import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    Route5Component,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    MatIconModule
  ]
})
export class Route5Module { }
