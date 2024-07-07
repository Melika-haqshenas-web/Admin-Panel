
import Link from "next/link";


import { PiTable, PiChartLineUp } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { GoTypography } from "react-icons/go";
import { MdOutlineWidgets } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { LuMousePointerClick } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsCalendar2X } from "react-icons/bs";
import { VscRemote } from "react-icons/vsc";
export default function Page({num}){
    return(
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
    )
}