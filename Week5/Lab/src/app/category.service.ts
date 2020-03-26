import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories';
import { Observable, of } from 'rxjs';
import { Product } from './product'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories(): Observable<Category[]> {
    return of(CATEGORIES)
  }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(
      category => category.id === id));
  }
}

