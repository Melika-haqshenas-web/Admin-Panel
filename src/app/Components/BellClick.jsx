
import { PiBoxArrowDownLight } from "react-icons/pi";
import { CiCircleCheck, CiCircleAlert, CiDiscount1 } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineEventBusy } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export default function BellClick() {
    return (
        <div className="w-full h-full bg-[rgb(34,49,58)] cursor-auto">
            <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                <div className="w-1/4 flex items-center justify-end">
                    <div className="w-11 h-11 rounded-full bg-[#2b3c46] mr-8 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
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
    )
}