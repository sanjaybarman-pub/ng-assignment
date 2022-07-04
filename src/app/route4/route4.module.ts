import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { TimerMenuComponent } from './timer-menu/timer-menu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LogActionsComponent } from './log-actions/log-actions.component';
import { CountActionsComponent } from './count-actions/count-actions.component';


@NgModule({
  declarations: [
    Route4Component,
    DisplayTimerComponent,
    TimerMenuComponent,
    LogActionsComponent,
    CountActionsComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class Route4Module { }
