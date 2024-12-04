import React from 'react'
import TopBanner from './../common components/components/TopBanner';
import FeatureSection from '../components/HomePageComponents/FeatureSection';
import BookPlane from '../components/HomePageComponents/BookPlane';
import Photoshot from '../components/HomePageComponents/Photoshot';
import HotelImages from '../common components/components/HotelImages';

function OurServices() {
  return (
    <div>
        <TopBanner ourService='Our Service'/>
        <FeatureSection/>
        <BookPlane/>
        <Photoshot/>
        <HotelImages/>
    </div>
  )
}

export default OurServices