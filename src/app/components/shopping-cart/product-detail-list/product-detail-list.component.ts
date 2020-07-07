import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductDetail } from '../../../models/product-detail';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit {
  @Input() productItem: ProductDetail;

  contextCart: Cart;

  constructor(private productService: ProductService, private cartService: CartService, private activatedRoute: ActivatedRoute) {
    this.cartService.getCartWithId(this.activatedRoute.snapshot.url[1].path).subscribe((cart: Cart) => this.contextCart = cart);
  }

  ngOnInit(): void {
  }

  removeItem() {
    debugger;
    console.log(this.contextCart.products);
    console.log(this.productItem);
    for (let i in this.contextCart.products) {
      if (this.contextCart.products[i].id === this.productItem.id) {
        this.contextCart.products.splice(Number(i), 1);
      }
    }
    this.calculateTotalAmountandItemNumbers();
    this.cartService.updateCart(this.contextCart.id, this.contextCart).subscribe();
    window.location.reload();
  }

  private calculateTotalAmountandItemNumbers(): void {
    this.contextCart.totalAmount = 0;
    this.contextCart.products.forEach(element => {
      this.contextCart.totalAmount += (element.quantity * element.price);
    });
  }

  stepUp() {
    for (let i in this.contextCart.products) {
      if (this.contextCart.products[i].id === this.productItem.id) {
        this.contextCart.products[i].quantity++;
      }

    }
    this.calculateTotalAmountandItemNumbers();
    this.cartService.updateCart(this.contextCart.id, this.contextCart).subscribe();
    window.location.reload();
  }

  stepDown() {
    for (let i in this.contextCart.products) {
      if (this.contextCart.products[i].id === this.productItem.id) {
        if (this.contextCart.products[i].quantity > 1) {
          this.contextCart.products[i].quantity--;
        }
      }
    }
    this.calculateTotalAmountandItemNumbers();
    this.cartService.updateCart(this.contextCart.id, this.contextCart).subscribe();
    window.location.reload();
  }

}
