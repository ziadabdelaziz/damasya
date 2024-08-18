import ChairsImage from '@/assets/chairs.png';

interface SectionLayout {
    isReverse: boolean;
}

const FeatureSection: React.FC<SectionLayout> = ({isReverse}) => {
    return (
        <div>
            <div className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} mx-4 my-8 flex-wrap`}>
                <span className='relative inline-block shadow-lg shadow-gray-400 w-full md:w-3/5'>
                    <img src={ChairsImage} alt="chairs"
                         className='object-cover z-10'
                    />
                </span>
                <span className='p-5 m-auto md:w-2/5 text-center'>
                    <p className='text-4xl font-bold mb-5'>Header</p>
                    <p className='text-gray-600'>Some content that attracts the users to shop</p>
                    <button className='mt-5 px-3 py-1 bg-app-action text-white hover:shadow-lg hover:shadow-gray-300 hover:bg-red-900 hover:scale-105 hover:transition-all duration-300'>Shop Now</button>
                </span>
            </div>
        </div>
    );
}
 
export default FeatureSection;