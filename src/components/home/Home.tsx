import CategoriesSlider from "./CategoriesSlider";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <CategoriesSlider />
            <FeatureSection isReverse={true} />
            <FeatureSection isReverse={false} />
            <Footer />
        </div>
     );
}
 
export default Home;