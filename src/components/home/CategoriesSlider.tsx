import { ScrollArea, ScrollBar } from "./ScrollArea";
import Bedroom from "@/assets/bedroom.png";
import Sofa from "@/assets/sofa.png";
import LShapeSofa from "@/assets/l-shape-sofa.png";
import Salon from "@/assets/salon.png";

const CategoriesSlider = () => {
    return (
            <ScrollArea className="my-8 whitespace-nowrap">
                <div className="flex px-2 justify-between">
                    <span className="inline-block w-40 sm:w-56 lg:w-80 mx-2 overflow-hidden">
                        <img className="object-cover h-56 sm:h-72 md:h-[50vh] lg:h-[60vh]" src={Bedroom} alt="category" />
                        <div className="inelin-block text-center">Bedroom</div>
                    </span>
                    <span className="inline-block w-40 sm:w-56 lg:w-80 mx-2 overflow-hidden">
                        <img className="object-cover h-56 sm:h-72 md:h-[50vh] lg:h-[60vh]" src={Sofa} alt="category" />
                        <div className="inelin-block text-center">Sofa</div>
                    </span>
                    <span className="inline-block w-40 sm:w-56 lg:w-80 mx-2 overflow-hidden">
                        <img className="object-cover h-56 sm:h-72 md:h-[50vh] lg:h-[60vh]" src={Salon} alt="category" />
                        <div className="inelin-block text-center">Salon</div>
                    </span>
                    <span className="inline-block w-40 sm:w-56 lg:w-80 mx-2 overflow-hidden">
                        <img className="object-cover h-56 sm:h-72 md:h-[50vh] lg:h-[60vh]" src={LShapeSofa} alt="category" />
                        <div className="inelin-block text-center">L-Shape Sofa</div>
                    </span>
                </div>
                <ScrollBar className="hidden" orientation="horizontal" />
            </ScrollArea>
    );
}
 
export default CategoriesSlider;