import CategoriesSlider from "./CategoriesSlider";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Hero from "./Hero";

import ChairsImage from '@/assets/chairs.png';
import TableImage from '@/assets/table.png';

const Home = () => {
    return ( 
        <div>
            <Hero />
            <CategoriesSlider />
            <FeatureSection 
                image={ChairsImage} header="New Collection" description="Bringing new products with new designs" 
                buttonLabel="Show Now" buttonLink='/products/#new' isReverse={true} 
            />
            <FeatureSection
                image={TableImage} header="Best Products" description="Checkout our modern fearniture" 
                buttonLabel="Show Now" buttonLink='/products/#new' isReverse={false}
            />
            <Footer />
        </div>
     );
}
 
export default Home;