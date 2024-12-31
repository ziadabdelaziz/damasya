import { HashLink } from "react-router-hash-link";

interface SectionLayout {
    image: string;
    header: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
    isReverse: boolean;
}

const FeatureSection: React.FC<SectionLayout> = ({image, header, description, buttonLabel, isReverse, buttonLink}) => {
    return (
        <div>
            <div className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} mx-4 my-8 flex-wrap`}>
                <span className='relative inline-block shadow-lg shadow-gray-400 w-full md:w-3/5'>
                    <img src={image} alt="chairs"
                         className='object-cover z-10'
                    />
                </span>
                <span className='p-5 m-auto md:w-2/5 text-center md:text-left'>
                    <p className='text-4xl font-bold mb-5'>{header}</p>
                    <p className='text-gray-600'>{description}</p>
                    <HashLink to={buttonLink}>
                        <button className='mt-5 px-3 py-1 bg-app-action text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-red-900 hover:scale-105 hover:transition-all duration-300'>
                            {buttonLabel}
                        </button>
                    </HashLink>
                </span>
            </div>
        </div>
    );
}
 
export default FeatureSection;