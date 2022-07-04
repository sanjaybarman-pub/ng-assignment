import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITimerData } from '../timer.model';

@Component({
  selector: 'app-timer-menu',
  templateUrl: './timer-menu.component.html',
  styleUrls: ['./timer-menu.component.scss']
})
export class TimerMenuComponent {
  @Output() getTimerData: EventEmitter<ITimerData[]> = new EventEmitter();
  timerControl = new FormControl();
  timerData: ITimerData[] = [];
  currentTimer;

  onStartOrPause(): void {
    const len = this.timerData.length;
    if(
      this.timerControl.value ||
      (this.timerData.length &&
      !this.timerData[len-1].isActive &&
      this.timerControl.value)
      ) {
      this.timerData.push({
        limit: this.timerControl.value,
        isActive: true,
        startTime:  new Date().toLocaleDateString('en-US') +' '+ new Date().toLocaleTimeString('en-US')
      })
      this.getTimerData.emit(this.timerData);
      clearInterval(this.currentTimer);
      this.startTimer();
    } else if(this.timerData[len-1]?.isActive) {
      this.pauseTimer();
    }
    this.timerControl.reset();
  }

  pauseTimer(): void {
    const len = this.timerData.length;
    this.timerData[len-1].isActive = false;
    this.timerData.splice(len-1,1,{
      ...this.timerData[len-1],
      isActive: false,
      endTime: new Date().toLocaleDateString('en-US') +' '+ new Date().toLocaleTimeString('en-US')
    })
    this.getTimerData.emit(this.timerData);
    clearInterval(this.currentTimer);
  }

  startTimer(): void {
    const len = this.timerData.length-1;
    this.currentTimer = setInterval(()=> {
      const len = this.timerData.length;
      this.timerData[len-1].limit--;
      if(this.timerData[len-1].limit <1) {
        clearInterval(this.currentTimer);
        this.pauseTimer();
      }
    },1000)
  }

  onReset(): void {
    this.timerControl.reset();
    this.timerData = [];
    clearInterval(this.currentTimer);
    this.currentTimer = null;
    this.getTimerData.emit([]);
  }
}
