import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITimerData } from './timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timerData: Subject<ITimerData[]> = new Subject();

  constructor() { }

  getTimerData(): Observable<ITimerData[]> {
    return this.timerData;
  }

  updateTimerData(timerData: ITimerData[]) {
    this.timerData.next(timerData)
  }

}
