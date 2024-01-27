// import Image0 from '/Images/Image0.3.png';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AiOutlineHome } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";

const NavLinks = () => {
    return (
        <>
            <div className='flex gap-1 justify-center py-1.5'>
                <NavLink to='/'><AiOutlineHome size={25} /></NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>

            <div className='flex gap-1 justify-center py-1.5'>
                <NavLink to='/product'><MdAddShoppingCart size={25} /></NavLink>
                <NavLink to='/product'>Products</NavLink>
            </div>

            <div className='flex gap-1 justify-center py-1.5'>
                <Link to='Contact' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}><MdOutlinePersonSearch size={25} /></Link>
                <Link to='Contact' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
            </div>
        </>
    )
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="Navbar flex justify-between w-full py-3 px-6 shadow-md">

                <img src={"/Images/Logo.png"} alt="logo" width="80px" height="80px" className='max-w-20 max-h-20'></img>


                <div className="flex gap-8 md:gap-2 text-lg font-bold justify-between md:hidden pt-6 md:pt-5 md:text-slate-800">
                    <NavLinks />
                </div>

                <div className="hidden md:flex p-3">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className='flex flex-col text-lg font-bold basis-full px-2 py-4'>
                    <NavLinks />
                </div>
            )}
        </>
    )
}

export default Navbar;