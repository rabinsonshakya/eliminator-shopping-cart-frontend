import { ProductDetail } from '../models/product-detail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:8090';
  subject = new Subject();

  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<ProductDetail[]> {
    debugger;
    return this.http.get<ProductDetail[]>(this.url + '/eliminator/productDetails');
  }

  sendMsg(product: ProductDetail): void {
    console.log(product);
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

}
