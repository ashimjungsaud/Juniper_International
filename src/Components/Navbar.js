// import Image0 from '/Images/Image0.3.png';
import {Link} from 'react-scroll';

export default function Navbar(){
    return(
       <nav className="Navbar flex justify-between  w-full py-3 px-6 shadow-md">
          <img src={"/Images/Logo.png"} alt="logo" width="80px" height="80px"></img>
          <div className="pt-5 text-slate-800">
             <ul className="ul flex justify-evenly gap-6 md:gap-2 text-lg font-bold ">
                 <li>
                     <a href='/'>Home</a>
                 </li>
                 <li>
                     <a href='/product'>Products</a>
                 </li>
                 <li>
                <Link to='Footer' spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
                </li>
             </ul>
          </div>
       </nav>
    )
}