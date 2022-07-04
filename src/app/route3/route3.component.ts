import { Component, OnInit } from '@angular/core';
import { ITimerData } from './timer.model';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  updatedTimerList: ITimerData[] = [];
  currentTimerData: ITimerData;
  

  constructor() { }

  updateList(list) {
    this.updatedTimerList = list;
    this.currentTimerData = list[list.length-1];

    // console.log(this.updatedTimerList);
    
  }


  ngOnInit(): void {
  }

}
