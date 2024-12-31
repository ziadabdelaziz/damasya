import { useContext } from "react";
import { ScrollArea, ScrollBar } from "../home/ScrollArea";
import LShapeSofa from '@/assets/l-shape-sofa.png';
import AdminContext from "../../app/context/admin-context";
import { FaPlus } from "react-icons/fa6";
import ProductsContext, { ProductsState } from "../../app/context/products-context";
import { Link } from "react-router-dom";
import { Product } from "../../models/product";

interface Props {
    id?: string,
    category: string;
}

const ProductsList : React.FC<Props> = ({category}) => {
    const adminState = useContext(AdminContext);
    const productsState = useContext<ProductsState>(ProductsContext);
    const products: Product[] = productsState.productOfCategory(category);

    return (
        <ScrollArea className="my-2 whitespace-nowrap">
                <div className="flex pl-5 mt-2 mb-2 justify-between">
                    {   adminState.isAdmin &&
                        <Link to='/add-product' state={category} key={'add-product'} className="mr-6 w-36 h-36 bg-app-secondary/30 shadow-lg rounded-3xl hover:scale-105 transition-all duration-300">
                            <div className="grid group w-36 h-36 hover:bg-white/20 rounded3xl transition-colors duration-300">
                                <FaPlus className="text-app-action m-auto text-5xl group-hover:text-red-800 transition-colors duration-300" />
                            </div>
                        </Link>
                    }
                    {
                        products.map((product:Product) => {
                            console.log(product.name+product.timestamp+' : '+product.imagesUrl[0]);
                            return <Link to={'/products/'+product.id} state={product}>
                                <span key={product.id} className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
                                    <img
                                        className="object-cover w-full h-36"
                                        src={product.imagesUrl[0]} alt={product.name} />
                                    <div className="mt-2 text-wrap">
                                        <span className="inline-block text-sm font-bold uppercase">{product.name}</span>
                                        <span className="block">{product.price - ((product.price / 100) * product.sale)} LE</span>
                                        <span className="block line-through text-sm">{product.price} LE</span>
                                    </div>
                                </span>
                            </Link>
                        })
                    }
                    {/* <span className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
                        <img 
                            className="object-cover w-full h-36"
                            src={LShapeSofa} alt="Bedroom" />
                        <div className="mt-2 text-wrap">
                            <span className="inline-block text-sm font-bold">L-SHAPE SOFA</span>
                            <span className="block">5000 LE</span>
                            <span className="block line-through text-sm">5000 LE</span>
                        </div>
                    </span>
                    <span className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
                        <img 
                            className="object-cover w-full h-36"
                            src={LShapeSofa} alt="Bedroom" />
                        <div className="mt-2 text-wrap">
                            <span className="inline-block text-sm font-bold">WHITE L-SHAPE SOFA</span>
                            <span className="block">5000 LE</span>
                            <span className="block line-through text-sm">5000 LE</span>
                        </div>
                    </span>
                    <span className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
                        <img 
                            className="object-cover w-full h-36"
                            src={LShapeSofa} alt="Bedroom" />
                        <div className="mt-2 text-wrap">
                            <span className="inline-block text-sm font-bold">WHITE L-SHAPE SOFA</span>
                            <span className="block">5000 LE</span>
                            <span className="block line-through text-sm">5000 LE</span>
                        </div>
                    </span> */}
                </div>
            <ScrollBar className="hidden" orientation="horizontal" />
        </ScrollArea>
     );
}
 
export default ProductsList;