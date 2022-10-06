import React from 'react'
import FooterCards from './FooterCards'
import FooterIcon from './FooterIcon'
import FooterSection from './FooterSection'
import { Newsletter } from './Newsletter'
const FooterHeader = () => {
  return (
    <>
      <Newsletter />
      <FooterSection />
      <FooterIcon />
      <FooterCards />
    </>
  )
}

export default FooterHeader