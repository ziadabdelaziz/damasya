import ChairsImage from '@/assets/chairs.png';

const FeatureSection = () => {
    return (
        <div>
            <div className="flex mx-4 my-8 flex-wrap">
                <span className='relative inline-block shadow-lg shadow-gray-400 w-full md:w-1/2'>
                    <img src={ChairsImage} alt="chairs"
                         className='object-cover z-10'
                    />
                </span>
                <span className='p-5 m-auto md:w-1/2 text-center'>
                    <p className='text-4xl font-bold mb-5'>Header</p>
                    <p className='text-gray-600'>Some content that attracts the users to shop</p>
                    <button className='mt-5 px-3 py-1 bg-app-secondary text-white hover:drop-shadow-lg hover:bg-opacity-80'>Shop Now</button>
                </span>
            </div>
        </div>
    );
}
 
export default FeatureSection;