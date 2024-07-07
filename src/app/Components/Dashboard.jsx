'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';

import LeftMenu from "../LeftMenu/page";
import Footer from "./Footer";
import SignupsUser from "./SignupsUser";
import Tickets from "./Tickets"
import ToDoList from "./ToDoList"
import RecentPosts from "./RecentPosts"
import MapComponent from './Map';
import CustomChart1 from './CustomChart1';
import CustomChart2 from './CustomChart2';
import CustomChart3 from './CustomChart3';
import CustomChartBlue from './CustomChartBlue'
import CustomChartYellow from './CustomChartYellow'
import CustomChartPurpel from './CustomChartPurpel'
import Calendar from './Calender';

import div6 from '../../../public/featured-post.jpg'


import React from "react";
import 'react-calendar/dist/Calendar.css';



let num = 1

export default function Dashboard() {
  return (
    <section className="w-full h-fit absolute top-32 left-0 flex bg-transparent">
      <LeftMenu num={num} />
      <div className="w-full xl:w-4/5 h-fit ">
        <div className="w-full h-24 xl:h-16 bg-[rgb(30,42,49)]">
          <h2 className="text-[#dcf3ff] text-base pl-10 pt-3">DASHBOARD</h2>
          <p className="text-[#9bbcd1] text-base pl-10">Welcome to the unique Material Admin Extended Dark web app experience!</p>
        </div>

        <div className="w-full h-fit">
          <section className="w-full xl:w-[95%] h-fit grid md:grid-cols-4 gap-4 xl:mt-2">
            <div className="border border-white col-span-2 pl-7 xl:pl-9 pt-4 bg-[#2b3c46] rounded shadow-[0_3px_3px_rgba(0,0,0,.05)] m-1 xl:m-0">
              <h4 className="text-sm text-[#dcf3ff] mb-2 pl-2 xl:pl-0">SERVER PROCESS</h4>
              <h6 className="text-xs text-[#7996a9] pl-2 xl:pl-0">Maecenas faucibus mollis interdum porttitor</h6>
              <div className="max-w-64 xl:max-w-full h-80">
                <CustomChart1 />
                <canvas id="myChart1" className="pr-2 w-[230.4px] " width="349" height="250"></canvas>
              </div>
            </div>

            <div className="border border-white col-span-2 pl-7 xl:pl-9 pt-4 bg-[#2b3c46] rounded shadow-[0_3px_3px_rgba(0,0,0,.05)] m-1 xl:m-0">
              <h4 className="text-sm text-[#dcf3ff] mb-2 pl-2 xl:pl-0">SALES STATISTICS</h4>
              <h6 className="text-xs text-[#7996a9] pl-2 xl:pl-0">Vestibulum purus quam scelerisque, mollis nonummy metus</h6>
              <div className="max-w-64 xl:max-w-full h-80">
                <CustomChart2 />
              </div>
            </div>
          </section>

          {/* chart */}
          <section className=" xl:w-[95%] h-fit grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-3 gap-4 xl:mt-2">

            <div className="border border-white md:flex flex-nowrap grid md:grid-cols-3 gap-3 xl:col-span-3 overflow-hidden">
              <div className="border border-white w-full md:w-1/3">
                <div className='w-full h-fit'>
                  <h4 className='text-base text-[#dcf3ff] px-9 pt-9'>WEBSITE VIEWS</h4>
                  <h6 className='mb-8 text-[#7996a9] text-sm leading-6 px-9'>Venenatis portauam Inceptos ameteiam</h6>
                  <div className='text-4xl text-[#27a4fb] px-9'>52.78M+</div>
                </div>
                <div className='w-full overflow-hidden'>
                  <CustomChartBlue />
                </div>
              </div>
              <div className="border border-white w-full md:w-1/3">
                <div className='w-full h-fit'>
                  <h4 className='text-base text-[#dcf3ff] px-9 pt-9'>WEBSITE IMPRESSIONS</h4>
                  <h6 className='mb-8 text-[#7996a9] text-sm leading-6 px-9'>Consectetur Ultricies Porta Fringilla</h6>
                  <div className='text-4xl text-[rgb(255,192,33)] px-9'>9831+</div>
                </div>
                <div className='w-full overflow-hidden'>
                  <CustomChartYellow />
                </div>
              </div>
              <div className="border border-white w-full md:w-1/3">
                <div className='w-full h-fi'>
                  <h4 className='text-base text-[#dcf3ff] px-9 pt-9'>TOTAL SALES</h4>
                  <h6 className='mb-8 text-[#7996a9] text-sm leading-6 px-9'>Purus Malesuada Consectetur</h6>
                  <div className='text-4xl text-[rgb(172,102,245)] px-9'>$458,778+</div>
                </div>
                <div className='w-full overflow-hidden'>
                  <CustomChartPurpel />
                </div>
              </div>
            </div>

            <div className="border border-white w-full row-span-2">
              <div className='w-full h-full p-9'>
                <h4 className='text-base text-[#dcf3ff]'>MOST RECENT SIGNUPS</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-6'>Magna cursus malesuada lacinia</h6>
                <SignupsUser />
              </div>
            </div>

            <div className="border border-white w-full row-span-4">
              <div className='w-full h-[40%]'>
                <h4 className='text-base text-[#dcf3ff] p-2 md:p-4'>REALTIME VISITORS</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-4 pl-4'>Nullam dolor isnibh ultricies vehicula adipiscing</h6>
                <div className='w-full flex justify-evenly items-center'>
                  <div className='w-1/2 border border-[#415969] p-5 m-2'>
                    <strong className='block text-[#dcf3ff] text-2xl'>23528</strong>
                    <small className='text-[#9bbcd1] text-base'>Visitor for last 24 hours</small>
                  </div>
                  <div className='w-1/2 border border-[#415969] p-5 m-2'>
                    <strong className='block text-[#dcf3ff] text-2xl'>746</strong>
                    <small className='text-[#9bbcd1] text-base'>Visitors last 30 minutes</small>
                  </div>
                </div>
                <div className='w-full'>
                  <MapComponent />
                  <div className='w-full'>
                    <ul className='w-full'>
                      <li className='p-2 text-[#b7d3e4] text-sm flex py-2 my-2 hover:bg-[rgba(57,78,90,.25)] cursor-pointer flex-wrap'>
                        Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)
                        <div className='flex mt-3 w-full'>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>United States</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Firefox</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Mac OSX</span>
                        </div>
                      </li>
                      <li className='p-2 text-[#b7d3e4] text-sm flex py-2 my-2 hover:bg-[rgba(57,78,90,.25)] cursor-pointer flex-wrap'>
                        Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)
                        <div className='flex mt-3 w-full'>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Australia</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Chrome</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Android</span>
                        </div>
                      </li>
                      <li className='p-2 text-[#b7d3e4] text-sm flex py-2 my-2 hover:bg-[rgba(57,78,90,.25)] cursor-pointer flex-wrap'>
                        Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)
                        <div className='flex mt-3 w-full'>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Brazil</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Edge</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Windows</span>
                        </div>
                      </li>
                      <li className='p-2 text-[#b7d3e4] text-sm flex py-2 my-2 hover:bg-[rgba(57,78,90,.25)] cursor-pointer flex-wrap'>
                        Sunday, September 4, 20:59:04 (1 Min 02 Seconds)
                        <div className='flex mt-3 w-full'>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>South Korea</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Chrome</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Android</span>
                        </div>
                      </li>
                      <li className='p-2 text-[#b7d3e4] text-sm flex py-2 my-2 hover:bg-[rgba(57,78,90,.25)] cursor-pointer flex-wrap'>
                        Sunday, September 4, 20:58:12 (3 Min 44 Seconds)
                        <div className='flex mt-3 w-full'>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Japan</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Chrome</span>
                          <span className='p-2 border border-[#415969] text-sm mr-0.5'>Windows</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white row-span-2 h-fit">
              <Image src={div6} className='w-full h-[40%]' />
              <div className='w-full h-[60%] p-4'>
                <h4 className='text-base text-[#dcf3ff]'>PELLENTESQUE LIGULA FRINGILLA</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-6'>by Malinda Hollaway on 19th June 2015 at 09:10 AM</h6>
                <p className='text-[#9bbcd1] leading-6 mb-0 md:mb-3'>Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra.</p>
                <Link href='#' className='text-sm text-[#7996a9] transition duration-300 hover:text-[#dcf3ff]'>VIEW ARTICLE...</Link>
              </div>
            </div>

            <div className="border border-white row-span-2">
              <div className='w-full p-4'>
                <h4 className='text-base text-[#dcf3ff]'>TICKETS</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-6'>Nullam dolorenibh ultricies vehicula</h6>
              </div>
              <Tickets />
              <Link href='#' className='text-center flex justify-center items-center text-sm text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] pb-3 md:mt-6'>VIEW ARTICLE...</Link>
            </div>

            <div className="border border-white row-span-3">
            <Calendar />
            </div>

            <div className="border border-white row-span-4">
              <div className='w-full p-5'>
                <h4 className='text-base text-[#dcf3ff]'>TODO LISTS</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-6'>Venenatis portauam Inceptos ameteiam</h6>
              </div>
              <ToDoList />
              <Link href='#' className='text-center flex justify-center items-center text-sm text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] mb-2'>VIEW ARTICLE...</Link>
            </div>

            <div className="border border-white row-span-2">
              <div className='w-full p-5'>
                <h4 className='text-base text-[#dcf3ff]'>RECENT POSTS</h4>
                <h6 className='mb-9 text-[#7996a9] text-sm leading-6'>Venenatis portauam Inceptos ameteiam</h6>
              </div>
              <RecentPosts />
              <Link href='#' className='text-center flex justify-center items-center text-sm text-[#7996a9] transition duration-300 hover:text-[#dcf3ff] pb-5 md:mt-10'>VIEW ARTICLE...</Link>
            </div>

            <div className="border border-white row-span-1">
              <h4 className="text-sm text-[#dcf3ff] mb-2 px-6 pt-6">GROWTH RATE</h4>
              <h6 className="text-xs text-[#7996a9] px-6">Commodo luctus nisi erat porttitor ligula eget lacinia odio semnec</h6>
              <div className="w-full pr-2">
                <CustomChart3 />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>

    </section>
  )
}