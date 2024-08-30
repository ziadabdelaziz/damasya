import ProductsList from "./ProductsList";

const Products = () => {
    return ( 
        <div className="items-center flex-col pt-20">
            <div className="text-center">
                <h1 className="text-xl">🔥 NEW COLLECTION</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList products={[]} />
        </div>
     );
}

export default Products;