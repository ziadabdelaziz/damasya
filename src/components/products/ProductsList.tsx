import { Product } from "../../models/Product";
import { ScrollArea, ScrollBar } from "../home/ScrollArea";
import LShapeSofa from '@/assets/l-shape-sofa.png';

interface Props {
    products: Product[];
}

const ProductsList : React.FC<Props> = ({products}) => {
    return ( 
        <ScrollArea className="my-2 whitespace-nowrap">
                <div className="flex pl-5 mt-4 justify-between">
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