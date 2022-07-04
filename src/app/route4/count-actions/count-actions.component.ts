import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ITimerData } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'route4-count-actions',
  templateUrl: './count-actions.component.html',
  styleUrls: ['./count-actions.component.scss'],
})
export class CountActionsComponent implements OnInit {
  actionList: ITimerData[] = [];
  pausedCount: number = 0;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.getTimerData().subscribe((res) => {
      this.actionList = res;
      this.pausedCount = res.filter((el) => !el.isActive).length;
    });
  }
}
