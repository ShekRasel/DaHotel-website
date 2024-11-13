import React from 'react'
import TopBanner from '../common components/components/TopBanner'
import OurRating from '../common components/components/OurRating'
import HotelImages from '../common components/components/HotelImages'
import Animate from '../common components/components/Animate'
import { IoCheckmark } from "react-icons/io5";
function About() {
  return (
    <div>
        
        <TopBanner About={'About'}/>
        <div className='  mt-24 flex flex-col  md:flex-row  px-4 xl:px-24 2xl:px-48 justify-between  gap-14 2xl:gap-24'>

          <div className='md:w-1/2'>
            <img src="/public/images/pexels-photo-262047.jpeg" alt="" />
          </div>
          <div className='font-roboto tracking-wide md:w-1/2'>
            <h2>WHY CHOOSE US</h2>
            <h1 className='text-4xl 2xl:text-5xl font-semibold text-[#2C4549] mt-8'>Most Safe & Rated Hotel</h1>
            <h1 className='text-4xl 2xl:text-5xl italic text-[#2C4549] mt-3'>In London.</h1>
            <p className='mt-8 text-gray-500'>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p>

            <h1 className='mt-8 text-[#2C4549] flex items-center gap-2'><span><IoCheckmark /></span>24 Month / 24,000km Nationwide Warranty monotone</h1>
            <h1 className='mt-1 text-[#2C4549] flex items-center gap-2'><span><IoCheckmark /></span>Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</h1>
            <h1 className='mt-1 text-[#2C4549] flex items-center gap-2'><span><IoCheckmark /></span>Customer Rewards Program and excellent technology</h1>
          </div>

        </div>
        <OurRating paddingBottom={'pb-32 xl:pb-56 2xl:pb-80'}/>
        <Animate/>
        <HotelImages/>
    </div>
  )
}

export default About