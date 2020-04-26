import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private saleService: SaleService) { }
  sales: Sale[];
  ngOnInit(): void {
    this.getSales();
  }
  getSales(): void {
    this.saleService.getSales().subscribe(
      sales => this.sales = sales
    )
  }
}
