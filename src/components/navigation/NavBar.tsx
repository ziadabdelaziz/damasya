import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import NavMenu from './NavMenu';


const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return ( 
        <div className="fixed w-full pb-0 bg-transparet shadow-md z-20">
            <nav className='flex justify-between py-1 sm:py-4 backdrop-blur-sm'>
                <div className="ml-2 my-2 pb-0.5 text-xl sm:my-auto inline-block">
                    Damasya
                </div>
                <ul className="hidden sm:inline">
                    <li className='nav-link hover:text-app-action'>
                        <Link to='/'>Home</Link>
                        <span className='bg-app-action'></span>
                    </li> 
                    <li className='nav-link hover:text-app-action'>
                        <Link to='/products'>Products</Link>
                        <span className='bg-app-action'></span>
                    </li> 
                    <li className='nav-link hover:text-app-action'>
                        <Link to='/about'>About Us</Link>
                        <span className='bg-app-action'></span>
                    </li>
                    <li className='nav-link hover:text-app-action'>
                        <Link to='/'>Contact</Link>
                        <span className='bg-app-action'></span>
                    </li>
                </ul>
            </nav>
            <div onClick={()=>setIsOpenMenu(!isOpenMenu)} 
                    className={`fixed right-1 top-1 inline sm:hidden ${isOpenMenu? 'text-white' : ''} scale-75 z-50`}
            >
                <Hamburger />
            </div>
            <NavMenu showMenu={isOpenMenu} />
        </div>
     );
}

export default NavBar;
