import {
  Component,
  OnInit,
} from '@angular/core';
import { ITimerData } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'route4-log-actions',
  templateUrl: './log-actions.component.html',
  styleUrls: ['./log-actions.component.scss'],
})
export class LogActionsComponent implements OnInit {
  actionList: ITimerData[] = [];

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.getTimerData().subscribe((res) => {
      this.actionList = res;
    });
  }
}
