import { Component, OnInit } from '@angular/core';

import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
  delete(sale: Sale): void {
    this.sales = this.sales.filter(s => s !== sale);
    this.saleService.deleteSale(sale).subscribe();
  }
}
