
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';

import profilePic from '../../../public/Profile.jpg'
import LeftSubMenu from '../LeftSubMenu/page'
import Input from './input';


import RecentPosts from "./RecentPosts"


import { BsList } from "react-icons/bs";
import { CiSearch, CiGrid41, CiCircleCheck, CiCircleAlert, CiDiscount1 } from "react-icons/ci";
import { TfiEmail, TfiGallery } from "react-icons/tfi";
import { PiBell, PiNewspaperClipping, PiBoxArrowDownLight } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import { IoSettingsOutline, IoCalendarClearOutline, IoMailOpenOutline, IoAnalyticsSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineEventBusy } from "react-icons/md";
import { FaCode } from "react-icons/fa6";




let i = 0
export default function Haeder({ subNum }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [openInput, setOpenInput] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)
  const [openBell, setOpenBell] = useState(false)
  const [openTask, setOpenTask] = useState(false)
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refThird = useRef(null);
  const refForth = useRef(null);

  const open = (value) =>{
    if(value == 1){
      setOpenEmail(true)
    }else if(value == 2){
      setOpenBell(true)
    }else if(value == 3){
      setOpenTask(true)
    }
    document.body.style.overflow = 'hidden'
  }
  const close = (value) =>{
    if(value == 1){
      setOpenEmail(false)
    }else if(value == 2){
      setOpenBell(false)
    }else if(value == 3){
      setOpenTask(false)
    }
    document.body.style.overflow = 'auto'
  }
  
  const handleClose = (value) => {
    if (value == 1) {
      const element = refFirst.current;
      if (element && element.firstElementChild) {
        element.style.background = ''
        element.firstElementChild.style.color = 'rgb(220,243,255)'
      }
    } else if (value == 2) {
      const element = refSecond.current;
      if (element && element.firstElementChild) {
        element.style.background = ''
        element.firstElementChild.style.color = 'rgb(220,243,255)'
      }
    } else if (value == 3) {
      const element = refThird.current;
      if (element && element.nextElementSibling) {
        element.nextElementSibling.style.width = '0'
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
      if (!refForth.current?.contains(event.target)) {
        setOpenInput(false)
        i = 0
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [refFirst, refSecond, refThird, refForth]);

  const handleClick = (value) => {
    if (value == 1) {
      const element = refFirst.current;
      if (element && element.firstElementChild) {
        element.style.background = '#f0f6f9'
        element.firstElementChild.style.color = '#1e2a31'
      }
    } else if (value == 2) {
      const element = refSecond.current;
      if (element && element.firstElementChild) {
        element.style.background = '#f0f6f9'
        element.firstElementChild.style.color = '#1e2a31'
      }
    } else if (value == 3) {
      const element = refThird.current;
      if (element && element.nextElementSibling) {
        element.nextElementSibling.style.width = '90%'
      }
    }
    setIsOpen(!isOpen)
    i = value
  }



  return (
    <header className="w-full h-64 bg-[rgb(30,42,49)]">
      <section className="w-full flex h-20 md:h-32 justify-center items-center p-2 md:p-8">

        <div className="w-1/3 md:w-1/2 xl:w-1/5 h-full flex">
          <div className='w-full md:w-1/4 h-full flex justify-start md:justify-center lg:justify-end lg:mr-2 items-center xl:hidden'>
            <i onClick={() => handleClick('3')} ref={refThird} className='list-none rounded  text-[#dcf3ff] bg-[#354a56] cursor-pointer w-14 flex justify-center items-center h-14'><BsList className='text-3xl' /></i>
            <div className="w-0 h-[100vh] fixed top-0 left-0 transition duration-300 z-50 shadow-[0_0_30px_rgba(0,0,0,.5)]  bg-[#22313a] overflow-y-scroll">
              <LeftSubMenu num={subNum} />
            </div>
          </div>

          <div className='w-3/4 xl:w-full h-full hidden md:flex flex-wrap'>
            <Link href='#' className="text-white text-2xl md:text-xl md:w-full">Material</Link>
            <p className='text-[rgb(121,150,169)] text-xl md:text-lg'>admin extended dark</p>
          </div>
        </div>

        <div className="w-3/5 h-full  justify-center items-center hidden xl:flex relative">
          <input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type="text" placeholder='Search for people, files & reports' className="w-[95%] h-[75%] bg-[rgb(43,60,70)] pl-9 rounded text-[rgb(155,188,209)] focus:outline-none focus:bg-[rgb(240,246,249)] focus:text-[rgb(54,87,107)] focus:placeholder:opacity-0 transition duration-300 ease-in-out " />
          {isFocused && (
            <IoIosArrowRoundBack className='text-xl text-[#1e2a31] absolute top-5 left-9 cursor-pointer' />
          )}
          {!isFocused && (
            <CiSearch className='text-base text-[rgb(220,243,255)] absolute top-6 left-9' />
          )}
        </div>

        <div className="w-2/3 md:w-1/2 xl:w-1/5 h-full ">
          <ul className='w-full h-full flex justify-center items-center '>
            <li onClick={() => setOpenInput(true)} ref={refForth} className=' w-[60%]  h-[90%] flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out xl:hidden'>
              <CiSearch className='text-xl md:text-base text-[rgb(220,243,255)]' />
              {openInput && <Input />}
            </li>
            <li onClick={() => open('1')} className=' w-[60%]  h-[90%] flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out xl:hidden'>
              <TfiEmail className='text-xl md:text-base text-[rgb(220,243,255)]' />
            </li>
            {openEmail && (
              <div className="w-full h-[100vh] bg-[rgb(34,49,58)] cursor-auto absolute top-0 left-0 z-50">
                <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                  <div className="w-1/4 flex items-center justify-end">
                    <div onClick={() => close('1')} className="w-11 h-11 rounded-full bg-[#2b3c46] mr-6 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
                      <IoIosArrowRoundBack />
                    </div>
                  </div>
                  <div className="w-2/4 flex flex-wrap items-center">
                    <h2 className="uppercase text-[#dcf3ff]">Messages
                      <small className=" text-[#7996a9] block mt-1">23 Unread messages</small>

                    </h2>
                  </div>
                  <div className="w-1/4 flex justify-end items-center">
                    <div className="w-10 h-10 mr-2 rounded-full cursor-pointer hover:bg-[#2f414c] before:content-['\002B'] before:text-[#9bbcd1] before:text-xl flex justify-center items-center"></div>
                  </div>
                </div>
                <div className="w-full">
                  <RecentPosts />
                </div>
              </div>
            )}
            <li onClick={() => open('2')} className=' w-[60%]  h-[90%] flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out xl:hidden'>
              <PiBell className='text-xl md:text-base text-[rgb(220,243,255)]' />
            </li>
            {openBell && (
              <div className="w-full h-[100vh] bg-[rgb(34,49,58)] cursor-auto absolute top-0 left-0 z-50">
                <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                  <div className="w-1/4 flex items-center justify-end">
                    <div onClick={() => close('2')} className="w-11 h-11 rounded-full bg-[#2b3c46] mr-8 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
                      <IoIosArrowRoundBack />
                    </div>
                  </div>
                  <div className="w-2/4 flex flex-wrap items-center">
                    <h2 className="uppercase text-[#dcf3ff]">Alerts
                      <small className=" text-[#7996a9] block mt-1">100+ New Alerts</small>

                    </h2>
                  </div>
                  <div className="w-1/4 flex justify-end items-center">
                    <div className="w-10 h-10 mr-2 rounded-full cursor-pointer hover:bg-[#2f414c] text-xl flex justify-center items-center text-[#dcf3ff]">
                      <CiCircleCheck />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <ul className='w-full'>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#e53935] from-0% to-[#ec6e6b] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <CiCircleAlert />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Email Marketing</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Need to re-send emails</p>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#ac66f5] from-0% to-[#cb9ff9] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <PiBoxArrowDownLight />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>New order recieved</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>#241 Premium plan for 2 years</p>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#27a4fb] from-0% to-[#63bdfc] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <MdOutlineEventBusy />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Upcoming event</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Meeting with Kane Williamson in 8 hours</p>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full  bg-gradient-to-r from-[#e91e63] from-0% to-[#ee568a] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <CiCircleAlert />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Server limit reached!</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Process reached over 75%</p>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full  bg-gradient-to-r from-[#8bc34a] from-0% to-[#a8d278] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <CiDiscount1 />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Server limit reached!</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Process reached over 75%</p>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full  bg-gradient-to-r from-[#ff5722] from-0% to-[#ff865f] to-100% flex justify-center items-center text-[#dcf3ff] text-xl'>
                          <FaCode />
                        </div>
                      </div>
                      <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>New issue filed</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>#475 Web page not found</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <li onClick={() => open('3')} className=' w-[60%]  h-[90%]  hidden md:flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out xl:hidden'>
              <BiTask className='text-base text-[rgb(220,243,255)]' />
            </li>
            {openTask && (
              <div className="w-full h-[100vh] bg-[rgb(34,49,58)] cursor-auto absolute top-0 left-0 z-50">
                <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                  <div className="w-1/4 flex items-center justify-end">
                    <div onClick={() => close('3')} className="w-11 h-11 rounded-full bg-[#2b3c46] mr-8 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
                      <IoIosArrowRoundBack />
                    </div>
                  </div>
                  <div className="w-2/4 flex flex-wrap items-center">
                    <h2 className="uppercase text-[#dcf3ff]">Ongoing Tasks
                      <small className=" text-[#7996a9] block mt-1">5 Pending tasks</small>
                    </h2>
                  </div>
                  <div className="w-1/4 flex justify-end items-center"></div>
                </div>
                <div className="w-full">
                  <ul className='w-full'>
                    <li className='text-[#b7d3e4] text-sm  p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <h4 className="text-ellipsis line-clamp-1 text-[#b7d3e4] pl-2">HTML5 Validation Report</h4>
                      <div className="mt-2 h-[3px] bg-[#1e2a31] rounded ml-2">
                        <div className="w-[25%] h-full bg-gradient-to-r from-[#27a4fb] from-0% to-[#63bdfc] to-100%"></div>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm  p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <h4 className="text-ellipsis line-clamp-1 text-[#b7d3e4] pl-2">Google Chrome Extension</h4>
                      <div className="mt-2 h-[3px] bg-[#1e2a31] rounded ml-2">
                        <div className="w-[43%] h-full bg-gradient-to-r from-[#ffc021] from-0% to-[#ffd15e] to-100%"></div>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm  p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <h4 className="text-ellipsis line-clamp-1 text-[#b7d3e4] pl-2">Social Intranet Projects</h4>
                      <div className="mt-2 h-[3px] bg-[#1e2a31] rounded ml-2">
                        <div className="w-[20%] h-full bg-gradient-to-r from-[#2cc56f] from-0% to-[#55d98f] to-100%"></div>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm  p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <h4 className="text-ellipsis line-clamp-1 text-[#b7d3e4] pl-2">Bootstrap Admin Template</h4>
                      <div className="mt-2 h-[3px] bg-[#1e2a31] rounded ml-2">
                        <div className="w-[60%] h-full bg-gradient-to-r from-[#e53935] from-0% to-[#ec6e6b] to-100%"></div>
                      </div>
                    </li>
                    <li className='text-[#b7d3e4] text-sm  p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                      <h4 className="text-ellipsis line-clamp-1 text-[#b7d3e4] pl-2">Youtube Client App</h4>
                      <div className="mt-2 h-[3px] bg-[#1e2a31] rounded ml-2">
                        <div className="w-[80%] h-full bg-gradient-to-r from-[#ac66f5] from-0% to-[#cb9ff9] to-100%"></div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            )}
            <li id='1' onClick={() => handleClick('1')} ref={refFirst} className=' w-[60%] h-[90%] hidden md:flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out relative'>
              <CiGrid41 className='text-base xl:text-xl text-[rgb(220,243,255)]' />
              {isOpen && i == 1 && (
                <div className='bg-[#f0f6f9] rounded p-4 text-center w-[300px] absolute top-0 left-0 transform translate-x-[-226px] translate-y-[58px] z-50 '>
                  <div className='w-full flex'>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><IoCalendarClearOutline className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#8bc34a] from-0% to-[#a8d278] to-100%' /><small className='text-black mt-1'>Calender</small></Link>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><VscFileSubmodule className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#e53935] from-0% to-[#ec6e6b] to-100%' /><small className='text-black mt-1'>Files</small></Link>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><IoMailOpenOutline className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#ffc021] from-0% to-[#ffd15e] to-100%' /><small className='text-black mt-1'>Mail</small></Link>
                  </div>
                  <div className='w-full flex mt-2'>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><IoAnalyticsSharp className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#27a4fb] from-0% to-[#63bdfc] to-100%' /><small className='text-black mt-1'>Analytics</small></Link>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><PiNewspaperClipping className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#ac66f5] from-0% to-[#cb9ff9] to-100%' /><small className='text-black mt-1'>News</small></Link>
                    <Link href='#' onClick={() => handleClose('1')} className='p-2 m-2 rounded w-1/3 flex justify-center items-center flex-wrap hover:bg-[#fff]'><TfiGallery className='w-10 h-10 p-3 text-sm text-white rounded-full  bg-gradient-to-r from-[#ff5722] from-0% to-[#ff865f] to-100%' /><small className='text-black mt-1'>Gallery</small></Link>
                  </div>

                </div>
              )}
            </li>
            <li id='2' onClick={() => handleClick('2')} ref={refSecond} className=' w-[60%]  h-[90%] hidden md:flex justify-center items-center cursor-pointer text-[#dcf3ff] list-none hover:bg-[#354a56] rounded transition duration-300 ease-in-out relative'>
              <IoSettingsOutline className='text-base xl:text-xl text-[rgb(220,243,255)' />
              {isFinite && i == 2 && (
                <div className='bg-[#f0f6f9] rounded p-2 w-[300px] text-left  absolute top-0 left-0 transform translate-x-[-226px] translate-y-[58px] z-50 text-[#36576b] flex flex-wrap'>
                  <div className='border-b border-b-[#cbd7df] m-2 pb-3 w-full'>Preferences</div>
                  <Link href='#' className='mb-2 pb-3 before:content-["\26F6"] before:mx-1 w-full'>Toggle Fullscreen</Link>
                  <Link href='#' className='mb-2 pb-3 before:content-["\26C1"] before:mx-1 w-full'>Clear Local Storage</Link>
                  <Link href='#' className='mb-2 pb-3 before:content-["\263A"] before:mx-1 w-full'>Privacy Settings</Link>
                  <Link href='#' className='mb-2 before:content-["\26A0"] before:mx-1 w-full'>Other Settings</Link>
                </div>
              )}
            </li>
            <li className=' w-full h-full  flex justify-center items-center'>
              <Image src={profilePic} className='w-[80%] xl:w-[50%] h-full rounded-full' />
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}