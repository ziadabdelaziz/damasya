import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Prop {
    selected: string,
    setState: Function,
    options: string[],
}

const DropdownMenu:React.FC<Prop> = ({selected, setState, options}) => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    return (
        <div className='relative'>
            <span 
                onClick={()=>{setShowDropdownMenu(!showDropdownMenu)}} id='category'
                className={`flex justify-between p-2 bg-gray-200/70 rounded-md border-2
                         ${showDropdownMenu? "border-app-secondary" : "border-transparent"}`}
            >
                <span className='capitalize'>{selected}</span>
                <span className="pt-1"><IoIosArrowDown /></span>
            </span>
            {
                showDropdownMenu &&
                <ul className="absolute w-full rounded-md bg-gray-100 mt-1">
                    {options.map((option)=>{
                        return (
                            <li 
                                onClick={()=>{setState(option); setShowDropdownMenu(!showDropdownMenu)}} key={option}
                                className='hover:bg-app-primary/50 p-2 capitalize'
                            >
                                {option}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    );
}

export default DropdownMenu;