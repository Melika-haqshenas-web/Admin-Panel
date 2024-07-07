import Image from 'next/image'

import img1 from '../../../public/1.jpg'
import img2 from '../../../public/2.jpg'
import img3 from '../../../public/3.jpg'
import img4 from '../../../public/4.jpg'
import img5 from '../../../public/5.jpg'


export default function RecentPosts() {
    return (
        <div className='w-full'>
            <ul className='w-full'>
                <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={img1} className='w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>By Jannette Jackson an Hour ago</p>
                    </div>
                </li>
                <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={img2} className='w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>David Villa Jacobs</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lobortis sapien non posuere</p>
                    </div>
                </li>
                <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={img3} className='w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Candice Barnes</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Quisque non tortor ultricies, posuere elit id, lacinia purus curabitur</p>
                    </div>
                </li>
                <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={img4} className='w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Darla Mckinney</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Duis tincidunt augue nec sem dignissim scelerisque. Vestibulum rhoncus sapien sed nulla aliquam lacinia</p>
                    </div>
                </li>
                <li className='text-[#b7d3e4] text-sm flex p-2 my-4 hover:bg-[rgba(57,78,90,.25)] cursor-pointer'>
                    <div className='mr-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={img5} className='w-full h-full rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-ellipsis line-clamp-1 text-[#b7d3e4]'>Rudolph Perez</h4>
                        <p className='text-ellipsis line-clamp-1 text-[#7996a9]'>Phasellus a ullamcorper lectus, sit amet viverra quam. In luctus tortor vel nulla pharetra bibendum</p>
                    </div>
                </li>

            </ul>
        </div>
    )
}