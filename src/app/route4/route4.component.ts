import { Component } from '@angular/core';
import { ITimerData } from './timer.model';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss'],
})
export class Route4Component {
  timerList: ITimerData[] = [];
  currentTimerData: ITimerData;

  updateList(list) {
    this.timerList = list;
    this.currentTimerData = list[list.length - 1];
  }
}
