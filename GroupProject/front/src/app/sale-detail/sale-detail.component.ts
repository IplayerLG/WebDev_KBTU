import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sale } from '../sale';
import { SaleService } from '../sale.service';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  @Input() sale: Sale;
  @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private saleService: SaleService,
    private location: Location,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    this.getSale();
    this.getUser();
  }
  getUser(): void {
    this.authService.getUserDetails(1).subscribe(
      user => this.user = user
    )
  }
  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getSale(id)
      .subscribe(sale => this.sale = sale);
  }
  status(): Boolean {
    return !(this.user.id == this.sale.user);
  }
  subs(): void {
    this.sale.user = this.user.id;
    this.sale.subscribers++;
    this.saleService.updateSale(this.sale).subscribe();
  }
  unsubs(): void {
    this.sale.user = 0;
    this.sale.subscribers--;
    this.saleService.updateSale(this.sale).subscribe();
  }
}
