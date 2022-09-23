import React from 'react'
import FooterCards from './FooterCards'
import FooterIcon from './FooterIcon'
import FooterSection from './FooterSection'
import { FooterContainer } from './FooterStyles'
import { Newsletter } from './Newsletter'
const FooterHeader = () => {
  return (
    <>
      <FooterContainer>
        <Newsletter />
        <FooterSection />
        <FooterIcon />
        <FooterCards />
      </FooterContainer>
    </>
  )
}

export default FooterHeader