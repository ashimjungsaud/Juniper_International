import React from 'react';
import { Link } from 'react-scroll';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonSearch } from "react-icons/md";
// import { CgMenuCheese } from "react-icons/cg";

const NavLinks = () => {
    return (
        <>
            <div className='flex gap-1 justify-center py-1.5'>
                <NavLink to='/'><AiOutlineHome size={25} /></NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>

            <div className='flex gap-1 justify-center py-1.5'>
                <Link to='Contact' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}><MdOutlinePersonSearch size={25} /></Link>
                <Link to='Contact' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
            </div>

            <div>
                <Dropdown />
            </div>
        </>
    )
}

export default function ProductNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="Navbar flex justify-between w-full py-3 px-6 shadow-md text-slate-700">
                <div>
                    <img src={"/Images/Logo.png"} alt="logo" width="80px" height="80px" className='max-w-20 max-h-20'></img>
                </div>

                <div>

                    <div className="flex gap-6 md:gap-2 text-lg font-bold justify-between md:hidden pt-6 md:pt-5 md:text-slate-800 ">
                        <NavLinks />
                    </div>

                    <div className="hidden md:flex px-3 py-5">
                        <button onClick={toggleNavbar}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>

                </div>
            </nav>

            {
                isOpen && (
                    <div className='flex flex-col gap-2 text-lg text-slate-700 font-bold basis-full px-2 py-4'>
                        <NavLinks />
                    </div>
                )
            }
        </>
    )
}