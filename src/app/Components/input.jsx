
import { useEffect, useState, useRef } from 'react';

import { CiSearch} from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";


export default function input(){
    const [isFocused, setIsFocused] = useState(false);
    return(
        <div className="w-[300px] md:w-[750px] lg:w-[1000px] h-20 z-50  justify-center items-center flex absolute top-0 left-[8px] md:left-0">
          <input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type="text" placeholder='Search for people, files & reports' className="w-[95%] h-[75%]  pl-9 rounded outline-none bg-[rgb(240,246,249)] text-[rgb(54,87,107)] focus:placeholder:opacity-0 transition duration-300 ease-in-out " />
          <IoIosArrowRoundBack className='text-xl text-[#1e2a31] absolute top-7 left-4 md:left-6 cursor-pointer' />
         
        </div>
    )
}