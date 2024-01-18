import {Link} from 'react-scroll';
import DropdownItem from './DropdownItem';
// import { CgMenuCheese } from "react-icons/cg";


export default function ProductNavbar(){
    return(
       <nav className="Navbar flex justify-between  w-full py-3 px-6 shadow-md">
          <img src={"/Images/Logo.png"} alt="logo" width="80px" height="80px"></img>
          <div className="pt-5 text-slate-800">
             <ul className="ul flex justify-evenly gap-6 md:gap-2 text-lg font-bold">
                 <li className='flex'>
                     <DropdownItem/>               
                 </li>

                 <li>
                     <a href='/'>Home</a>
                 </li>

                 <li>
                <Link to='Footer' spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
                </li>
             </ul>
          </div>
       </nav>
    )
}