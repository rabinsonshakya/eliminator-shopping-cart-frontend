import { Cart } from './../../models/cart';
import { CartService } from './../../service/cart.service';
import { ProductService } from './../../service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductDetail } from 'src/app/models/product-detail';
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productDetailsList: ProductDetail[];
  contextCart: Cart;
  totalItems= 0;

  constructor(private productService: ProductService, private cartService: CartService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.cartService.getCartWithId(this.activatedRoute.snapshot.url[1].path).subscribe((cart: Cart) => this.contextCart = cart);
    this.productService.getProduct().subscribe(data => this.productDetailsList = data);
    this.productService.getMsg().subscribe((product: ProductDetail) => { this.addOrUpdateCart(product); });
  }

  addOrUpdateCart(product: ProductDetail): any {
    this.cartService.updateCart(this.activatedRoute.snapshot.url[1].path,
      this.mapToUpdateCart(product)).subscribe(data => {
        this.contextCart = data;
      });
  }

  mapToUpdateCart(product: ProductDetail): Cart {
    let productExists = false;
    for (let i in this.contextCart.products) {
      if (this.contextCart.products[i].id === product.id) {
        this.contextCart.products[i].quantity++;
        productExists = true;
        this.calculateTotalAmountandItemNumbers();
        return this.contextCart;
      }
    }
    if (!productExists) {
      this.contextCart.products.push(product);
      this.contextCart.totalAmount = 0;
      this.contextCart.products.forEach(element => {
        this.contextCart.totalAmount += (element.quantity * element.price);
      });
      this.calculateTotalAmountandItemNumbers();
      return this.contextCart;
    }
  }

  private calculateTotalAmountandItemNumbers(): void {
    this.totalItems = 0;
    this.contextCart.totalAmount = 0;
    this.contextCart.products.forEach(element => {
      this.contextCart.totalAmount += (element.quantity * element.price);
      this.totalItems += element.quantity;
    });
  }
}
