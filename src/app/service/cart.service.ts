import { Cart } from '../models/cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  url = 'http://localhost:8090/eliminator/shoppingcart/';
  subject = new Subject();
  cart: Cart;

  constructor(private http: HttpClient) { }

  getCartWithId(id: string): Observable<Cart> {
    return this.http.get<Cart>(this.url + id);
  }

  createCart(cart: Cart): Observable<Cart> {
    debugger;
    return this.http.post<Cart>(this.url, cart);
  }

  updateCart(cartId: string, cart: Cart): Observable<Cart> {
    debugger;
    console.log(cart);
    return this.http.post<Cart>(this.url + cartId, cart);
  }

  async createEmptyCart(): Promise<Cart> {
    debugger;
    return await this.http.post<Cart>(this.url,
      { totalAmount: 0, orderCompleted: false, dateCreated: new Date(), products: [] }).toPromise();
  }

  completeOrder(cart: Cart): Observable<Cart> {
    debugger;
    cart.orderCompleted = true;
    return this.http.put<Cart>(this.url + cart.id + '/checkout', cart);
  }

}
