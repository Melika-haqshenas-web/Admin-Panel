import { IoIosArrowRoundBack } from "react-icons/io";
export default function TaskClick() {
    return (
        <div className="w-full h-full bg-[rgb(34,49,58)] cursor-auto">
            <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                <div className="w-1/4 flex items-center justify-end">
                    <div className="w-11 h-11 rounded-full bg-[#2b3c46] mr-8 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
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
    )
}