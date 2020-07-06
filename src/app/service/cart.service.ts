import { Cart } from '../models/cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subject, Observable } from 'rxjs';
import { ProductDetail } from '../models/product-detail';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://localhost:8090';
  subject = new Subject();
  cart: Cart;

  constructor(private http: HttpClient) { }

  createCart(cart: Cart): any {
    debugger;
    return this.http.post(this.url + '/eliminator/shoppingcart', cart);
  }

  updateCart(cartId: string, cart: Cart): any {
    debugger;
    return this.http.post(this.url + '/eliminator/shoppingcart/' + cartId, cart);
  }

  async createEmptyCart(): Promise<object> {
    debugger;
    return await this.http.post(this.url + '/eliminator/shoppingcart',
      { totalAmount: 0, orderCompleted: false, dateCreated: new Date(), products: [] }).toPromise();
  }

  sendMsg(cart: Cart): any {
    debugger;
    console.log(cart);
    this.subject.next(cart);
  }

  getMsg(): any {
    debugger;
    return this.subject.asObservable();
  }


}
