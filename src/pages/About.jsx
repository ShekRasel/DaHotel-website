import React from 'react'
import TopBanner from '../common components/components/TopBanner'
import OurRating from '../common components/components/OurRating'
import HotelImages from '../common components/components/HotelImages'
import Animate from '../common components/components/Animate'
function About() {
  return (
    <div>
        <TopBanner About={'About'}/>
        <OurRating paddingBottom={'pb-32 xl:pb-56 2xl:pb-80'}/>
        <Animate/>
        <HotelImages/>
    </div>
  )
}

export default About