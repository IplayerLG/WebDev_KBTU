import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../films.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesWithProducts: any;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAlternativeProducts();
  }

  getProducts() {
    this.productsService.getProductsList().subscribe(products => this.categoriesWithProducts = products)
  }

  getAlternativeProducts() {
    this.productsService.getAlternativeProductList().subscribe(products => this.categoriesWithProducts = products)
  }
  click(){
    this.categoriesWithProducts[1].view_countss++;
  }
}
