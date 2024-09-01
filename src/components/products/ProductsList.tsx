import { useContext } from "react";
import { Product } from "../../models/product";
import { ScrollArea, ScrollBar } from "../home/ScrollArea";
import LShapeSofa from '@/assets/l-shape-sofa.png';
import AdminContext from "../../app/admin-context";
import { FaPlus } from "react-icons/fa6";

interface Props {
    products: Product[];
}

const ProductsList : React.FC<Props> = ({products}) => {
    const adminState = useContext(AdminContext);

    return ( 
        <ScrollArea className="my-2 whitespace-nowrap">
                <div className="flex pl-5 mt-4 mb-2 justify-between">
                    { adminState.isAdmin &&
                        <span className="grid mr-6 w-36 h-36 bg-app-secondary/30 shadow-lg rounded-3xl hover:scale-105 transition-all duration-300">
                            <FaPlus className="text-app-action m-auto text-5xl" />
                        </span>
                    }
                    {
                        products.map((product) => {
                            return <span key={product.id} className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
                                <img 
                                    className="object-cover w-full h-36"
                                    src={product.imageUrl} alt="Bedroom" />
                                <div className="mt-2 text-wrap">
                                    <span className="inline-block text-sm font-bold uppercase">{product.name}</span>
                                    <span className="block">{product.price - product.price * product.sale} LE</span>
                                    <span className="block line-through text-sm">{product.price} LE</span>
                                </div>
                            </span>
                        })
                    }
                    <span className="inline-block mr-6 w-36 hover:scale-105 transition-all duration-300">
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
                    </span>
                </div>
            <ScrollBar className="hidden" orientation="horizontal" />
        </ScrollArea>
     );
}
 
export default ProductsList;