import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'route4-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent implements OnInit {

  timerCount: number;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimerData().subscribe(res => {
      this.timerCount =[...res].pop().limit;
    })
  }

}
