import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { Route2Component } from './route2.component';
import { Route2RoutingModule } from './route2-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Route2Component,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class Route2Module { }
