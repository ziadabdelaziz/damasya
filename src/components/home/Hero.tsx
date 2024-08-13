import heroImage from '@/assets/hero.png';

const Hero = () => {
    return (
        <div className="relative w-full -z-10">
            <img src={ heroImage } alt="hero" className='w-full h-[40vh] sm:h-auto object-cover z-0'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-sm sm:max-w-xl md:max-w-3xl mt-3 sm:m-0'>
                <div className='bg-app-secondary bg-opacity-60 text-white text-center px-8 sm:px-16 py-5'>
                    <span className='font-bold text-2xl sm:text-3xl md:text-4xl'>THE FURNITURE YOU WANT</span>
                    <br />
                    <span className='inline-block text-sm sm:text-xl w-4/5 md:w-3/6'>let Damietta's legacy of artistry transform your home.</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;