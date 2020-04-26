import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';
import { User } from '../user';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  @Input() user: User;
  sales: Sale[];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private location: Location,
    private saleService: SaleService,
  ) { }
  
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.authService.getUserDetails(1).subscribe(
      userInfo => this.user = userInfo
    )
  }
  getSales(): void {
    this.saleService.getSales().subscribe(
      sales => this.sales = sales
    )
  }
}
