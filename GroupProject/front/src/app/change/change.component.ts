import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  @Input() sale: Sale;
  constructor(
    private saleService: SaleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSale();
  }
  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getSale(id)
      .subscribe(sale => this.sale = sale);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.saleService.deleteSale(this.sale).subscribe()
    this.saleService.addSale(this.sale).subscribe()
    this.goBack()
    // this.saleService.updateSale(this.sale)
    //   .subscribe(() => this.goBack());
  }
}
