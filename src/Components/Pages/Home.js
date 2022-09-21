import React from 'react'
import CardSection from '../Feed Your Dog/CardSection'

import Feed from '../Feed Your Dog/Feed'
import GroomSection from '../Groom You Dog/GroomSection'
import Hero from '../Hero/Hero'
import TalkSection from "../Talk To Us/TalkSection"

import Working from "../Stepper/Working"
import Brands from '../Poplular Brands/Brands'
const Home = () => {
  return (
   <>
  
   <Feed/>
   
   <CardSection/>  
   <Brands/>
    <GroomSection/>
   
   <TalkSection/> 
   <Working/>
   <Hero/>
   
   
   </>
  )
}

export default Home