import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {IProductDetail} from './IProductDetail';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  constructor(private _productService: ProductService ) { }
  title = "Hello";
  productDertailsList: IProductDetail[];

  ngOnInit(): void {
    this.getPrescriber();
  }


  searchList(): any {
    this.getPrescriber();
  }

  getPrescriber(): void {
    debugger;
    this._productService.getProduct().subscribe(data =>  this.productDertailsList = data);
    debugger;
  }

}
