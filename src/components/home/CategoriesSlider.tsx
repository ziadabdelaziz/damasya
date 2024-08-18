import { ScrollArea, ScrollBar } from "./ScrollArea";
import Bedroom from "@/assets/bedroom.png";
import Sofa from "@/assets/sofa.png";
import LShapeSofa from "@/assets/l-shape-sofa.png";
import Salon from "@/assets/salon.png";

const CategoriesSlider = () => {
    return (
            <ScrollArea className="my-8 whitespace-nowrap">
                <div className="flex px-2 justify-between">
                    <span className="scroll-item">
                        <img 
                            className="hover:scale-105 hover:shadow-lg hover:transition-all duration-300"
                            src={Bedroom} alt="Bedroom" />
                        <div className="text-center mt-2">Bedroom</div>
                    </span>
                    <span className="scroll-item">
                        <img 
                            className="hover:scale-105 hover:shadow-lg hover:transition-all duration-300"
                            src={Sofa} alt="Sofa" />
                        <div className="text-center mt-2">Sofa</div>
                    </span>
                    <span className="scroll-item">
                        <img 
                            className="hover:scale-105 hover:shadow-lg hover:transition-all duration-300"
                            src={Salon} alt="Saloln" />
                        <div className="text-center mt-2">Salon</div>
                    </span>
                    <span className="scroll-item">
                        <img 
                            className="hover:scale-105 hover:shadow-lg hover:transition-all duration-300"
                            src={LShapeSofa} alt="L-Shape Sofa" />
                        <div className="text-center mt-2">L-Shape Sofa</div>
                    </span>
                </div>
                <ScrollBar className="hidden" orientation="horizontal" />
            </ScrollArea>
    );
}
 
export default CategoriesSlider;