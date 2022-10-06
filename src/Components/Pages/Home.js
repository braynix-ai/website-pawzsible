import React from 'react'

import Feed from '../Feed Your Dog/Feed'
import GroomSection from '../Groom You Dog/GroomSection'
import Hero from '../Hero/Hero'
import TalkSection from "../Talk To Us/TalkSection"

import Brands from '../Poplular Brands/Brands'
import Working from "../Stepper/Working"
const Home = () => {
  return (
    <>
      <Hero />

      <Feed />
      <Brands />
      <GroomSection />

      <TalkSection />
      <Working />

    </>
  )
}

export default Home