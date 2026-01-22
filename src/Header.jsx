import React from 'react'
import './Style.css'
import security from './security.png'

const Header = () => {
  return (
    <>
    <div id="title">
         <img 
            src={security}
            style={{width:"50px", height:"50px", marginTop:"20px",padding:"10px"}}
            />
    <p>TrustLedger</p>
   
    </div>
     <p id="para">Secure Digital Identity & Reputation on Blockchain 🔗</p>
    </>
    
  )
}

export default Header