import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'


const NavBar = () => {
    return ( 
        <div className="fixed w-full sm:py-2 pb-0 px-2 bg-transparet shadow-md">
            <div className='flex justify-between'>
                <div className="ml-2 inline-block my-auto ">
                    Damasya
                </div>
                <ul className="hidden sm:inline">
                    <li className='nav-link'>
                        <Link to='/'>Home</Link>
                        <span></span>
                    </li> 
                    <li className='nav-link'>
                        <Link to='/products'>Products</Link>
                        <span></span>
                    </li> 
                    <li className='nav-link'>
                        <Link to='/about'>About Us</Link>
                        <span></span>
                    </li>
                    <li className='nav-link'>
                        <Link to='/'>Contact</Link>
                        <span></span>
                    </li>
                </ul>
                {/* 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>*/}
                <div className='inline sm:hidden scale-75'>
                    <Hamburger />
                </div> 
            </div>
        </div>
     );
}
 
export default NavBar;
