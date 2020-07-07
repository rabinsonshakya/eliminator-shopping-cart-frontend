import { CartListComponent } from './components/product-list/product-home/cart-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'cart/:id', component: ShoppingCartComponent },
  { path: '', component: CartListComponent },
  { path: 'products/:id', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
