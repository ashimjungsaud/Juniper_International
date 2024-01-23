import React from "react";
import {Link} from 'react-scroll';

export default function DropdownItem(){
    return(
        <div className="pt-1 rounded-lg">                 
            
            <ul className="flex-col justify-around font-medium px-4 py-6 cursor-pointer bg-cyan-600 text-white">

                <li className="hover:font-bold">
                    <Link to='Urology' spy={true} smooth={true} offset={50} duration={500}>
                        Urology
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Infusion & Transfusion' spy={true} smooth={true} offset={50} duration={500}>
                        Infusion & Transfusion
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Catheter' spy={true} smooth={true} offset={50} duration={500}>
                        Catheter
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Rehab Products' spy={true} smooth={true} offset={50} duration={500}>
                        Rehab Products
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Gowns' spy={true} smooth={true} offset={50} duration={500}>
                        Gowns
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Cap/Shoe Cover' spy={true} smooth={true} offset={50} duration={500}>
                        Cap/Shoe Cover
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Masks' spy={true} smooth={true} offset={50} duration={500}>
                        Masks
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Gloves' spy={true} smooth={true} offset={50} duration={500}>
                        Gloves
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='HIV Kit' spy={true} smooth={true} offset={50} duration={500}>
                        HIV Kit
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Bandages' spy={true} smooth={true} offset={50} duration={500}>
                        Bandages
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Hospital Furniture' spy={true} smooth={true} offset={50} duration={500}>
                        Hospital Furniture
                    </Link>
                </li>
                <li className="hover:font-bold">
                    <Link to='Miscellaneous' spy={true} smooth={true} offset={50} duration={500}>
                        Miscellaneous
                    </Link>
                </li>
            </ul>
  
         </div>
    )
}