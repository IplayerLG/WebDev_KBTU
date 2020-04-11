import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private location: Location,
  ) { }
  
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.authService.getUserDetails().subscribe(
      userInfo => this.user = userInfo
    )
  }
}
