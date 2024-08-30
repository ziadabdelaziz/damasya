class Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    sale: number;
    isNew: boolean;
    dimensions: string;
    productFeatures: string;
    productOptions: string;

    constructor(params : {
        name: string,
        imageUrl: string,
        price: number,
        sale: number
        isNew: boolean,
        id?: string,
        dimensions: string;
        productFeatures: string;
        productOptions: string;
    }){
        this.id = 'NEW';
        this.name = params.name;
        this.imageUrl = params.imageUrl;
        this.price = params.price;
        this.sale = params.sale;
        this.isNew = params.isNew;
        this.dimensions = params.dimensions;
        this.productFeatures = params.productFeatures;
        this.productOptions = params.productOptions;
    }

}