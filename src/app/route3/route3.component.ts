import { Component } from '@angular/core';
import { ITimerData } from './timer.model';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component {
  updatedTimerList: ITimerData[] = [];
  currentTimerData: ITimerData;

  updateList(list) {
    this.updatedTimerList = list;
    this.currentTimerData = list[list.length - 1];
  }
}
