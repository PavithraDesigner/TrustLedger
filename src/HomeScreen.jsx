import React from 'react'
import Headers from './Header'

import Footer from './Footer'
import KeyFeatures from './KeyFeatures'
import './Style.css'
import AuthBox from './AuthBox'

const HomeScreen = () => {
  return (
    <>
    <Headers/>
    <div id="container">
        <div id="left">
           
            
           <p>TrustLedger delivers secure biometric identities 🧬 with blockchain-backed reputation scoring ⭐ to ensure trusted digital interactions 🤝.</p>
            <KeyFeatures />
           
        </div>
        <div id="right">
           <AuthBox/>
        </div>
    </div>
    
    </>
  )
}

export default HomeScreen