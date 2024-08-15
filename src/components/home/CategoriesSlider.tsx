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
                        <img src={Bedroom} alt="category" />
                        <div className="text-center">Bedroom</div>
                    </span>
                    <span className="scroll-item">
                        <img src={Sofa} alt="category" />
                        <div className="text-center">Sofa</div>
                    </span>
                    <span className="scroll-item">
                        <img src={Salon} alt="category" />
                        <div className="text-center">Salon</div>
                    </span>
                    <span className="scroll-item">
                        <img src={LShapeSofa} alt="category" />
                        <div className="text-center">L-Shape Sofa</div>
                    </span>
                </div>
                <ScrollBar className="hidden" orientation="horizontal" />
            </ScrollArea>
    );
}
 
export default CategoriesSlider;