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
  user: User;
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
    this.authService.getUserDetails().subscribe(
      user => this.user = user
    )
  }
  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getSale(id)
      .subscribe(sale => this.sale = sale);
  }
  status(): Boolean {
    console.log(this.user.sales.find(sale => this.sale.id == sale));
    return this.user.sales.find(sale => this.sale.id == sale) == undefined;
  }
  subs(): void {
    this.user.sales.push(this.sale.id);
    this.sale.subscribers++;
  }
  unsubs(): void {
    this.user.sales = this.user.sales.filter(sale => sale !== this.sale.id)
    this.sale.subscribers--;
  }
}
