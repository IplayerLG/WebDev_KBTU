import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAllertComponent } from './product-allert/product-allert.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        { path: '', component: ProductItemComponent },
      ])
    ],
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAllertComponent,
      ProductItemComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/