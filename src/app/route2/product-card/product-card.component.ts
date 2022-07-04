import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/shared/data.model';

@Component({
  selector: 'route2-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductCardComponent implements OnInit {

  @Input() productDetails: Product;

  constructor() { }

  ngOnInit(): void {
   }

   getPrice(cost: number, dis: number) {
    return (cost - (cost*dis)/100).toFixed(2);
   }

}
