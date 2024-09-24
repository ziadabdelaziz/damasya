import { createContext } from "react";
import { Product } from "../../models/product";

export class ProductsState {
    products: Product[];
    setState: Function;

    constructor(products: Product[], setState: Function) {
        this.products = products;
        this.setState = setState;
    }

    productOfCategory(category: string) : Product[] {
        return this.products.filter((product) => {
            if (category == 'new') return product.isNew;
            else return product.category == category;
        });
    }
}

const ProductsContext = createContext<ProductsState>(
    new ProductsState([], ()=>{})
);

export default ProductsContext;
