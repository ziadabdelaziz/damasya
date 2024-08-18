import { Link } from "react-router-dom";

interface MenuTrigger {
    showMenu: boolean;
}

const NavMenu:React.FC<MenuTrigger> = ({showMenu}) => {
    return (
        <div className={`fixed inset-0 w-full h-full text-white bg-black bg-opacity-90 z-40 ${!showMenu && 'hidden'}`}>
            <ul className='w-40 mx-auto mt-40 text-center'>
                <li className='nav-link text-2xl my-2'>
                    <Link to='/'>Home</Link>
                    <span className='bg-white'></span>
                </li>
                <li className='nav-link text-2xl my-2'>
                    <Link to='/products'>Products</Link>
                    <span className='bg-white'></span>
                </li>
                <li className='nav-link text-2xl my-2'>
                    <Link to='/about'>About</Link>
                    <span className='bg-white'></span>
                </li>
                <li className='nav-link text-2xl my-2'>
                    <Link to='/'>Contact</Link>
                    <span className='bg-white'></span>
                </li>
            </ul>
        </div>
    );
}
 
export default NavMenu;