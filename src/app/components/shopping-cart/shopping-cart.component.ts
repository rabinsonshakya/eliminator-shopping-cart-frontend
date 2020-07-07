import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  contextCart: Cart;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cartService.getCartWithId(this.activatedRoute.snapshot.url[1].path).subscribe((cart: Cart) => this.contextCart = cart);
  }

}
