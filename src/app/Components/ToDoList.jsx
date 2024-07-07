'use client'
import React from "react";
import { useEffect, useState, useRef } from 'react';
import { CiMenuKebab } from "react-icons/ci";


let i = 0
export default function ToDoList() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setIsOpen(false)
                i = 0
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    const handleClick = (value) => {
        setIsOpen(!isOpen)
        i = value
    }
    return (
        <div className='w-full'>
            <ul className='w-full'>
                <li className='flex p-2 my-2'>
                    <div className='m-2'>
                        <div className='w-12 h-12 rounded-full bg-[#e53935] text-center text-xl flex justify-center items-center text-[#dcf3ff]'>F</div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap w-[80%]'>
                            <h4 className='text-[#b7d3e4] text-sm'>Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor</h4>
                            <p className='text-[#7996a9] w-full text-xs'>Today at 8.30 AM</p>
                            <div className='flex mt-3'>
                                <div className='p-2 border border-[#415969] text-sm mr-1 text-[#b7d3e4]'>#Messages</div>
                                <div className='p-2 border border-[#415969] text-sm mr-0.5 text-[#b7d3e4]'>!!!</div>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <div onClick={() => handleClick('1')} ref={ref} className='w-10 h-10 rounded-full flex justify-center items-center text-2xl cursor-pointer text-[#9bbcd1] hover:bg-[rgba(57,78,90,.35)] hover:text-[#dcf3ff] relative'>
                                <CiMenuKebab />
                                {isOpen && i == 1 && (
                                    <div className='absolute top-0 left-0 w-40 p-2 h-fit bg-white -translate-x-[112px] translate-y-[45px] rounded'>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Mark as completed</div>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Delete</div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </li>
                <li className='flex p-2 my-6'>
                    <div className='m-2'>
                        <div className='w-12 h-12 rounded-full bg-[#27a4fb] text-center text-xl flex justify-center items-center text-[#dcf3ff]'>N</div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap w-[80%]'>
                            <h4 className='text-[#b7d3e4] text-sm'>Nullam id dolor id nibh ultricies vehicula ut id elit lorem just deal with excel</h4>
                            <p className='text-[#7996a9] w-full text-xs'>Today at 12.30 PM</p>
                            <div className='flex mt-3'>
                                <div className='p-2 border border-[#415969] text-sm mr-1 text-[#b7d3e4]'>#Clients</div>
                                <div className='p-2 border border-[#415969] text-sm mr-0.5 text-[#b7d3e4]'>!!</div>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <div onClick={() => handleClick('2')} ref={ref} className='w-10 h-10 rounded-full flex justify-center items-center text-2xl cursor-pointer text-[#9bbcd1] hover:bg-[rgba(57,78,90,.35)] hover:text-[#dcf3ff] relative'>
                                <CiMenuKebab />
                                {isOpen && i == 2 && (
                                    <div className='absolute top-0 left-0 w-40 p-2 h-fit bg-white -translate-x-[112px] translate-y-[45px] rounded'>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Mark as completed</div>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Delete</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex p-2 my-6'>
                    <div className='m-2'>
                        <div className='w-12 h-12 rounded-full bg-[#ff5722] text-center text-xl flex justify-center items-center text-[#dcf3ff]'>C</div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap w-[80%]'>
                            <h4 className='text-[#b7d3e4] text-sm'>Cras mattis consectetur purus sit amet fermentum</h4>
                            <p className='text-[#7996a9] w-full text-xs'>Tomorrow at 10.30 AMToday at 12.30 PM</p>
                            <div className='flex mt-3'>
                                <div className='p-2 border border-[#415969] text-sm mr-1 text-[#b7d3e4]'>#Clients</div>
                                <div className='p-2 border border-[#415969] text-sm mr-0.5 text-[#b7d3e4]'>!!</div>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <div onClick={() => handleClick('3')} ref={ref} className='w-10 h-10 rounded-full flex justify-center items-center text-2xl cursor-pointer text-[#9bbcd1] hover:bg-[rgba(57,78,90,.35)] hover:text-[#dcf3ff] relative'>
                                <CiMenuKebab />
                                {isOpen && i == 3 && (
                                    <div className='absolute top-0 left-0 w-40 p-2 h-fit bg-white -translate-x-[112px] translate-y-[45px] rounded'>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Mark as completed</div>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Delete</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex p-2 my-6'>
                    <div className='m-2'>
                        <div className='w-12 h-12 rounded-full bg-[#ac66f5] text-center text-xl flex justify-center items-center text-[#dcf3ff]'>I</div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap w-[80%]'>
                            <h4 className='text-[#b7d3e4] text-sm'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet</h4>
                            <p className='text-[#7996a9] w-full text-xs'>05/08/2017 at 08.00 AM</p>
                            <div className='flex mt-3'>
                                <div className='p-2 border border-[#415969] text-sm mr-1 text-[#b7d3e4]'>#Server</div>
                                <div className='p-2 border border-[#415969] text-sm mr-0.5 text-[#b7d3e4]'>!</div>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <div onClick={() => handleClick('4')} ref={ref} className='w-10 h-10 rounded-full flex justify-center items-center text-2xl cursor-pointer text-[#9bbcd1] hover:bg-[rgba(57,78,90,.35)] hover:text-[#dcf3ff] relative'>
                                <CiMenuKebab />
                                {isOpen && i == 4 && (
                                    <div className='absolute top-0 left-0 w-40 p-2 h-fit bg-white -translate-x-[112px] translate-y-[45px] rounded'>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Mark as completed</div>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Delete</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </li>
                <li className='flex p-2 my-6'>
                    <div className='m-2'>
                        <div className='w-12 h-12 rounded-full bg-[#8bc34a] text-center text-xl flex justify-center items-center text-[#dcf3ff]'>P</div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap w-[80%]'>
                            <h4 className='text-[#b7d3e4] text-sm'>Praesent commodo cursus magnavel scelerisque nisl consectetur</h4>
                            <p className='text-[#7996a9] w-full text-xs'>10/08/2016 at 04.00 AM</p>
                            <div className='flex mt-3'>
                                <div className='p-2 border border-[#415969] text-sm mr-1 text-[#b7d3e4]'>#Server</div>
                                <div className='p-2 border border-[#415969] text-sm mr-0.5 text-[#b7d3e4]'>!!!</div>
                            </div>
                        </div>
                        <div className='w-[20%] flex justify-center'>
                            <div onClick={() => handleClick('5')} ref={ref} className='w-10 h-10 rounded-full flex justify-center items-center text-2xl cursor-pointer text-[#9bbcd1] hover:bg-[rgba(57,78,90,.35)] hover:text-[#dcf3ff] relative'>
                                <CiMenuKebab />
                                {isOpen && i == 5 && (
                                    <div className='absolute top-0 left-0 w-40 p-2 h-fit bg-white -translate-x-[112px] translate-y-[45px] rounded'>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Mark as completed</div>
                                        <div className='w-full text-sm text-[#36576b] transition duration-300 hover:bg-[#dae6f1] hover:text-[#22465d] py-2 px-3'>Delete</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}