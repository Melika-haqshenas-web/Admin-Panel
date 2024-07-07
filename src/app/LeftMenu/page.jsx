
import Link from "next/link";

import { useEffect, useState, useRef } from 'react';

import EmailClick from './../Components/EmailClick'
import BellClick from "../Components/BellClick";
import TaskClick from "../Components/TaskClick";

import { TfiEmail } from "react-icons/tfi";
import { PiBell, PiTable, PiChartLineUp } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import { LiaHomeSolid } from "react-icons/lia";
import { GoTypography } from "react-icons/go";
import { MdOutlineWidgets } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { LuMousePointerClick } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsCalendar2X } from "react-icons/bs";
import { VscRemote } from "react-icons/vsc";


let i = 0
export default function LeftMenu({ num }) {
    const [isOpen, setIsOpen] = useState(false)
    const refFirst = useRef(null);
    const refSecond = useRef(null);
    const refThird = useRef(null);

    const handleClose = (value) => {
        if(value == 1){
          const element = refFirst.current;
          if (element && element.lastElementChild) {
            element.lastElementChild.style.width = '0'
          }
        }else if(value == 2){
          const element = refSecond.current;
          if (element && element.lastElementChild) {
            element.lastElementChild.style.width = '0'
          }
        }else if(value == 3){
            const element = refThird.current;
            if (element && element.lastElementChild) {
                element.lastElementChild.style.width = '0'
            }
        }
      }
      useEffect(() => {
        const handleOutSideClick = (event) => {
          handleClose(i)
          if (!refFirst.current?.contains(event.target)) {
            setIsOpen(false)
            i = 0
          }
          if (!refSecond.current?.contains(event.target)) {
            setIsOpen(false)
            i = 0
          }
          if (!refThird.current?.contains(event.target)) {
            setIsOpen(false)
            i = 0
          }
        };
        window.addEventListener("mousedown", handleOutSideClick);
    
        return () => {
          window.removeEventListener("mousedown", handleOutSideClick);
        };
      }, [refFirst , refSecond , refThird]);

    const handleOpen = (value) => {
        if(value == 1){
            const element = refFirst.current;
            if (element && element.lastElementChild) {
                element.lastElementChild.style.width = '25%'
            }
          }else if(value == 2){
            const element = refSecond.current;
            if (element && element.lastElementChild) {
                element.lastElementChild.style.width = '25%'
            }
          }else if(value == 3){
              const element = refThird.current;
              if (element && element.lastElementChild) {
                element.lastElementChild.style.width = '25%'
              }
          }
        setIsOpen(!isOpen)
        i = value
    }

    return (
        <section className="hidden xl:flex w-1/5 h-full flex-wrap flex-col">

            <div className="w-full h-32 flex justify-center items-center flex-wrap bg-[rgb(30,42,49)]">
                <ul className="w-full h-1/4 flex justify-center items-center ">
                    <li className="w-1/3 h-full  list-none flex justify-center items-center rounded-full flex-wrap">
                        <div onClick={() => handleOpen('1')} ref={refFirst} className="w-[45%] h-[135%] rounded-full flex justify-center items-center hover:bg-[#354a56] bg-[#2b3c46] cursor-pointer">
                            <TfiEmail className="text-lg text-[rgb(220,243,255)]" />
                            <div className="w-0 h-[100vh] fixed top-0 left-0 transition duration-300 z-50 shadow-[0_0_30px_rgba(0,0,0,.5)]">
                                {isOpen && i == 1 && (
                                    <EmailClick />
                                )}
                            </div>
                        </div>
                        <div className="w-full relative after:content-[' '] after:w-[5px] after:h-[5px] after:bg-[#f0f6f9] after:rounded-full after:absolute after:top-2 after:left-[48%] after:animate-ping"></div>
                    </li>
                    <li className="w-1/3 h-full  list-none flex justify-center items-center rounded-full flex-wrap">
                        <div onClick={() => handleOpen('2')} ref={refSecond}  className="w-[45%] h-[135%] rounded-full flex justify-center items-center hover:bg-[#354a56] bg-[#2b3c46] cursor-pointer">
                            <PiBell className="text-lg text-[rgb(220,243,255)]" />
                            <div className="w-0 h-[100vh] fixed top-0 left-0 transition duration-300 z-50">
                                {isOpen && i == 2 && (
                                    <BellClick />
                                )}
                            </div>
                        </div>
                    </li>
                    <li className="w-1/3 h-full  list-none flex justify-center items-center rounded-full flex-wrap">
                        <div onClick={() => handleOpen('3')} ref={refThird}  className="w-[45%] h-[135%] rounded-full flex justify-center items-center hover:bg-[#354a56] bg-[#2b3c46] cursor-pointer">
                            <BiTask className="text-lg text-[rgb(220,243,255)]" />
                            <div className="w-0 h-[100vh] fixed top-0 left-0 transition duration-300 z-50">
                                {isOpen && i == 3 && (
                                    <TaskClick />
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="w-full h-fit ">
                <ul className="w-full h-fit flex flex-wrap justify-center items-center">
                    {num == 1 && (
                        <Link href='/' className="bg-[rgb(30,42,49)] w-[80%] mt-4 p-3 flex rounded text-sm text-[#27a4fb] cursor-pointer">
                            <div className="w-6 h-full flex justify-center items-center mr-2"><LiaHomeSolid className="text-lg text-[#27a4fb]" /></div>
                            Dashboard</Link>
                    )}
                    {num != 1 && (
                        <Link href='/' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                            <div className="w-6 h-full flex justify-center items-center mr-2"><LiaHomeSolid className="text-lg text-[#27a4fb] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                            Dashboard</Link>
                    )}

                    {num == 2 && (
                        <Link href='/typography' className="bg-[rgb(30,42,49)] w-[80%] mt-4 p-3 flex rounded text-sm text-[#e53935] cursor-pointer">
                            <div className="w-6 h-full flex justify-center items-center mr-2"><GoTypography className="text-lg text-[#e53935]" /></div>
                            Typography</Link>
                    )}
                    {num != 2 && (
                        <Link href='/typography' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                            <div className="w-6 h-full flex justify-center items-center mr-2"><GoTypography className="text-lg text-[#e53935] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                            Typography</Link>
                    )}



                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><MdOutlineWidgets className="text-lg text-[#2cc56f] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Widgets</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><PiTable className="text-lg text-[#ffc021] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Table</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><SiGoogleforms className="text-lg text-[#ac66f5] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Forms</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><LuMousePointerClick className="text-lg text-[#00f3e7] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        User Interface</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><RiJavascriptLine className="text-lg text-[#e91e63] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Javascript Components</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6  h-full flex justify-center items-center mr-2"><PiChartLineUp className="text-lg text-[#8bc34a] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Charts and Maps</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><HiOutlinePhoto className="text-lg text-[#27a4fb] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Photo Gallery</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><BsCalendar2X className="text-lg text-[#2cc56f] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Calendar</Link>
                    <Link href='#' className="w-[80%] mt-4 p-3 flex rounded text-sm text-[#7996a9] hover:text-[#dcf3ff] group cursor-pointer">
                        <div className="w-6 h-full flex justify-center items-center mr-2"><VscRemote className="text-lg text-[#ff5722] opacity-65 group-hover:opacity-100 duration-300 transition" /></div>
                        Sample Pages</Link>

                </ul>
            </div>
        </section>
    )
}