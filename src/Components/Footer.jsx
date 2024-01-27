import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaEarthAsia } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { IoChevronUpSharp } from "react-icons/io5";


const FooterContent = () => {
    return (
        <>
            <div>
                <p className="text-4xl bold py-6">Partner With Us</p>
                <p className="text-2xl bold ">JUNIPER INTERNATIONAL</p>
                <p className="text-2xl semi-bold">Kathmandu, Nepal</p>
            </div>
        </>
    )
}

const ContactLinks = () => {
    return (
        <>
            <div className="flex md:justify-around md:flex-col">
                {/* <hr class="w-0.5 h-56 mx-auto my-2 bg-white border-0 rounded md:my-10 md:hidden" /> */}
                <hr class="w-0.5 h-56 mx-auto my-2 bg-white border-0 rounded md:my-10 md:h-0.5 md:w-2/5" />

                <div className="Contact flex flex-col px-4 py-6 md:py-0">
                    <p className="text-2xl bold">CONTACT US</p>

                    <div className="flex flex-col py-4">

                        <div className="flex pl-2 py-2 gap-1 justify-center">
                            <a href="tel:+9779818420460"><MdOutlineLocalPhone size={25} /></a>
                            <a href="tel:+9779818420460">+977 9818420460</a>
                        </div>

                        <div className="flex pl-2 py-2 gap-1 justify-center">
                            <a href="https://wa.me/+9779818420460"><FaWhatsapp size={25} /></a>
                            <a href="https://wa.me/+9779818420460">+977 9818420460</a>
                        </div>

                        <div className="flex pl-2 py-2 gap-1 justify-center">
                            <a href="mailto:Juniperinternationalnepal@gmail.com"><CgMail size={25} /></a>
                            <a href="mailto:Juniperinternationalnepal@gmail.com">Juniperinternationalnepal@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function FooterExample() {

    return (
        <footer className="Footer">

            <div className="flex justify-center pt-12 bold text-xl text-slate-700 gap-1">
                <p>ALL AROUND THE WORLD</p>
                <FaEarthAsia size={25} />
            </div>

            <hr class="w-full h-0.5 mx-auto my-2 bg-slate-300 border-0 rounded" />

            <div className="flex md:flex-col bg-neutral-200 justify-around text-slate-700">
                <FooterContent />
                <ContactLinks />
            </div>

            <div className="flex justify-center text-lg font-black font-serif py-4">
                <div className="flex">
                    <Link to='Navbar' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}>BACK TO TOP</Link>
                    <Link to='Navbar' className="cursor-pointer" spy={true} smooth={true} offset={50} duration={500}><IoChevronUpSharp size={25} /></Link>
                </div>
            </div>

        </footer >
    )
}

export default FooterExample;