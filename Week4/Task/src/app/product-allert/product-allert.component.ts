import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-allert',
  templateUrl: './product-allert.component.html',
  styleUrls: ['./product-allert.component.css']
})
export class ProductAllertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}