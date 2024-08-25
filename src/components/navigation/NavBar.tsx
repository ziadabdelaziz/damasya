import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import NavMenu from './NavMenu';


const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return ( 
        <div className="fixed w-full pb-0 bg-app-primary/30 shadow-md z-20">
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
            <div className={`fixed -right-1 -top-1 px-2.5 py-2 rounded-lg bg-white/50 inline sm:hidden scale-50 z-50`}>
                <Hamburger onToggle={()=>setIsOpenMenu(!isOpenMenu)} color={`${isOpenMenu? 'white' : 'black'}` }/>
            </div>
            <NavMenu showMenu={isOpenMenu} />
        </div>
     );
}

export default NavBar;
