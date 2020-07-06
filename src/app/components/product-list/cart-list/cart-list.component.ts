import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) {
     this.createEmptyCart();
  }

  ngOnInit(): void {
  }

  async createEmptyCart(): Promise<void> {
    const createdCart = await
      this.cartService.createEmptyCart();
    console.log('Created Cart: ' + createdCart);
    this.cart = createdCart as Cart;
    this.cartService.sendMsg(createdCart as Cart);
  }

}
