import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(
    private saleService: SaleService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }
  sales: Sale[];
  ngOnInit(): void {
    this.getSales();
  }
  getSales(): void {
    this.saleService.getSales().subscribe(
      sales => this.sales = sales
    )
  }
  add(company, deadline, cost, value, discription): void {
    this.saleService.addSale({company, deadline, cost, value, discription} as Sale)
      .subscribe(hero => {
        this.sales.push(hero);
      });
  }
  goBack(): void {
    this.location.back();
  }
}
