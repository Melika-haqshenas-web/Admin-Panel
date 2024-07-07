'use client'

import { Roboto } from 'next/font/google'
import Haeder from '../Components/Header'
import Typography from '../Components/Typography'


let subNum = 2
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function Page() {

  return (
    <>
      <div className={`${roboto.className} w-full h-fit bg-[rgb(34,49,58)] relative`}>
        <Haeder subNum={subNum} />
        <section className='w-ful h-[1900vh] md:h-[1180vh] lg:h-[820vh] xl:h-[710vh] 2xl:h-[950vh] bg-[rgb(34,49,58)]' >
          <Typography />
        </section>
      </div>

    </>

  )
}