import ProductsList from "./ProductsList";

const Products = () => {

    return ( 
        <div className="items-center flex-col pt-20">
            <div className="text-center">
                <h1 className="text-xl">🔥 NEW COLLECTION</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'new'} />
            <hr className="w-4/5 m-auto" />
            <div className="text-center mt-4">
                <h1 className="text-xl">SOFAS</h1>
                <p className="text-gray-500 text-sm">PROVIDING MOST COMFORTABLE SOFAS</p>
            </div>
            <ProductsList category={'sofa'} />
            <hr className="w-4/5 m-auto" />
            <div className="text-center mt-4">
                <h1 className="text-xl">Bedrooms</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'bedroom'} />
            <hr className="w-4/5 m-auto" />
            <div className="text-center mt-4">
                <h1 className="text-xl">Tables</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'table'} />
            <hr className="w-4/5 m-auto" />
            <div className="text-center mt-4">
                <h1 className="text-xl">Salons</h1>
                <p className="text-gray-500 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
            </div>
            <ProductsList category={'salon'} />
            <hr className="w-4/5 m-auto" />
        </div>
     );
}

export default Products;