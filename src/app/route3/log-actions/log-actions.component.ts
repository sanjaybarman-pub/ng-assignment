import { Component, Input } from '@angular/core';
import { ITimerData } from '../timer.model';

@Component({
  selector: 'app-log-actions',
  templateUrl: './log-actions.component.html',
  styleUrls: ['./log-actions.component.scss'],
})
export class LogActionsComponent {
  @Input() actionList: ITimerData[] = [];

  list: ITimerData[] = [];
}
