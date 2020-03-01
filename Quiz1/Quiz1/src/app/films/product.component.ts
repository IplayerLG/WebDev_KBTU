import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../films.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, ) { }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProductById(id).subscribe(item => this.product = item)
  }

}
