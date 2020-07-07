import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = new Cart();
    this.createEmptyCart();
    // this.cartService.sendMsg(this.cart);
  }

  ngOnInit(): void {
  }

  async createEmptyCart(): Promise<void> {
    const createdCart = await
      this.cartService.createEmptyCart();
    console.log('Created Cart: ' + createdCart);
    this.cart = createdCart as Cart;
    console.log(this.cart);
  }

}
