import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORY_LIST } from './categoryList';
import { ALTERNATIVE_CATEGORY_LIST } from './alternativeCategoryList';
import { ONLY_PRODUCTS } from './onlyProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = CATEGORY_LIST;
  alternativeProducts = ALTERNATIVE_CATEGORY_LIST;

  getProductsList(): Observable<any[]> {
    return of(this.products);
  }

  initCategories() {
    this.alternativeProducts.forEach((category: any) => category.products = ONLY_PRODUCTS
        .filter(product => product.categoryId === category.id));
  }
  
  getAlternativeProductList(): Observable<any[]> {
    this.initCategories();
    return of(this.alternativeProducts);
  }

  getProductById(id): Observable<any> {
    const ALL_PRODUCTS = this.products.map(category => category.products).reduce((a, b) => a.concat(b));
    const productWeNeed = ALL_PRODUCTS.find((product: any) => product.id === id)
    return of(productWeNeed);
  }
}
