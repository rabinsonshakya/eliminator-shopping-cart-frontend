import { ProductDetail } from 'src/app/models/product-detail';

export class Cart {
    id?: string;
    totalAmount: number;
    dateCreated: Date;
    orderCompleted: boolean;
    products: ProductDetail[] = [];

    // constructor(id, totalAmount, dateCreated, orderCompleted, product) {
    //     this.id = id;
    //     this.totalAmount = totalAmount;
    //     this.dateCreated = dateCreated;
    //     this.orderCompleted = orderCompleted;
    //     this.products.push(product);
    // }
}
