export class ProductDetail {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imgUrl: string;
    quantity?: number;
    constructor(id, name, description, price, category, imgUrl){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imgUrl = imgUrl;
        this.quantity = 0;
    }
}
