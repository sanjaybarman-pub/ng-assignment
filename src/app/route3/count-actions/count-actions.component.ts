import { Component, DoCheck, Input } from '@angular/core';
import { ITimerData } from '../timer.model';

@Component({
  selector: 'app-count-actions',
  templateUrl: './count-actions.component.html',
  styleUrls: ['./count-actions.component.scss'],
})
export class CountActionsComponent implements DoCheck {
  @Input() actionList: ITimerData[] = [];
  startedCount: number;
  pausedCount: number;

  ngDoCheck() {
    this.pausedCount = this.actionList.filter((el) => !el.isActive).length;
  }
}
