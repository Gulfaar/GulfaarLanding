import React from 'react'

import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const page = () => {
  return (
    <div>
        <Header title='About Us' subtitle='Connecting Businesses, Building Global Success!"'/>

        <AboutUs/>

        <Footer/>
      
    </div>
  )
}

export default page
