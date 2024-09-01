export class Product {
    id: string;
    name: string;
    imageUrl: string;
    category: string;
    isNew: boolean;
    price: number;
    sale: number;
    dimensions: string;
    productFeatures: string;
    productOptions: string;

    constructor(params : {
        name: string,
        imageUrl: string,
        price: number,
        sale: number,
        category: string,
        isNew: boolean,
        id?: string,
        dimensions: string;
        productFeatures: string;
        productOptions: string;
    }){
        this.id = 'NEW';
        this.name = params.name;
        this.imageUrl = params.imageUrl;
        this.isNew = params.isNew;
        this.category = params.category;
        this.price = params.price;
        this.sale = params.sale;
        this.dimensions = params.dimensions;
        this.productFeatures = params.productFeatures;
        this.productOptions = params.productOptions;
    }

}