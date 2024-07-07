
import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import moment from 'moment';
import { CiMenuKebab, CiBookmarkPlus } from "react-icons/ci";

export default function CustomCalendar() {
  const [value, onChange] = useState(new Date());
  const events = [
    { date: '2024-05-05', title: 'A', color: 'bg-red-500' },
    { date: '2024-05-12', title: 'D', color: 'bg-blue-500' },
    { date: '2024-05-19', title: 'P', color: 'bg-yellow-500' },
    { date: '2024-05-26', title: 'T', color: 'bg-orange-500' },
  ];
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const event = events.find(event => event.date === formattedDate);
      return event ? (
        <div className={`text-xs text-white  p-1 rounded ${event.color}`}>
          {event.title}
        </div>
      ) : null;
    }
  };

  return (
    <div className="w-full h-full text-white rounded-lg">
      <div className="flex justify-between items-center mb-5 bg-[#2f414c] py-[2.1rem] px-[2.2rem]">
        <div className='w-3/4'>
          <small className='block text-[#9bbcd1] mb-[0.6rem] text-[1.2rem]'>{value.getFullYear()}</small>
          <span className="mr-3 text-[#dcf3ff] text-[1.5rem]">{moment(value).format('dddd, MMMM D')}</span>
        </div>
        <div className='w-1/4 flex justify-center items-center gap-2'>
          <div className='w-10 h-10 flex justify-center items-center transition duration-300 hover:bg-[rgba(57,78,90,.35)] rounded-full group cursor-pointer'>
            <CiBookmarkPlus className='text-[#9bbcd1] text-[1.5rem] group-hover:text-[#dcf3ff]'/>
          </div>
          <div className='w-10 h-10 flex justify-center items-center transition duration-300 hover:bg-[rgba(57,78,90,.35)] rounded-full group cursor-pointer'>
            <CiMenuKebab className='text-[#9bbcd1] text-[1.5rem] group-hover:text-[#dcf3ff]'/>
          </div>
        </div>
        <div>

        </div>
      </div>
      <Calendar
        locale="en-US"
        onChange={onChange}
        value={value}
        tileContent={tileContent}
        className="!bg-transparent !w-fit !h-fit !border-0 text-white rounded-lg"
        tileClassName="text-center"
      />
    </div>
  );

}
