import ProductsList from "./ProductsList";

const Products = () => {

    return ( 
        <div className="items-center flex-col pt-20">
            <div className="text-center">
                <h1 className="text-xl">🔥 NEW COLLECTION</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'new'} />
            <br />
            <div className="text-center">
                <h1 className="text-xl">SOFAS</h1>
                <p className="text-gray-500 text-sm">PROVIDING MOST COMFORTABLE SOFAS</p>
            </div>
            <ProductsList category={'sofa'} />
            <br />
            <div className="text-center">
                <h1 className="text-xl">SALONS</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'new'} />
            <br />
        </div>
     );
}

export default Products;