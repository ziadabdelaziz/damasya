import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Divide as Hamburger } from 'hamburger-react'
import { useContext, useState } from 'react';
import NavMenu from './NavMenu';
import AdminContext from '../../app/context/admin-context';
import { AdminState } from '../../app/context/admin-context';
import { PiSignOutBold } from "react-icons/pi";

const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const adminState = useContext<AdminState>(AdminContext);

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
                        <HashLink to='#footer'>Contact</HashLink>
                        <span className='bg-app-action'></span>
                    </li>
                    {adminState.isAdmin && 
                        <span onClick={()=>{adminState.adminSignOut()}} className='inline-block bg-white/50 mx-2 rounded-md'>
                            <PiSignOutBold className='inline-block text-red-600 text-3xl transition-colors duration-200 hover:text-red-600/80 hover:shadow-md' />
                        </span>
                    }
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
