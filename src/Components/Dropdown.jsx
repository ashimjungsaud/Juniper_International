import React from "react";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import DropdownItem from "./DropdownItem";

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col rounded-lg items-center px-2">
            <button onClick={() => setIsOpen((prev) => !prev)}
                className="flex bg-cyan-600 py-2 px-3 rounded-lg border-4 border-transparent active:border-black duration-400 active:text-white"
            >
                Product Categories
                {!isOpen ? (
                    <AiOutlineCaretDown className='h-8' />
                ) : (
                    <AiOutlineCaretUp className="h-8" />
                )
                }
            </button>

            {isOpen && (
                <div>
                    <DropdownItem />
                </div>
            )}
        </div>
    )
}

export default Dropdown;