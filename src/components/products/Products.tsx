import Footer from "../home/Footer";
import ProductsList from "./ProductsList";

const Products = () => {

    return (
        <div className="items-center flex-col pt-20">
            <section id='new' className='block'>
                <div className="text-center">
                    <h1 className="text-xl">🔥 NEW COLLECTION</h1>
                    <p className="text-gray-500 mb-6 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
                </div>
                <ProductsList category={'new'} />
                <hr className="w-4/5 m-auto" />
            </section>
            
            <section id='sofa' className='block'>
                <div className="text-center pt-14">
                    <h1 className="text-xl">SOFAS</h1>
                    <p className="text-gray-500 mb-6 text-sm">PROVIDING MOST COMFORTABLE SOFAS</p>
                </div>
                <ProductsList category={'sofa'} />
                <hr className="w-4/5 m-auto mt-4" />
            </section>

            <section id='bedroom' className='block'>
                <div className="text-center pt-14">
                    <h1 className="text-xl">Bedrooms</h1>
                    <p className="text-gray-500 mb-6 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
                </div>
                <ProductsList category={'bedroom'} />
                <hr className="w-4/5 m-auto mt-4" />
            </section>
            
            <section id='tables' className='block'>
                <div className="text-center pt-14">
                    <h1 className="text-xl">Tables</h1>
                    <p className="text-gray-500 mb-6 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
                </div>
                <ProductsList category={'table'} />
                <hr className="w-4/5 m-auto mt-4" />
            </section>

            <section id='salon' className='block'>
                <div className="text-center pt-14">
                    <h1 className="text-xl">Salons</h1>
                    <p className="text-gray-500 mb-6 text-sm">WE GOT THE NEWEST MODELS IN THE MARKET</p>
                </div>
            <ProductsList category={'salon'} />
            </section>

            {/* white spacing */}
            <div className="h-10"></div>
            
            <Footer />
        </div>
     );
}

export default Products;