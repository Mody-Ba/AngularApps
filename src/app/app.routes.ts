import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
export const routes: Routes = [
  {path: 'product',component:ProductsComponent},
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {path:'customer',component:CustomersComponent},
  {path: '', redirectTo: 'customer', pathMatch: 'full'}];
