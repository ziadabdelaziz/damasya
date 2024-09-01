import { useContext } from "react";
import ProductsList from "./ProductsList";
import ProductsContext, { ProductsState } from "../../app/products-context";

const Products = () => {
    const productsState = useContext<ProductsState>(ProductsContext);

    return ( 
        <div className="items-center flex-col pt-20">
            <div className="text-center">
                <h1 className="text-xl">🔥 NEW COLLECTION</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList products={productsState.products} />
        </div>
     );
}

export default Products;