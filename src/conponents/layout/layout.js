import React from 'react'
import Footer from '../footer/Footer'
import { HomeNavbar } from '../navbar/Navbar'

function Layout(props) {
  return (
    <div>
        <HomeNavbar/>
        <div className=''>{props.children}</div>
        <Footer/>
        
    </div>
  )
}

export default Layout