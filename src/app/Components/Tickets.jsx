
export default function Tickets() {
    return (
        <div className='w-full'>
            <ul className='w-full p-1'>
                <li className='text-[#b7d3e4] text-sm flex py-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='flex mr-4 pl-2'>
                        <div className='bg-white text-black p-2 rounded-l'>#114</div>
                        <div className='bg-[#e53935] text-white p-2 pr-10 text-center rounded-r'>Server</div>
                    </div>
                    Lorem ipsum dolor sit amet imperdiet dictum
                </li>
                <li className='text-[#b7d3e4] text-sm flex py-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='flex mr-4 pl-2'>
                        <div className='bg-white text-black p-2 rounded-l'>#12</div>
                        <div className='bg-[#27a4fb] text-white p-2 pr-10 text-center rounded-r'>High</div>
                    </div>
                    Donec lacus ipsum laoreet non eleifend ulvinar aeo
                </li>
                <li className='text-[#b7d3e4] text-sm flex py-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='flex mr-4 pl-2'>
                        <div className='bg-white text-black p-2 rounded-l'>#99</div>
                        <div className='bg-[#2cc56f] text-white p-2 pr-10 text-center rounded-r'>Normal</div>
                    </div>
                    Phasellus ultricies porta ipsum ut lacinia
                </li>
                <li className='text-[#b7d3e4] text-sm flex py-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='flex mr-4 pl-2'>
                        <div className='bg-white text-black p-2 rounded-l'>#115</div>
                        <div className='bg-[#ffc021] text-white p-2 pr-10 text-center rounded-r'>2.0</div>
                    </div>
                    Lorem ipsum dolor sit amet imperdiet dictum
                </li>
                <li className='text-[#b7d3e4] text-sm flex py-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='flex mr-4 pl-2'>
                        <div className='bg-white text-black p-2 rounded-l'>#115</div>
                        <div className='bg-[#ac66f5] text-white p-2 pr-10 text-center rounded-r'>Regression</div>
                    </div>
                    Cras bibendum nibh vitae condimentum dignissim
                </li>
            </ul>
        </div>
    )
}