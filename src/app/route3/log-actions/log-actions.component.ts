import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITimerData } from '../timer.model';

@Component({
  selector: 'app-log-actions',
  templateUrl: './log-actions.component.html',
  styleUrls: ['./log-actions.component.scss']
})
export class LogActionsComponent implements OnInit, DoCheck {
@Input() actionList: ITimerData[] = [];

list: ITimerData[] = [];
  ngDoCheck(): void {
    // console.log(this.actionList);
    // if(this.actionList.length)
    // this.list.push(this.actionList.pop());
    // console.log(this.list);      
  }
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
