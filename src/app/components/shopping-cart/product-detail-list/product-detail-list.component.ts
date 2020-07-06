import { CartService } from '../../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../../../models/product-detail';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit {

  productsInCart: ProductDetail[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


}
