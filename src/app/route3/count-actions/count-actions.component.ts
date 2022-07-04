import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ITimerData } from '../timer.model';

@Component({
  selector: 'app-count-actions',
  templateUrl: './count-actions.component.html',
  styleUrls: ['./count-actions.component.scss']
})
export class CountActionsComponent implements OnInit, OnChanges, DoCheck {
@Input() actionList: ITimerData[] = [];
startedCount: number;
pausedCount: number;

ngDoCheck() {
  // console.log(this.actionList);
  this.pausedCount = this.actionList.filter(el => !el.isActive).length
}

ngOnChanges() {
  
}


  constructor() { }

  ngOnInit(): void {
  }

}
