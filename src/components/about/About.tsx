import FeatureSection from "../home/FeatureSection";
import Footer from "../home/Footer";

import AboutHero from "@/assets/l-shape-sofa-section.png";
import Services from "@/assets/services.jpg"
import Mission from "@/assets/mission.jpg"
import Vision from "@/assets/vision3.jpg"
import Principles from "@/assets/principles.jpg"

const About = () => {
    return ( 
        <div>
            <section>
                <img src={AboutHero} alt="About Damasya" />
            </section>

            <FeatureSection
                image={Services}
                header="Our Services"
                description="Selling furniture that gives the customer a new experience with our unique designs. Present the one-piece work through a designer who will get the 	placedimensions and customize a wholenew space for the customer with a life experience of 24 years. After-sales service"
                buttonLabel="Show Now"
                buttonLink="/proucts/#new"
                isReverse={false}
             />

            <FeatureSection
                image={Mission}
                header="Our Mission"
                description="Obtaining our customer satisfaction by producing high-quality products with fashionable models to keep on track with the modern world, so we take care of the smallest details."
                buttonLabel="Show Now"
                buttonLink="/proucts/#new"
                isReverse={true}
             />

             <FeatureSection
                image={Vision}
                header="Our Vision"
                description="We work with passion, so we expect to be the largest furniture factory in Egypt and have branches all over the world"
                buttonLabel="Show Now"
                buttonLink="/proucts/#new"
                isReverse={false}
             />

             <FeatureSection
                image={Principles}
                header="Our Principles"
                description="Honesty, Effeciency & Innovation"
                buttonLabel="Show Now"
                buttonLink="/proucts/#new"
                isReverse={true}
             />
             
             {/* white space */}
             <div className="h-10"></div>

             <Footer />
        </div>
     );
}

export default About;