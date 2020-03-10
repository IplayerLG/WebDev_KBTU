import { Component, OnInit } from '@angular/core';

import { items } from '../productItems';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  items = items;
  constructor() { }

  ngOnInit() {
  }

}
