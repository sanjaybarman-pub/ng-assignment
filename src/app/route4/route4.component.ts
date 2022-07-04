import { Component, OnInit } from '@angular/core';
import { ITimerData } from './timer.model';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss']
})
export class Route4Component implements OnInit {

  timerList: ITimerData[] = [];
  currentTimerData: ITimerData;


  constructor() { }

  
  updateList(list) {
    this.timerList = list;
    this.currentTimerData = list[list.length-1];

    // console.log(this.updatedTimerList);
    
  }

  ngOnInit(): void {
  }

}
