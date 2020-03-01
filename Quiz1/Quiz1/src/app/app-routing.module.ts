import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './films/product.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent},
  { path: 'films', component: CategoriesComponent },
  { path: 'films/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
