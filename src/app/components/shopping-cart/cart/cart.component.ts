import { CartService } from 'src/app/service/cart.service';
import { Cart } from './../../../models/cart';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() contextCart: Cart;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  checkOut() {
    this.cartService.completeOrder(this.contextCart).subscribe();
    this.router.navigate(['/']);
  }

}
