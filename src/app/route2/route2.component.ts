import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Product } from '../shared/data.model';
import { DataService } from '../shared/data.service';

enum Sort {
  HighToLow = 'highToLow',
  LowToHigh = 'lowToHigh',
  Recommended = 'recommended',
}

interface ISort {
  name: string;
  value: string;
}

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component implements OnInit {
  productList: Product[] = [];
  currentView: string = 'grid';
  sortControl: FormControl = new FormControl();
  sortingList: ISort[] = [
    { name: 'RECOMMENDED', value: Sort.Recommended },
    { name: 'PRICE: LOW TO HIGH', value: Sort.LowToHigh },
    { name: 'PRICE: HIGH TO LOW', value: Sort.HighToLow },
  ];
  selectedSort: string;

  constructor(private dataService: DataService) {
    this.dataService.getProducts().subscribe((res) => {
      this.productList = res.products;
    });
  }
  onChange(ev: MatButtonToggleChange) {
    this.currentView = ev.value;
  }
  ngOnInit(): void {
    this.sortControl.valueChanges.subscribe((res) => {
      if (res === Sort.LowToHigh)
        this.productList.sort((a, b) => a.price - b.price);
      else if (res === Sort.HighToLow)
        this.productList.sort((a, b) => b.price - a.price);
      else this.productList.sort((a, b) => a.id - b.id);
    });
  }
}
