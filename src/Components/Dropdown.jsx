import React from "react";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import DropdownItem from "./DropdownItem";

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col rounded-lg items-center px-2 py-1.5">
            <button onClick={() => setIsOpen((prev) => !prev)}
                className="flex"
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