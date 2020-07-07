import { Component, OnInit, Input } from '@angular/core';
import { ProductDetail } from 'src/app/models/product-detail';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productItem: ProductDetail;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.productItem.quantity = 1;
    this.productService.sendMsg(this.productItem);
  }

}
