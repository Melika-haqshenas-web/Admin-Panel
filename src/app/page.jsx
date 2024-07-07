
'use client'
import { Roboto } from 'next/font/google'


// components
import Dashboard from './Components/Dashboard'
import Haeder from './Components/Header'


let subNum = 1
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})
export default function Page() {

  return (
    <div className={`${roboto.className} w-full h-[1100vh] md:h-[1180vh] lg:h-[820vh] xl:h-[710vh] 2xl:h-[950vh] bg-[rgb(34,49,58)] relative`}>
      <Haeder subNum={subNum}/>
      <section className='w-full h-[408vh] bg-[rgb(34,49,58)]' >
        <Dashboard />
      </section>
    </div>
  )
}