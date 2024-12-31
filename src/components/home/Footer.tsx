import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="pr-6 pl-3 py-2 md:py-4 bg-app-secondary/90 text-gray-300">
            <div className="my-4 ml-3 md:ml-0 text-2xl text-white">Damasya</div>
            <div className="flex flex-wrap">
                <span className="inline-block w-full md:w-1/3 mb-8">
                    <span className="inline-block pb-2 ml-3 text-xl text-white">Pages</span>    
                    <ul className="w-40">
                        <li className='nav-link hover:text-app-action'>
                            <Link to='/'>Home</Link>
                            <span className="bg-app-action"></span>
                        </li>
                        <li className='nav-link hover:text-app-action'>
                            <Link to='/products'>Products</Link>
                            <span className="bg-app-action"></span>
                        </li>
                        <li className='nav-link hover:text-app-action'>
                            <Link to='/about'>About Us</Link>
                            <span className="bg-app-action"></span>
                        </li>
                    </ul> 
                </span>
                <span className="inline-block w-full md:w-1/3 mb-8 ml-3 md:ml-0">
                    <span className="inline-block pb-2 text-xl text-white">Contact</span>
                    <div className="my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span className="ml-2">01020447455</span>
                    </div>
                    <div className="my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span className="ml-2">01113164444</span>
                    </div>
                    <div className="my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span className="ml-2">customer.service@gmail.com</span>
                    </div>
                    <div className="my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                            <span className="ml-2">Damietta, Egypt</span>
                    </div>
                </span>
                <span id='footer' className="inline-block w-full md:w-1/3 mb-8 ml-3 md:ml-0">
                    <span className="inline-block pb-2 text-xl text-white">Connect</span>
                    <div>
                        <a href="https://wa.me/+201020447455">
                            <FaWhatsapp className="inline-block text-4xl mx-1 hover:transition-all duration-300 hover:scale-125 hover:text-app-action" />
                        </a>
                        {/* <a href="">
                            <FaInstagram className="inline-block text-4xl mx-1 hover:transition-all duration-300 hover:scale-125 hover:text-app-action" />
                        </a> */}
                        <a href="https://www.facebook.com/people/Damasya/100088004101285/">
                            <CiFacebook className="inline-block text-4xl mx-1 hover:transition-all duration-300 hover:scale-125 hover:text-app-action" />
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Footer;