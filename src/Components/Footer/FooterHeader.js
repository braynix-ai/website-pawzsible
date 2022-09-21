import React from 'react'
import { Newsletter } from './Newsletter'
import { FooterContainer } from './FooterStyles'
import FooterSection from './FooterSection'
import FooterCards from './FooterCards'
import FooterIcon from './FooterIcon'
const FooterHeader = () => {
  return (
   <>
   <FooterContainer>
<Newsletter/>
      <FooterSection/>
      <FooterIcon/>
      <FooterCards/>
      </FooterContainer>
      </> 
  )
}

export default FooterHeader