import RecentPosts from "./RecentPosts"
import { IoIosArrowRoundBack } from "react-icons/io";
export default function EmailClick() {
    return (
        <div className="w-full h-full bg-[rgb(34,49,58)] cursor-auto">
            <div className="w-full h-[15%] bg-[rgb(30,42,49)] flex">
                <div className="w-1/4 flex items-center justify-end">
                    <div className="w-11 h-11 rounded-full bg-[#2b3c46] mr-8 cursor-pointer hover:bg-[#2f414c] flex justify-center items-center text-center text-[#9bbcd1] text-3xl">
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
    )
}