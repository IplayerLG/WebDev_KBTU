import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ChangeComponent } from './change/change.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: SaleDetailComponent},
  {path: 'account', component: UserAccountComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'change/:id', component: ChangeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
