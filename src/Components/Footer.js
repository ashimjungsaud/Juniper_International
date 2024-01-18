import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Footer(){
    return(
        <footer className="Footer bg-black text-white py-2">
            <div>
                <ul>
                    <div className="flex justify-center  gap-4 py-2">
                    <li className="flex">
                        <BiLogoGmail size={27}/>
                        <a href="mailto:gopaldai@hotmail.com">gopaldai@hotmail.com</a>
                    </li>

                    <li className="flex">
                        <FaPhoneAlt size={27}/>
                        <a href="tel:9779851097188">+977 9851097188</a>
                    </li>
                    </div>

                    
                    <li className="flex justify-center">
                        <IoLocationOutline size={27}/>
                        <p>Kathmandu ,Nepal</p>
                    </li>
                    
                </ul>
            </div>

        </footer>
    )
}

export default Footer;