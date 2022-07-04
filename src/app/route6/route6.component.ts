import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Route6Component {
  items = [];
  constructor() {
    // Creating default array for Div
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

  /*
   * When user click on Div
   */
  onClick(id: number) {
    id++;
    const sffx = id == 1 ? 'st' : id == 2 ? 'nd' : id == 3 ? 'rd' : 'th';
    window.alert(`Button in ${id + sffx} div clicked.`);
  }
}
