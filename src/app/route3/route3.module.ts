import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatIconModule } from "@angular/material/icon";
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogActionsComponent } from './log-actions/log-actions.component';
import { CountActionsComponent } from './count-actions/count-actions.component';
import { TimerMenuComponent } from './timer-menu/timer-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input";
import {  MatButtonModule} from "@angular/material/button";
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    Route3Component,
    DisplayTimerComponent,
    LogActionsComponent,
    CountActionsComponent,
    TimerMenuComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    Route3RoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class Route3Module { }
