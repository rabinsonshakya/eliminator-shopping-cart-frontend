import { Cart } from './../../models/cart';
import { CartService } from './../../service/cart.service';
import { ProductService } from './../../service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductDetail } from 'src/app/models/product-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productDetailsList: ProductDetail[];
  @Input() cart: Cart;
  contextCart: Cart;

  constructor(private productService: ProductService, private cartService: CartService, private activatedRoute: ActivatedRoute) {
    this.contextCart = new Cart();
    this.contextCart.id = this.activatedRoute.snapshot.url[1].path;
  }


  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => this.productDetailsList = data);
    this.productService.getMsg().subscribe((product: ProductDetail) => { this.addOrUpdateCart(product); });
    this.cartService.getMsg().subscribe((cart: Cart) => console.log(cart));

  }

  addOrUpdateCart(product: ProductDetail): any {
    this.cartService.updateCart(this.activatedRoute.snapshot.url[1].path,
      this.mapToUpdateCart(this.cart, product)).subscribe(data => {
        this.contextCart = data;
      });
  }

  mapToUpdateCart(oldCart: Cart, product: ProductDetail): Cart {
    this.contextCart.orderCompleted = false;
    this.contextCart.products.push(product);
    return this.contextCart;
  }
}
