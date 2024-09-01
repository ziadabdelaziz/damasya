import { createContext } from "react";
import { Product } from "../models/product";

export class ProductsState {
    products: Product[];
    setState: Function;

    constructor(products: Product[], setState: Function) {
        this.products = products;
        this.setState = setState;
    }
}

const ProductsContext = createContext<ProductsState>(
    new ProductsState([], ()=>{})
);

export default ProductsContext;
