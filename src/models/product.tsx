export class Product {
    id: string;
    name: string;
    imagesUrl: string[];
    category: string;
    isNew: boolean;
    price: number;
    sale: number;
    description: string;
    dimensions: string;
    productFeatures: string;
    productOptions: string;
    timestamp: string;

    constructor(params : {
        id: string,
        name: string,
        imagesUrl: string[],
        price: number,
        sale: number,
        category: string,
        isNew: boolean,
        description: string,
        dimensions: string;
        productFeatures: string;
        productOptions: string;
        timestamp: string;
    }){
        this.id = params.id;
        this.name = params.name;
        this.imagesUrl = params.imagesUrl;
        this.isNew = params.isNew;
        this.category = params.category;
        this.price = params.price;
        this.sale = params.sale;
        this.description = params.description;
        this.dimensions = params.dimensions;
        this.productFeatures = params.productFeatures;
        this.productOptions = params.productOptions;
        this.timestamp = params.timestamp;
    }

}